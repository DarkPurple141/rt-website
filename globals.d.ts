interface Window {
  gtag: (type: string, ...args: any[]) => void
}

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
  images: GalleryImage
}
