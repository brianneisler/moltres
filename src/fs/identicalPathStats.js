const identicalPathStats = (srcStat, destStat) =>
  destStat.ino && destStat.dev && destStat.ino === srcStat.ino && destStat.dev === srcStat.dev

export default identicalPathStats
