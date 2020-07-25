import { expected } from '../error'
import { createWriteStream } from '../fs'

import fetch from './fetch'

const download = async (url, filePath) => {
  const response = await fetch(url)

  if (response.ok) {
    const writeStream = createWriteStream(filePath)
    response.body.pipe(writeStream)

    return new Promise((resolve, reject) => {
      response.body.on('end', resolve)
      writeStream.on('error', reject)
    })
  }
  throw expected({
    message: response.message
  })
}

export default download
