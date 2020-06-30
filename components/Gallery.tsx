import { FunctionComponent, HTMLProps, useState } from 'react'
import { TABLET_BREAKPOINT, TABLET_PADDING } from '../lib/constants'

type IProps = {
  images: HTMLProps<HTMLImageElement>[]
}

const Gallery: FunctionComponent<IProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(0)

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
        .gallery img {
          transition: opacity 0.3s ease-in-out;
        }

        .gallery img {
          opacity: 0;
          display: none;
        }

        .gallery img.selected {
          opacity: 1;
          display: block;
        }

        .gallery {
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

          .gallery img {
            opacity: 1;
            margin: ${TABLET_PADDING}px 0;
            display: block;
            max-height: none;
          }

          .gallery img:first-of-type {
            margin-top: 0;
          }
        }
      `}</style>
    </>
  )
}

export default Gallery
