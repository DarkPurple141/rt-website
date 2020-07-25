import Prismic, { Client } from './prismic'
import { RichText } from 'prismic-reactjs'
import { Document } from 'prismic-javascript/types/documents'

interface PageDocument<T> extends Document {
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

  console.info(results)

  return results.map(({ data, uid }) => ({
    name: RichText.asText(data.name),
    href: uid,
    uid,
  })) as Project[]
}

export async function getProject(id: string) {
  const data = await Client().getByUID('project', id, {})
  return data
}

export async function getPage<T extends Document>(page: string) {
  const doc = await Client().getSingle(page, {})
  return doc as T
}
