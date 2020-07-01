import { FunctionComponent, HTMLProps, useState } from 'react'
import { TABLET_BREAKPOINT, TABLET_PADDING } from '../lib/constants'
import { useWindowEvent } from '../lib/utils'

interface IProps {
  images: HTMLProps<HTMLImageElement>[]
}

const Gallery: FunctionComponent<IProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(0)

  useWindowEvent('keyup', (e) => {
    const { key } = e as KeyboardEvent

    if (key === 'ArrowLeft') {
      setSelectedImage(
        (currentImage) =>
          (currentImage - 1 < 0 ? images.length - 1 : currentImage - 1) %
          images.length
      )
    } else if (key === 'ArrowRight') {
      setSelectedImage((currentImage) => (currentImage + 1) % images.length)
    }
  })

  return (
    <>
      <div className="gallery">
        {images.map(({ src, alt }, idx) => (
          <img
            key={src}
            className={idx === selectedImage ? 'selected' : ''}
            src={src}
            alt={alt}
          />
        ))}
      </div>
      <style jsx>{`
        img {
          position: absolute;
          transition: opacity 0.3s ease-in-out;
          opacity: 0;
        }

        img.selected {
          opacity: 1;
        }

        .gallery {
          position: relative;
          max-width: 900px;
          padding: 10px;
          padding-top: 0;
          margin: 0 auto;
        }

        @media screen and (max-width: ${TABLET_BREAKPOINT}px) {
          .gallery {
            padding: ${TABLET_PADDING}px;
            padding-top: 0;
          }

          img {
            position: static;
            opacity: 1;
            margin: ${TABLET_PADDING}px 0;
            max-height: none;
          }

          img:first-of-type {
            margin-top: 0;
          }
        }
      `}</style>
    </>
  )
}

export default Gallery
