import { createClient, getRepositoryEndpoint } from '@prismicio/client'

const REPOSITORY_NAME = 'retallack-thompson'

// Client method to query documents from the Prismic repo
export const Client = (req = null) =>
  createClient(getRepositoryEndpoint(REPOSITORY_NAME))
