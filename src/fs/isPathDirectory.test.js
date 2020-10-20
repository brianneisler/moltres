import path from 'path'

import { v4 as uuidv4 } from 'uuid'

import ensureDirectory from './ensureDirectory'
import isPathDirectory from './isPathDirectory'
import tmpDirectory from './tmpDirectory'

describe('isPathDirectory', () => {
  let dir
  beforeEach(async () => {
    dir = path.resolve(tmpDirectory(), 'test', uuidv4())
    await ensureDirectory(dir)
  })

  afterEach(async () => {})
  test('Returns true for direcotry path', async () => {
    expect(await isPathDirectory(dir)).toBe(true)
  })
})
