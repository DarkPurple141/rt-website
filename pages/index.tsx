import type { GetStaticProps } from 'next'
import type { FC } from 'react'

import { getAllProjects, getPage, HomePage } from '../lib/api'
import Gallery, { GalleryProps } from '../components/Gallery'
import { writeImageToLocal } from '../lib/image-clean'

type IProps = {
  name: string
  projects: Pick<Project, 'name' | 'href'>[]
} & GalleryProps

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const getStaticProps: GetStaticProps<IProps> = async () => {
  const doc = await getPage<HomePage>('home')
  const slides = await Promise.all(
    doc.data.images.map(async ({ image }) => {
      const { src, dominant, mobileSrc } = await writeImageToLocal(image.url)
      return {
        height: image.dimensions.height,
        width: image.dimensions.width,
        alt: image.alt,
        src,
        srcset: mobileSrc,
        fill: `rgb(${dominant.r},${dominant.g},${dominant.b})`,
      }
    })
  )
  return {
    props: {
      name: 'home',
      slides,
      projects: await getAllProjects(),
    },
  }
}

const Home: FC<IProps> = ({ slides }) => {
  return <Gallery isAuto slides={slides} />
}

export default Home
