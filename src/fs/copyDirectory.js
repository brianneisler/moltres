import { pathJoin } from '../path'

import checkPaths from './checkPaths'
import { readdir, startCopy } from './util'

const copyDirectoryItem = async (items, item, src, dest, options, context) => {
  const srcItem = pathJoin(src, item)
  const destItem = pathJoin(dest, item)
  const { destStat } = await checkPaths(srcItem, destItem, 'copy')

  await startCopy(destStat, srcItem, destItem, options, context)

  return context.copyDirectoryItems(items, src, dest, options)
}

const copyDirectoryItems = async (items, src, dest, options, context) => {
  const item = items.pop()
  if (!item) {
    return
  }
  return copyDirectoryItem(items, item, src, dest, options, {
    ...context,
    copyDirectoryItems
  })
}

const copyDirectory = async (src, dest, options) => {
  const items = await readdir(src)
  return copyDirectoryItems(items, src, dest, options, { copyDirectory })
}

export default copyDirectory
