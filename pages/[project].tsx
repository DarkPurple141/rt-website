import type { FC } from 'react'
import { RichText, RichTextBlock } from 'prismic-reactjs'
import type { GetStaticProps, GetStaticPaths } from 'next'
import { getAllProjects, getProject } from '../lib/api'
import Gallery, { GalleryProps } from '../components/Gallery'
import HeadBase from '../components/Head'
import type { Document } from '@prismicio/client/types/documents'
import { writeImageToLocal } from '../lib/image-clean'

type IProps = {
  project: Document
  slides: GalleryProps['slides']
}

export const getStaticProps: GetStaticProps<IProps> = async ({ params }) => {
  const projectSlug = await getProject((params as any).project)
  const gallery = projectSlug.data.gallery as any[]
  const [first, ...rest] = await Promise.all(
    gallery.map(async ({ image }) => {
      const src = await writeImageToLocal(image.url)
      return {
        alt: image.alt,
        src,
      }
    })
  )

  return {
    props: {
      slides: [first, projectSlug.data.description, ...rest],
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

const Project: FC<IProps> = ({ project, slides }) => {
  const [splash, copy] = slides
  return (
    <>
      <HeadBase
        id={project.uid}
        title={RichText.asText(project.data.name)}
        imagePath={(splash as HTMLImageElement).src}
        description={RichText.asText(copy as RichTextBlock[])}
      />
      <Gallery slides={slides} />
    </>
  )
}

export default Project
