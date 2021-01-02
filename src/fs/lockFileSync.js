// TODO BRN: remimplement this...

const lockFileSync = () => {
  throw new Error('NOT IMPLEMENTED')
}

export default lockFileSync

// import unlockFileSync from './unlockFileSync'
// import { closeSync, filetime, openSync, statSync } from './util'

// function retryThrow(path, options, er) {
//   let { retries } = options
//   if (retries > 0) {
//     retries -= 1
//     return exports.lockSync(path, {
//       ...options,
//       retries
//     })
//   }
//   throw er
// }

// const lockFileSync = (path, options = {}) => {
//   let fd
//   try {
//     fd = openSync(path, 'wx')
//   } catch (er) {
//     if (er.code !== 'EEXIST') {
//       return retryThrow(path, options, er)
//     }

//     if (options.stale) {
//       const st = statSync(path)
//       const ct = st[filetime()].getTime()
//       if (!(ct % 1000) && options.stale % 1000) {
//         // probably don't have subsecond resolution.
//         // round up the staleness indicator.
//         // Yes, this will be wrong 1/1000 times on platforms
//         // with subsecond stat precision, but that's acceptable
//         // in exchange for not mistakenly removing locks on
//         // most other systems.
//         options.stale = 1000 * Math.ceil(options.stale / 1000)
//       }
//       const age = Date.now() - ct
//       if (age > options.stale) {
//         unlockFileSync(path)
//         return lockFileSync(path, options)
//       }
//     }

//     // failed to lock!
//     return retryThrow(path, options, er)
//   } finally {
//     closeSync(fd)
//   }
// }

// export default lockFileSync
