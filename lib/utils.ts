import { useEffect } from 'react'

export function useWindowEvent(event: string, callback: EventListener) {
  useEffect(() => {
    window.addEventListener(event, callback)
    return () => window.removeEventListener(event, callback)
  }, [event, callback])
}
