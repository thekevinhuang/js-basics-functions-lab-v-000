// Code your solution in this file!
function distanceFromHqInBlocks(blockValue) {
  const hqStreet = 42
  return distanceTwoBlocks(hqStreet, blockValue)
}

function distanceFromHqInFeet(blockValue) {
  return footCalculator(distanceFromHqInBlocks(blockValue))
}

function distanceTravelledInFeet(blk1, blk2) {
  return footCalculator(distanceTwoBlocks(blk1, blk2))
}

function calculatesFarePrice(blk1, blk2) {
  let distance = distanceTravelledInFeet(blk1, blk2)
  let fare
  const minDistance = 400

  switch(distance) {
    case <= minDistance:
      fare = 0
      break
  }
  return fare
}

function footCalculator(blockDistance) {
  const blockSize = 264
  return blockDistance*blockSize
}

function distanceTwoBlocks(block1, block2) {
  return Math.abs(block1-block2)
}
