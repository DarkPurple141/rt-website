import { useState, MouseEventHandler, useCallback, useEffect } from 'react'
import type { RichTextField } from '@prismicio/types'
import { asText } from '@prismicio/helpers'
import { useRouter } from 'next/router'

import { useInterval, useWindowEvent } from '../utils'

function useGalleryController(
  images: Array<RichTextField | HTMLImageElement>,
  isAuto?: boolean
) {
  const [selectedImage, setSelectedImage] = useState(0)
  const router = useRouter()
  const filteredImages = images.filter(
    o => (o as HTMLImageElement).src || asText(o as RichTextField)
  )

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
