import type { GetStaticProps } from 'next'
import type { FC } from 'react'
import { getAllProjects, getPage, HomePage } from '../lib/api'
import Gallery, { GalleryProps } from '../components/Gallery'
import { writeImageToLocal } from '../lib/image-clean'

type IProps = {
  name: string
  projects: Pick<Project, 'name' | 'href'>[]
} & GalleryProps

export const getStaticProps: GetStaticProps<IProps> = async () => {
  const doc = await getPage<HomePage>('home')
  const slides = await Promise.all(
    doc.data.images.map(async ({ image }) => {
      const src = await writeImageToLocal(image.url)
      return {
        alt: image.alt,
        src,
      } as HTMLImageElement
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
