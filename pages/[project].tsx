import { FunctionComponent } from 'react'
import { RichText } from 'prismic-reactjs'
import { GetStaticProps, GetStaticPaths } from 'next'
import { getAllProjects, getProject } from '../lib/api'
import Gallery from '../components/Gallery'
import HeadBase from '../components/Head'

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
  {
    RichText.asText(project.name)
  }
  return (
    <>
      <HeadBase
        id={project.uid}
        title={RichText.asText(project.name)}
        imageUrl={images[0] ? images[0].src : '/lilyfield.jpg'}
      />
      <Gallery images={images} />
    </>
  )
}

export default Project
