import type { FC } from 'react'
import { asText } from '@prismicio/helpers'
import type { GetStaticProps, GetStaticPaths } from 'next'
import type { PrismicDocument, RichTextField } from '@prismicio/types'

import { getAllProjects, getProject } from '../lib/api'
import Gallery, { GalleryProps } from '../components/Gallery'
import HeadBase from '../components/Head'
import { writeImageToLocal } from '../lib/image-clean'

type IProps = {
  project: PrismicDocument
  slides: GalleryProps['slides']
}

export const getStaticProps: GetStaticProps<IProps> = async ({ params }) => {
  const projectSlug = await getProject((params as any).project)
  const gallery = projectSlug.data.gallery as any[]
  const [first, ...rest] = await Promise.all(
    gallery.map(async ({ image }) => {
      const { src, dominant, mobileSrc } = await writeImageToLocal(image.url)
      return {
        height: image.dimensions.height,
        width: image.dimensions.width,
        alt: image.alt || projectSlug.uid,
        src,
        fill: `rgb(${dominant.r},${dominant.g},${dominant.b})`,
        srcset: mobileSrc,
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
        id={project.uid!}
        title={asText(project.data.name) || 'Retallack Thompson'}
        imagePath={(splash as HTMLImageElement).src}
        description={asText(copy as RichTextField)}
      />
      <Gallery slides={slides} />
    </>
  )
}

export default Project
