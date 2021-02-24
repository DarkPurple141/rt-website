import type { FC, HTMLProps } from 'react'
import { RichText } from 'prismic-reactjs'

import { TABLET_BREAKPOINT, TABLET_PADDING } from '../lib/constants'
import { useGalleryController } from '../lib/controllers'

export interface GalleryProps {
  isAuto?: boolean
  slides: HTMLProps<Element>[]
}

const Gallery: FC<GalleryProps> = ({ slides, isAuto }) => {
  const [selectedImage, onClick, filteredImages] = useGalleryController(
    slides,
    isAuto
  )
  return (
    <div className="container">
      <div className={`gallery ${isAuto ? 'automatic' : ''}`} onClick={onClick}>
        <div className="slide-count">
          {selectedImage + 1} / {slides.length}
        </div>
        {filteredImages.map((slide, idx) =>
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
              <div className="text-slide">
                <RichText render={slide} />
              </div>
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

        .slide-count {
          color: #a3a3a3;
          right: 0;
          bottom: 0;
          position: absolute;
          z-index: 10;
        }

        .slide {
          position: absolute;
          transition: opacity 0.3s ease-in-out;
          opacity: 0;
        }

        .text-slide {
          padding-bottom: ${TABLET_PADDING / 2}px;
          width: 500px;
          margin: auto;
          border-bottom: 1px solid #a3a3a3;
        }

        .slide.selected {
          z-index: 2;
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
          .slide-count {
            display: none;
          }

          .container {
            display: block;
            padding: 0 ${TABLET_PADDING}px;
            flex-direction: column;
          }

          .text {
            margin: 0;
            width: 87%;
          }

          .text-slide {
            width: inherit;
          }

          .gallery {
            display: block;
          }

          .slide {
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
