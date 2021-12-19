import Prismic from '@prismicio/client'

export const apiEndpoint = 'https://retallack-thompson.cdn.prismic.io/api/v2'
export const accessToken = ''

const createClientOptions = (req = null, prismicAccessToken?: string) => {
  const reqOption = req ? { req } : {}
  const accessTokenOption = prismicAccessToken
    ? { accessToken: prismicAccessToken }
    : {}
  return {
    ...reqOption,
    ...accessTokenOption,
  }
}

// Client method to query documents from the Prismic repo
export const Client = (req = null) =>
  Prismic.client(apiEndpoint, createClientOptions(req, accessToken))

export default Prismic
