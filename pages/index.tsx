import type { GetStaticProps } from 'next'
import type { FC } from 'react'
import { getAllProjects, getPage, HomePage } from '../lib/api'
import Gallery, { GalleryProps } from '../components/Gallery'

type IProps = {
  name: string
  projects: Pick<Project, 'name' | 'href'>[]
} & GalleryProps

export const getStaticProps: GetStaticProps<IProps> = async () => {
  const doc = await getPage<HomePage>('home')
  return {
    props: {
      name: 'home',
      slides: doc.data.images.map(({ image: { url, alt } }) => ({
        alt,
        src: url,
      })),
      projects: await getAllProjects(),
    },
  }
}

const Home: FC<IProps> = ({ slides }) => {
  return <Gallery isAuto slides={slides} />
}

export default Home
