import { GetStaticProps } from 'next'
import { FunctionComponent } from 'react'

import { getAllProjects } from '../lib/api'
import { Client } from '../lib/prismic'

type IProps = {
  doc: any
}

export const getStaticProps: GetStaticProps<IProps> = async () => {
  return {
    props: {
      projects: await getAllProjects(),
      doc: await Client().getSingle('about_page', {}),
    },
  }
}

const About: FunctionComponent<IProps> = ({ doc }) => {
  return <div />
}

export default About
