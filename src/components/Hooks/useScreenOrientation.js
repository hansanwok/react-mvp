import { useState, useEffect } from 'react'

const isLandscape = () => window.matchMedia('(orientation:landscape)').matches

const getOrientation = () => isLandscape() ? 'landscape' : 'portrait'

const useScreenOrientation = () => {
  const [orientation, setOrientation] = useState(getOrientation())

  const updateOrientation = () => {
    setOrientation(getOrientation())
  }

  useEffect(() => {
    window.addEventListener('resize', updateOrientation)
    return () => {
      window.removeEventListener('resize', updateOrientation)
    }
  }, [])

  return {
    orientation,
    isLandscape: orientation.includes('landscape'),
    isPortrait: orientation.includes('portrait'),
  }
}

export default useScreenOrientation
