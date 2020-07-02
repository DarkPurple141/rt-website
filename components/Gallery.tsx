import { FunctionComponent, HTMLProps, MouseEventHandler } from 'react'
import { TABLET_BREAKPOINT, TABLET_PADDING } from '../lib/constants'
import { useGalleryController } from '../lib/controllers'

export interface GalleryProps {
  isAuto?: boolean
  images: HTMLProps<HTMLImageElement>[]
}

const Gallery: FunctionComponent<GalleryProps> = ({ images, isAuto }) => {
  const [selectedImage, onClick] = useGalleryController(images, isAuto)

  return (
    <>
      <div
        className={`gallery ${isAuto ? 'automatic' : ''}`}
        onClick={onClick as MouseEventHandler}
      >
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
          display: flex;
          justify-content: center;
          height: inherit;
          position: relative;
          padding: 10px;
          padding-top: 0;
          margin: 0 auto;
        }

        @media screen and (max-width: ${TABLET_BREAKPOINT}px) {
          .gallery {
            display: block;
            padding: ${TABLET_PADDING}px;
            padding-top: 0;
          }

          img {
            width: calc(100vw - 40px);
            max-height: none;
            margin: ${TABLET_PADDING / 2}px 0;
          }

          :not(.automatic) > img {
            position: static;
            opacity: 1;
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
