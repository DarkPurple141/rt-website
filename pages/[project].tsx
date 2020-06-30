import { FunctionComponent } from 'react'
import { RichText } from 'prismic-reactjs'
import { GetStaticProps, GetStaticPaths } from 'next'
import { getAllProjects, getProject } from '../lib/api'
import Head from 'next/head'
import Gallery from '../components/Gallery'

type IProps = {
  project: Project
  images: any[]
}

export const getStaticProps: GetStaticProps<IProps> = async ({ params }) => {
  const project: Project = await getProject((params as any).project)
  return {
    props: {
      images: await project.images.map(({ image }) => ({
        alt: image.alt,
        src: image.url,
      })),
      project,
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

const Project: FunctionComponent<IProps> = ({ project, images }) => {
  return (
    <>
      <Head>
        <title>{RichText.asText(project.name)}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Gallery images={images} />
    </>
  )
}

export default Project
