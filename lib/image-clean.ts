import http from 'https'
import { Transform as Stream } from 'stream'
import fs from 'fs'
import u from 'url'
import path from 'path'

import sharp, { Stats } from 'sharp'

import { TABLET_BREAKPOINT } from './constants'

/**
 * Updates the local public folder with the canonical version of the image from the cms.
 *
 * @param url image url location
 * @returns The root relative path to the final asset
 */
export async function writeImageToLocal(url: string): Promise<{
  src: string
  mobileSrc: string
  dominant: Stats['dominant']
}> {
  return new Promise((res, rej) => {
    const parsedUrl = u.parse(url)
    const base = path.basename(
      parsedUrl.pathname!.replace(/\%2B/g, '_').replace(/\+/g, '_')
    )
    const mobileBase = `mobile-${base}`
    const servedFileName = path.join('/img', base)
    const servedMobileFileName = path.join('/img', mobileBase)
    const pwd = process.cwd()
    const fileName = path.join(pwd, './public/img', base)
    const mobileFileName = path.join(pwd, './public/img', mobileBase)

    const request = http.request(url, response => {
      const data = new Stream()

      response.on('data', chunk => {
        data.push(chunk)
      })

      response.on('end', () => {
        const buffer = data.read()
        fs.writeFile(fileName, buffer, () => {
          const sharpImage = sharp(buffer)
          sharpImage.resize({ width: TABLET_BREAKPOINT }).toFile(mobileFileName)
          sharpImage.stats().then(({ dominant }) => {
            res({
              src: servedFileName,
              dominant,
              mobileSrc: servedMobileFileName,
            })
          })
        })
      })

      response.on('error', rej)
    })

    request.end()
  })
}
