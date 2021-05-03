import http from 'https'
import { Transform as Stream } from 'stream'
import fs from 'fs'
import u from 'url'
import path from 'path'

/**
 * Updates the local public folder with the canonical version of the image from the cms.
 *
 * @param url image url location
 * @returns The root relative path to the final asset
 */
export async function writeImageToLocal(url: string): Promise<string> {
  return new Promise(res => {
    const parsedUrl = u.parse(url)
    const base = path.basename(parsedUrl.pathname!)
    const servedFileName = path.join('/img', base)
    const fileName = path.join(process.cwd(), './public/img', base)

    const request = http.request(url, response => {
      const data = new Stream()

      response.on('data', chunk => {
        data.push(chunk)
      })

      response.on('end', () => {
        fs.writeFileSync(fileName, data.read())
      })
    })

    request.end(() => res(servedFileName))
  })
}
