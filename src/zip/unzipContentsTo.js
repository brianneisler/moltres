import AdmZip from 'adm-zip'

const unzipContentsTo = async (source, target, overwrite = false) => {
  const zip = new AdmZip(source)
  const entries = zip.getEntries()

  // TODO BRN: This does not work. It flattens out all of the files in the zip
  // instead of maintaining the folder heirarchy.
  zip.extractEntryTo(entries[0], target, false, overwrite)

  // return new Promise((resolve, reject) => {
  //   zip.extractEntryTo(entries[0], target, overwrite, (error) => {
  //     if (error) {
  //       return reject(error)
  //     }
  //     return resolve()
  //   })
  // })
}

export default unzipContentsTo
