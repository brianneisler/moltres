import path from 'path'

import { v4 as uuidv4 } from 'uuid'

import checkParentPaths from './checkParentPaths'
import ensureDirectory from './ensureDirectory'
import ensureFile from './ensureFile'
import tmpDirectory from './tmpDirectory'
import { stat } from './util'

describe('checkParentPaths', () => {
  let testDir

  beforeEach(async () => {
    testDir = path.resolve(
      tmpDirectory(),
      'tests',
      uuidv4(),
      'checkParentPaths'
    )
    await ensureDirectory(testDir)
  })

  test('should stop at src or root path and not throw max call stack size error', async () => {
    const src = path.join(testDir, 'src')
    let dest = path.join(testDir, 'dest')
    await Promise.all([ensureFile(src), ensureFile(dest)])
    dest = path.basename(dest)
    const srcStat = await stat(src)
    await checkParentPaths(src, srcStat, dest, 'copy')
  })
})
