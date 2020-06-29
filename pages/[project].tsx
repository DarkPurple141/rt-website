import { FunctionComponent } from 'react'
import { RichText } from 'prismic-reactjs'
import { GetStaticProps, GetStaticPaths } from 'next'
import { getAllProjects, getProject } from '../lib/api'
import Head from 'next/head'

type IProps = {
  project: Project
}

export const getStaticProps: GetStaticProps<IProps> = async ({ params }) => {
  return {
    props: {
      project: await getProject((params as any).project),
      projects: await getAllProjects(),
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: (await getAllProjects()).map(({ href }) => ({
      params: {
        project: href,
      },
    })),
    fallback: false,
  }
}

const Project: FunctionComponent<IProps> = ({ project }) => {
  return (
    <>
      <Head>
        <title>{RichText.asText(project.name)}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="gallery">
        {project.images.map(({ image }) => (
          <img key={image.url} src={image.url} />
        ))}
      </div>
      <style jsx>{`
        .gallery {
          max-width: 600px;
        }
      `}</style>
    </>
  )
}

export default Project
