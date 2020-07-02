import { useState, MouseEventHandler, useCallback, HTMLProps } from 'react'
import { useInterval, useWindowEvent } from '../utils'

function useGalleryController(
  images: HTMLProps<HTMLImageElement>[],
  isAuto?: boolean
) {
  const [selectedImage, setSelectedImage] = useState(0)

  const nextImage = useCallback(() => {
    setSelectedImage((currentImage) => (currentImage + 1) % images.length)
  }, [images])

  const previousImage = useCallback(() => {
    setSelectedImage((currentImage) => (currentImage + 1) % images.length)
  }, [images])

  useWindowEvent('keyup', (e) => {
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

  const onClick: MouseEventHandler = (e) => {
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

  return [selectedImage, onClick]
}

export default useGalleryController
