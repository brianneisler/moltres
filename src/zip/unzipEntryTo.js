import AdmZip from 'adm-zip'

const unzipEntryTo = async (entry, source, target, overwrite = false) => {
  const zip = new AdmZip(source)

  return new Promise((resolve, reject) => {
    zip.extractEntryToAsync(entry, target, true, overwrite, (error) => {
      if (error) {
        return reject(error)
      }
      return resolve()
    })
  })
}

export default unzipEntryTo
