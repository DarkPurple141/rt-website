import { GetStaticProps } from 'next'
import { FunctionComponent } from 'react'
import { RichText } from 'prismic-reactjs'

import { getAllProjects } from '../lib/api'
import { Client } from '../lib/prismic'

type IProps = {
  doc: any
}

export const getStaticProps: GetStaticProps<IProps> = async () => {
  return {
    props: {
      projects: await getAllProjects(),
      doc: await (await Client().getSingle('about_page', {})).data.body,
    },
  }
}

const About: FunctionComponent<IProps> = ({ doc }) => {
  return (
    <>
      <div className="article">
        <div className="false-image"></div>
        <RichText render={doc} />
      </div>
      <style jsx>
        {`
          .false-image {
            margin-bottom: 20px;
            width: 400px;
            height: 400px;
            background-color: #ccc;
          }

          .article {
            width: 58%;
            max-width: 480px;
          }

          .article h1 {
            font-style: normal;
            font-weight: 400;
          }
        `}
      </style>
    </>
  )
}

export default About
