import path from 'path'

import { v4 as uuidv4 } from 'uuid'

import checkPaths from './checkPaths'
import ensureDirectory from './ensureDirectory'
import ensureFile from './ensureFile'
import tmpDirectory from './tmpDirectory'

describe('checkPaths', () => {
  let testDir

  beforeEach(async () => {
    testDir = path.resolve(tmpDirectory(), 'tests', uuidv4(), 'checkPaths')
    await ensureDirectory(testDir)
  })

  test('should use stats with bigint type', async () => {
    const src = path.join(testDir, 'src')
    const dest = path.join(testDir, 'dest')
    await Promise.all([ensureFile(src), ensureFile(dest)])
    const { srcStat } = await checkPaths(src, dest, 'copy')
    expect(typeof srcStat.ino).toBe('bigint')
  })
})
