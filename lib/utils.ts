import { useEffect, useRef } from 'react'

type GenericFunction = (...args: any[]) => void

export const useInterval = (callback: GenericFunction, delay: number) => {
  const savedCallback = useRef<GenericFunction>()

  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  useEffect(() => {
    const handler = (...args: any[]) => savedCallback.current!(...args)

    if (delay !== null) {
      const id = setInterval(handler, delay)
      return () => clearInterval(id)
    }
  }, [delay])
}

export function useWindowEvent(event: string, callback: EventListener) {
  useEffect(() => {
    window.addEventListener(event, callback)
    return () => window.removeEventListener(event, callback)
  }, [event, callback])
}
