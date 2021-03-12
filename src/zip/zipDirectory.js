import archiver from 'archiver'

import { createWriteStream } from '../fs'
import { forEach } from '../lang'

/**
 * Zips up a target directory and outputs it to the given file path.
 *
 * @function
 * @since v0.6.0
 * @category zip
 * @param {*} directory
 * @param {*} outputFilePath
 */
const zipDirectory = async (
  directory,
  outputFilePath,
  { include = ['*'] } = {}
) =>
  new Promise((resolve, reject) => {
    // create a file to stream archive data to.
    const output = createWriteStream(outputFilePath)
    const archive = archiver('zip', {
      zlib: { level: 9 } // Sets the compression level.
    })

    // listen for all archive data to be written
    // 'close' event is fired only when a file descriptor is involved
    output.on('close', resolve)

    // good practice to catch warnings (ie stat failures and other non-blocking errors)
    archive.on('warning', (error) => {
      // eslint-disable-next-line no-console
      console.warn(error)
    })

    // good practice to catch this error explicitly
    archive.on('error', reject)

    archive.pipe(output)

    forEach((glob) => archive.glob(glob, { cwd: directory }), include)

    archive.directory(directory, false)

    // finalize the archive (ie we are done appending files but streams have to finish yet)
    // 'close', 'end' or 'finish' may be fired right after calling this method so register to them beforehand
    archive.finalize()
  })

export default zipDirectory
