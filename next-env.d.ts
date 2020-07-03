/// <reference types="next" />
/// <reference types="next/types/global" />

declare module 'prismic-reactjs'

type GalleryImage = {
  image: {
    alt: string
    url: string
    dimensions: {
      width: number
      height: number
    }
  }
}

type Project = {
  uid: string
  name: string
  href: string
  images: GalleryImage[]
}
