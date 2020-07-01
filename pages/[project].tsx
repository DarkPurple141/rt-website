import { FunctionComponent } from 'react'
import { RichText } from 'prismic-reactjs'
import { GetStaticProps, GetStaticPaths } from 'next'
import { getAllProjects, getProject } from '../lib/api'
import Gallery from '../components/Gallery'
import HeadBase from '../components/Head'
import { Document } from 'prismic-javascript/types/documents'

type IProps = {
  project: Document
  images: any[]
}

export const getStaticProps: GetStaticProps<IProps> = async ({ params }) => {
  const projectSlug = await getProject((params as any).project)
  const images = projectSlug.data.images as any[]
  return {
    props: {
      images: images.map(({ image }) => ({
        alt: image.alt,
        src: image.url,
      })),
      project: projectSlug,
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
      <HeadBase
        id={project.uid}
        title={RichText.asText(project.data.name)}
        imageUrl={images[0] ? images[0].src : '/lilyfield.jpg'}
      />
      <Gallery images={images} />
    </>
  )
}

export default Project
