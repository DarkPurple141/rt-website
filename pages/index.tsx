import { GetStaticProps } from 'next'
import { FunctionComponent } from 'react'
import { getAllProjects } from '../lib/api'

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

const Home: FunctionComponent<IProps> = ({ projects }) => {
  return <img style={{ maxWidth: 600 }} src="lilyfield.jpg" />
}

export default Home
