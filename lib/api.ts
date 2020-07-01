import Prismic, { Client } from './prismic'
import { RichText } from 'prismic-reactjs'

export async function getAllProjects() {
  const { results } = await Client().query(
    Prismic.Predicates.at('document.type', 'project')
  )

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
