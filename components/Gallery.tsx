import { FunctionComponent, HTMLProps, MouseEventHandler } from 'react'
import { TABLET_BREAKPOINT, TABLET_PADDING } from '../lib/constants'
import { useGalleryController } from '../lib/controllers'
import { RichText } from 'prismic-reactjs'
export interface GalleryProps {
  isAuto?: boolean
  slides: HTMLProps<Element>[]
}

const Gallery: FunctionComponent<GalleryProps> = ({ slides, isAuto }) => {
  const [selectedImage, onClick] = useGalleryController(slides, isAuto)
  return (
    <div className="container">
      <div
        className={`gallery ${isAuto ? 'automatic' : ''}`}
        onClick={onClick as MouseEventHandler}
      >
        {slides.map((slide, idx) =>
          slide.src ? (
            <img
              key={slide.src}
              className={idx === selectedImage ? 'selected slide' : 'slide'}
              src={slide.src}
              alt={slide.alt}
            />
          ) : (
            <div
              key="text"
              className={idx === selectedImage ? 'selected slide' : 'slide'}
            >
              <div className="text-slide">{RichText.asText(slide)}</div>
              <div className="padding"></div>
            </div>
          )
        )}
      </div>
      <style jsx>{`
        .container {
          display: flex;
          flex-wrap: nowrap;
          flex-direction: row;
          height: inherit;
        }

        .slide {
          position: absolute;
          transition: opacity 0.3s ease-in-out;
          opacity: 0;
        }

        .text-slide {
          padding: ${TABLET_PADDING}px 0;
          font-size: 2em;
          width: 500px;
          margin: auto;
          border-top: 1px solid #a3a3a3;
          border-bottom: 1px solid #a3a3a3;
        }

        .slide.selected {
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
          width: calc((100% - ${TABLET_PADDING}px) / 4);
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

          .text-slide {
            width: auto;
          }

          .slide {
            width: calc(100vw - ${2 * TABLET_PADDING}px);
            max-height: none;
            margin: ${TABLET_PADDING / 2}px 0;
          }

          :not(.automatic) > .slide {
            position: static;
            opacity: 1;
          }

          .slide:first-of-type {
            margin-top: 0;
          }
        }
      `}</style>
    </div>
  )
}

export default Gallery
