import AdmZip from 'adm-zip'

const unzipAllTo = async (source, target, overwrite = true) => {
  const zip = new AdmZip(source)
  return new Promise((resolve, reject) =>
    zip.extractAllToAsync(target, overwrite, (error) => {
      if (error) {
        return reject(error)
      }
      return resolve()
    })
  )
}

export default unzipAllTo
