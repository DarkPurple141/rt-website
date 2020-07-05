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
    <div className="container">
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
      {!isAuto && (
        <div className="text">
          <p>
            <em>Erskineville, 2019</em>
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
            voluptates facilis dolor aperiam, quisquam, ullam error culpa
            voluptas quod itaque, aspernatur cum inventore asperiores commodi
            omnis quas earum vitae illum ad. Aperiam, voluptates voluptate optio
            explicabo praesentium ex non qui. Tenetur a quos optio obcaecati
            sunt tempora, ullam enim est?
          </p>
        </div>
      )}

      <style jsx>{`
        .container {
          display: flex;
          flex-wrap: nowrap;
          flex-direction: row;
          height: inherit;
        }

        img {
          position: absolute;
          transition: opacity 0.3s ease-in-out;
          opacity: 0;
        }

        img.selected {
          opacity: 1;
        }

        .gallery {
          flex: 1;
          display: flex;
          justify-content: center;
          height: inherit;
          position: relative;
          margin: 0 auto;
        }

        .text {
          min-width: 150px;
          width: calc((100% - 36px) / 4);
          margin: 0 ${TABLET_PADDING}px;
        }

        .text p {
          margin: 0;
          margin-bottom: ${TABLET_PADDING}px;
        }

        @media screen and (max-width: ${TABLET_BREAKPOINT}px) {
          .container {
            display: block;
            padding: 0 ${TABLET_PADDING}px;
            flex-direction: column;
          }

          .text {
            margin: 0;
            width: 87%;
          }

          .gallery {
            display: block;
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
    </div>
  )
}

export default Gallery
