import { asText } from '@prismicio/helpers'
import type { PrismicDocument } from '@prismicio/types'
import { predicate } from '@prismicio/client'

import { Client } from './prismic'
interface PageDocument<T> extends PrismicDocument {
  data: T
}

export type HomePage = PageDocument<{
  images: GalleryImage[]
}>

export async function getAllProjects() {
  const client = Client()
  const { results } = await client.get({
    predicates: predicate.at('document.type', 'project'),
    /**
     * query follows [my.{document.type}.{attribute} [desc|asc]]
     */
    orderings: 'my.project.importance desc',
  })

  return results.map(({ data, uid }) => ({
    name: asText(data.name),
    href: uid,
    uid,
  })) as Project[]
}

export async function getProject<T extends PrismicDocument>(id: string) {
  const client = Client()
  const data = await client.getByUID('project', id, {})
  return data as T
}

export async function getPage<T extends PrismicDocument>(page: string) {
  const client = Client()
  const doc = await client.getSingle(page, {})
  return doc as T
}
