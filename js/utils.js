'use strict'

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function makeId(length = 6) {
  var txt = ''
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

  for (var i = 0; i < length; i++) {
    txt += possible.charAt(Math.floor(Math.random() * possible.length))
  }

  return txt
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function getRandomEmptyCellPosition() {
  const emptyCells = []
  for (var i = 0; i < gBoard.length; i++) {
    for (var j = 0; j < gBoard[i].length; j++) {
      const cell = gBoard[i][j]
      if (!cell.gameElement && cell.type === FLOOR) {
        emptyCells.push({ i, j })
      }
    }
  }

  if (!emptyCells.length) return null

  const randIdx = getRandomInt(0, emptyCells.length)
  return emptyCells[randIdx]
}

// get diagonal
function printPrimaryDiagonal(mat) {
  for (var d = 0; d < mat.length; d++) {
    var currItem = mat[d][d]
    console.log(currItem)
  }
}
// get diagonal
function printScondaryDiagonal(mat) {
  for (var d = 0; d < mat.length; d++) {
    var currItem = mat[d][mat.length - d - 1]
    console.log(currItem)
  }
}

// get random item from array
function getRandomItem(arr) {

  // get random index value
  const randomIndex = Math.floor(Math.random() * arr.length);

  // get random item
  const item = arr[randomIndex];

  return item;
}

//create matrix
function createMat(ROWS, COLS) {
  const mat = []
  for (var i = 0; i < ROWS; i++) {
    const row = []
    for (var j = 0; j < COLS; j++) {
      row.push('')
    }
    mat.push(row)
  }
  return mat
}

// random 
function getRandomInt(min, max) {
  var diff = max - min
  var res = Math.floor(Math.random() * diff + min)
  return res
}

// Timers
function updateTimer() {
  const currentTime = new Date().getTime()
  const elapsedTime = (currentTime - gStartTime) / 1000
  document.querySelector('.timer').innerText = elapsedTime.toFixed(3)
}

function startTimer() {
  gStartTime = new Date().getTime()
  gInterval = setInterval(updateTimer, 37)
}

function stopTimer() {
  clearInterval(gInterval)
}



function getPosOfRandomCell(mat, value) {
  var cellsPos = []
  for (var i = 0; i < mat.length; i++) {

    for (var j = 0; j < mat[i].length; j++) {
      if (mat[i][j] === value) {
        cellsPos.push({
          i,
          j,
        })
      }
    }
  }
  if (cellsPos.length === 0) return null
  // const randomCellPos =cellsPos.splice(getRandomInteger(0, cellsPos.length), 1)[0]
  const randomCellPos = cellsPos.splice(Math.floor(Math.random() * cellsPos.length), 1)[0]

  return randomCellPos
}
//create walls

// neiber loop
// what is iRange?
function countNeighbors(idxI, idxJ, mat, iRange = 1, jRange = 1, value = '') {
  var count = 0
  for (let i = idxI - iRange; i < idxI + iRange; i++) {
    if (i < 0 || i >= mat.length) continue
    for (let j = idxJ - jRange; j < idxJ + jRange; j++) {
      if (j < 0 || j >= mat[i].length) continue
      if (i === idxI && j === idxJ) continue
      if (value) {
        if (mat[i][j] === value) count++
        continue
      }
      if (mat[i][j] !== '') count++
    }
  }
  return count
}
// game of life
function countNeighbors(rowIdx, colIdx, mat) {
  var neighborsCount = 0

  for (var i = rowIdx - 1; i <= rowIdx + 1; i++) {
    if (i < 0 || i >= mat.length) continue

    for (var j = colIdx - 1; j <= colIdx + 1; j++) {
      if (i === rowIdx && j === colIdx) continue
      if (j < 0 || j >= mat[i].length) continue
      if (mat[i][j] === LIFE) neighborsCount++
    }
  }
  return neighborsCount
}