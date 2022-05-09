import { asText } from '@prismicio/helpers'
import type { PrismicDocument } from '@prismicio/types'

import Prismic, { Client } from './prismic'
interface PageDocument<T> extends PrismicDocument {
  data: T
}

export type HomePage = PageDocument<{
  images: GalleryImage[]
}>

export async function getAllProjects() {
  const { results } = await Client().query(
    Prismic.Predicates.at('document.type', 'project'),
    /**
     * query follows [my.{document.type}.{attribute} [desc|asc]]
     */
    {
      orderings: '[my.project.importance desc]',
    }
  )

  return results.map(({ data, uid }) => ({
    name: asText(data.name),
    href: uid,
    uid,
  })) as Project[]
}

export async function getProject<T extends PrismicDocument>(id: string) {
  const data = await Client().getByUID('project', id, {})
  return data as T
}

export async function getPage<T extends PrismicDocument>(page: string) {
  const doc = await Client().getSingle(page, {})
  return doc as T
}
