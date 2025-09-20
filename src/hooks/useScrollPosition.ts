import { useEffect, useState } from "react"

export const useScrollPosition = () => {
  const [pos, setPos] = useState<{ x: number, y: number }>({ x: 0, y: 0 })

  useEffect(() => {

    const scrollHandler = () => {
      setPos(() => ({ x: window.scrollX, y: window.scrollY }))
    }

    window.addEventListener('scroll', scrollHandler)

    return () => {
      window.removeEventListener('scroll', scrollHandler)
    }
  })

  return pos
}
