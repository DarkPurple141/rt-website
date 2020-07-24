import {
  useState,
  MouseEventHandler,
  useCallback,
  HTMLProps,
  useEffect,
} from 'react'
import { RichText } from 'prismic-reactjs'
import { useInterval, useWindowEvent } from '../utils'
import { useRouter } from 'next/router'

function useGalleryController(images: HTMLProps<Element>[], isAuto?: boolean) {
  const [selectedImage, setSelectedImage] = useState(0)
  const router = useRouter()
  const filteredImages = images.filter(o => o.src || RichText.asText(o))

  const nextImage = useCallback(() => {
    setSelectedImage(currentImage => (currentImage + 1) % filteredImages.length)
  }, [filteredImages])

  useEffect(() => {
    setSelectedImage(0)
  }, [router.asPath])

  const previousImage = useCallback(() => {
    setSelectedImage(
      currentImage =>
        (currentImage - 1 < 0 ? filteredImages.length - 1 : currentImage - 1) %
        filteredImages.length
    )
  }, [filteredImages])

  useWindowEvent('keyup', e => {
    if (isAuto) return

    const { key } = e as KeyboardEvent

    if (key === 'ArrowLeft') {
      previousImage()
    } else if (key === 'ArrowRight') {
      nextImage()
    }
  })

  useInterval(() => {
    if (isAuto) {
      nextImage()
    }
  }, 4000)

  const onClick: MouseEventHandler = e => {
    e.preventDefault()
    if (isAuto) {
      return
    }
    const { width, x } = e.currentTarget.getBoundingClientRect()
    if (e.clientX - x > width / 2) {
      nextImage()
    } else {
      previousImage()
    }
  }

  return [selectedImage, onClick, filteredImages] as const
}

export default useGalleryController
