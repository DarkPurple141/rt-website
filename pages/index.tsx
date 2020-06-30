import { GetStaticProps } from 'next'
import { FunctionComponent } from 'react'
import { getAllProjects } from '../lib/api'
import Gallery from '../components/Gallery'

type IProps = {
  projects: Pick<Project, 'name' | 'href'>[]
}

export const getStaticProps: GetStaticProps<IProps> = async () => {
  return {
    props: {
      projects: await getAllProjects(),
    },
  }
}

const Home: FunctionComponent<IProps> = () => {
  return <Gallery images={[{ src: 'lilyfield.jpg' }]} />
}

export default Home
