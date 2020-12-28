const writeFileAtomicSync = () => {
  throw new Error('NOT IMPLEMENTED')
}

// const writeFileAtomicSync = (filename, data, options) => {
//   if (typeof options === 'string') {
//     options = { encoding: options }
//   } else if (!options) {
//     options = {}
//   }
//   try {
//     filename = fs.realpathSync(filename)
//   } catch (ex) {
//     // it's ok, it'll happen on a not yet existing file
//   }
//   const tmpfile = getTempFilename(filename)

//   if (!options.mode || !options.chown) {
//     // Either mode or chown is not explicitly set
//     // Default behavior is to copy it from original file
//     try {
//       const stats = fs.statSync(filename)
//       options = Object.assign({}, options)
//       if (!options.mode) {
//         options.mode = stats.mode
//       }
//       if (!options.chown && process.getuid) {
//         options.chown = { gid: stats.gid, uid: stats.uid }
//       }
//     } catch (ex) {
//       // ignore stat errors
//     }
//   }

//   let fd
//   const cleanup = cleanupOnExit(tmpfile)
//   const removeOnExitHandler = onExit(cleanup)

//   let threw = true
//   try {
//     fd = fs.openSync(tmpfile, 'w', options.mode || 0o666)
//     if (options.tmpfileCreated) {
//       options.tmpfileCreated(tmpfile)
//     }
//     if (isTypedArray(data)) {
//       data = typedArrayToBuffer(data)
//     }
//     if (Buffer.isBuffer(data)) {
//       fs.writeSync(fd, data, 0, data.length, 0)
//     } else if (data != null) {
//       fs.writeSync(fd, String(data), 0, String(options.encoding || 'utf8'))
//     }
//     if (options.fsync !== false) {
//       fs.fsyncSync(fd)
//     }

//     fs.closeSync(fd)
//     fd = null

//     if (options.chown) {
//       try {
//         fs.chownSync(tmpfile, options.chown.uid, options.chown.gid)
//       } catch (err) {
//         if (!isChownErrOk(err)) {
//           throw err
//         }
//       }
//     }

//     if (options.mode) {
//       try {
//         fs.chmodSync(tmpfile, options.mode)
//       } catch (err) {
//         if (!isChownErrOk(err)) {
//           throw err
//         }
//       }
//     }

//     fs.renameSync(tmpfile, filename)
//     threw = false
//   } finally {
//     if (fd) {
//       try {
//         fs.closeSync(fd)
//       } catch (ex) {
//         // ignore close errors at this stage, error may have closed fd already.
//       }
//     }
//     removeOnExitHandler()
//     if (threw) {
//       cleanup()
//     }
//   }
// }

export default writeFileAtomicSync
