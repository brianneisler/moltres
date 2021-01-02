// TODO BRN: remimplement this...

const lockFile = async () => {
  throw new Error('NOT IMPLEMENTED')
}

export default lockFile

// import { close, open, stat } from './util'
// import { wait } from '../lang'

// // const onExit = require('signal-exit')

// // onExit(function () {
// //   debug('exit listener')
// //   // cleanup
// //   Object.keys(locks).forEach(exports.unlockSync)
// // })

// // Staleness checking algorithm
// // 1. acquire $lock, fail
// // 2. stat $lock, find that it is stale
// // 3. acquire $lock.STALE
// // 4. stat $lock, assert that it is still stale
// // 5. unlink $lock
// // 6. link $lock.STALE $lock
// // 7. unlink $lock.STALE
// // On any failure, clean up whatever we've done, and raise the error.
// const isLockStale = async (originalEr, path, options, hasStaleLock) => {
//   try {
//     const lockStat = await stat(path)
//     if (statEr) {
//       if (statEr.code === 'ENOENT') {
//         // expired already!
//         options.stale = false
//         debug('lock stale enoent retry', path, options)
//         exports.lock(path, options, cb)
//         return
//       }
//       return cb(statEr)
//     }

//     const age = Date.now() - st[exports.filetime].getTime()
//     if (age <= options.stale) {
//       return notStale(originalEr, path, options, cb)
//     }

//     debug('lock stale', path, options)
//     if (hasStaleLock) {
//       exports.unlock(path, function (er) {
//         if (er) {
//           return cb(er)
//         }
//         debug('lock stale retry', path, options)
//         fs.link(path + '.STALE', path, function (er) {
//           fs.unlink(path + '.STALE', function () {
//             // best effort.  if the unlink fails, oh well.
//             cb(er)
//           })
//         })
//       })
//     } else {
//       debug('acquire .STALE file lock', options)
//       exports.lock(path + '.STALE', options, function (er) {
//         if (er) {
//           return cb(er)
//         }
//         maybeStale(originalEr, path, options, true, cb)
//       })
//     }
//   })
// }

// const lockFile = async (path, options = {}) => {
//   let req = options.req || 0
//   req = req + 1
//   const lockPath = `${path}.lock`
//   // options.req = req
//   const start = options.start || Date.now()
//   let { retries } = options
//   if (retries > 0) {
//     retries = 0
//     cb = (function (orig) {
//       return function cb(er, fd) {
//         debug('retry-mutated callback')
//         retries -= 1
//         if (!er || retries < 0) {
//           return orig(er, fd)
//         }

//         debug('lock retry', path, options)

//         if (options.retryWait) {
//           setTimeout(retry, options.retryWait)
//         } else {
//           retry()
//         }

//         function retry() {
//           options.start = Date.now()
//           debug('retrying', options.start)
//           exports.lock(path, options, cb)
//         }
//       }
//     })(cb)
//   }

//   // try to engage the lock.
//   // if this succeeds, then we're in business.
//   try {
//     // Open file for writing. The file is created (if it does not exist) or
//     // fails if it exists.
//     const fd = await open(lockPath, 'wx')
//     return await close(fd)
//   } catch (error) {
//     // maybe eperm or something.
//     if (error.code !== 'EEXIST') {
//       throw error
//     }

//     const { stale, retry = 500 } = options
//     // someone's got this one.  see if it's valid.
//     if (stale) {
//       return maybeStale(er, path, options, false, cb)
//     }

//     // if we can't wait, then just call it a failure
//     if (retry <= 0) {
//       throw error
//     }

//     // poll for some ms for the lock to clear
//     const now = Date.now()
//     const start = options.start || now
//     const end = start + retry

//     if (end <= now) {
//       throw error
//     }

//     const timer = setTimeout(poll, wait)

//     function poll() {
//       debug('notStale, polling', path, options)
//       exports.lock(path, options, cb)
//     }
//   }
// }

// export default lockFile
