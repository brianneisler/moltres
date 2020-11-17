import { downloadCanvas } from '../canvas'

import imageToCanvas from './imageToCanvas'

const downloadImage = async (image, imageName) => {
  const canvas = imageToCanvas(image)
  return downloadCanvas(canvas, imageName)
}

export default downloadImage
