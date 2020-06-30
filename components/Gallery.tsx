import {
  FunctionComponent,
  HTMLProps,
  useState,
  useEffect,
  useRef,
} from 'react'

type IProps = {
  images: HTMLProps<HTMLImageElement>[]
}

function useInterval(callback: any, delay: number) {
  const savedCallback = useRef<any>()

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current!()
    }
    if (delay !== null) {
      const id = setInterval(tick, delay)
      return () => clearInterval(id)
    }
  }, [delay])
}

const Gallery: FunctionComponent<IProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(0)

  useInterval(() => {
    setSelectedImage((curr) => (curr + 1) % images.length)
  }, 5000)

  return (
    <>
      <div className="gallery">
        {images.map(({ src, alt }, idx) => (
          <img key={src} src={idx === selectedImage ? src : ''} alt={alt} />
        ))}
      </div>
      <style jsx>{`
        .gallery {
          max-width: 800px;
          padding: 10px;
          padding-top: 0;
          margin: 0 auto;
        }
      `}</style>
    </>
  )
}

export default Gallery
