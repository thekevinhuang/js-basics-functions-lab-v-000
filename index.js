// Code your solution in this file!
function distanceFromHqInBlocks(blockValue) {
  const hqStreet = 42
  return Math.abs(hqStreet-blockValue)
}

function distanceTravelledInFeet(blockValue) {
  const blockSize = 264
  return distanceFromHqInBlocks(blockValue)*blockSize
}