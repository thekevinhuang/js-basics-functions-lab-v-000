// Code your solution in this file!
function distanceFromHqInBlocks(blockValue) {
  const hqStreet = 42
  return distanceTwoBlocks(hqStreet, blockValue)
}

function distanceFromHqInFeet(blockValue) {
  return footCalculator(distanceFromHqInBlocks(blockValue))
}

function footCalculator(blockDistance) {
  const blockSize = 264
  return blockDistance*blockSize
}

function distanceTwoBlocks(block1, block2) {
  return Math.abs(block1-block2)
}
