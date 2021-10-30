import React from 'react'
import { toPng } from 'html-to-image'

/**
 * Hook to generate screenshot
 */
function useScreenshot() {
  const captureRef = React.useRef()

  const [capturing, setCapturing] = React.useState(false)
  const [imgBase64, setImgBase64] = React.useState('')

  async function generateImage(e) {
    e.preventDefault()
    if (!captureRef?.current) {
      return
    }

    try {
      setCapturing(true)
      let imgBase64 = await toPng(captureRef.current, {
        quality: 1,
        pixelRatio: 1,
        canvasWidth: 440,
        canvasHeight: 440 / (9 / 8),
      })
      imgBase64 = imgBase64.replace('data:image/png;base64,', '')
      setImgBase64(imgBase64)
      return imgBase64
    } catch (error) {
      console.error(error)
    } finally {
      setCapturing(false)
    }
  }

  return {
    generateImage,
    captureRef,
    capturing,
    imgBase64,
  }
}

export default useScreenshot
