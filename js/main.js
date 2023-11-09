'use strict'
var gBoard

var MINE = 'X'

var gLevel = {
    size: 4,
    mines: 2
}

var gGames = {
    isOn: false,
    showCount: 0,
    markedCount: 0,
    secsPassed: 0,
}

function onInit() {
    //document.querySelector('.cell').addEventListener("click", onFirstTimeClick())
    //gBoard = onFirstTimeClick()
    gBoard = buildBoard()
    console.log('gBoard buildBoard:', gBoard)
    // console.log('gBoard2 setMinesNegsCount:', gBoard)
    renderBoard(gBoard)
    //addMines(gBoard)
    // saif 4 test:
    //console.log('renderMines', renderMines())
    //console.log('getRandomEmptyCellPosition:', getRandomEmptyCellPosition())
}

function buildBoard() {
    const gameBoard = []
    for (var i = 0; i < gLevel.size; i++) {
        gameBoard[i] = []
        for (var j = 0; j < gLevel.size; j++) {
            // create cell 
            gameBoard[i][j] = {
                minesAroundCount: 0,
                isShown: false,
                isMine: false,
                isMarked: false
            }
        }
    }

    gameBoard[0][1] = {
        minesAroundCount: 0,
        isShown: false,
        isMine: true,
        isMarked: false
    }
    gameBoard[1][0] = {
        minesAroundCount: 0,
        isShown: false,
        isMine: true,
        isMarked: false
    }
    gameBoard[1][3] = {
        minesAroundCount: 0,
        isShown: false,
        isMine: true,
        isMarked: false
    }
    gameBoard[1][2] = {
        minesAroundCount: 0,
        isShown: false,
        isMine: true,
        isMarked: false
    }
    return gameBoard
}


function renderBoard(board) {

    var strHTML = ''
    for (var i = 0; i < board.length; i++) {
        strHTML += `<tr class="game-row" >\n`
        for (var j = 0; j < board[0].length; j++) {
            const cell = board[i][j]
            //var cellClass = getClassName({ i, j })

            // add class to cell
            var className = (cell.isMine && cell.isShown) ? 'mine-cell' : ''
            strHTML += `\t<td class="cell ${className}" 
                            onclick="onCellClicked(this, ${i}, ${j})" >
                         </td>\n`
        }
        strHTML += `</tr>\n`
    }


    console.log(strHTML)
    setMinesNegsCount(gBoard)
    const elGameTable = document.querySelector('.game-table')
    elGameTable.innerHTML = strHTML

    //console.log('addMines', addMines())

}

function setMinesNegsCount(board) {

    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board[i].length; j++) {
            // update every cell object property
            board[i][j].minesAroundCount = countMinesAroundCount(i, j, board)
            console.log(`board[${i}][${j}].minesAroundCount:`, board[i][j].minesAroundCount)
        }
    }
    console.log('setMinesNegsCount gBoard: ', gBoard)
    return board
}

// count the mines around the cell
function countMinesAroundCount(rowIdx, colIdx, mat) {
    var minesAroundCount = 0

    for (var i = rowIdx - 1; i <= rowIdx + 1; i++) {
        if (i < 0 || i >= mat.length) continue

        for (var j = colIdx - 1; j <= colIdx + 1; j++) {
            if (i === rowIdx && j === colIdx) continue
            if (j < 0 || j >= mat[i].length) continue
            if (mat[i][j].isMine === true) minesAroundCount++
        }
    }
    console.log('minesAroundCount: ', minesAroundCount)
    return minesAroundCount
}

function onCellClicked(elCell, i, j) {
    // get cell
    console.log('Cell clicked: ', elCell, i, j)
    // get data from function setNeg
    // set the data in cell innerText
    var cell = gBoard[i][j]
    console.log('onCellClicked - cell', cell)
    elCell.innerText = cell.minesAroundCount
    console.log('elCell.innerText,minesAroundCount', cell.minesAroundCount)
    // change style of cell 
}



// // saif 4 - bug
// function addMines(board) {
//     const location = getRandomEmptyCellPosition(board)
//     if (!location) return
//     // change the i,j location to mine
//     board[location.i][location.j].isMine = true
//     console.log('addMines location: ', board[location.i][location.j])
//     renderMines(location, MINE)
//     return location
// }

// // saif 4
// // Convert a location object {i, j} to a selector and render a value in that element

// function renderMines(location, value) {
//     const cellSelector = "." + getClassName(location)
//     console.log('renderMines cellSelector', cellSelector)
//     const elCell = document.querySelector(cellSelector)
//     elCell.innerHTML = value
// }

// // saif 4

// function getRandomEmptyCellPosition(board) {
//     const emptyCells = []
//     for (var i = 0; i < board.length; i++) {
//         for (var j = 0; j < board[i].length; j++) {
//             const cell = board[i][j]
//             if (!cell.isMine) {
//                 emptyCells.push({ i, j })
//             }
//         }
//     }

//     if (!emptyCells.length) return null

//     const randIdx = getRandomInt(0, emptyCells.length)
//     console.log('getRandomEmptyCellPosition randIdx:', randIdx)
//     return emptyCells[randIdx]
// }
// // saif 4
// function getRandomInt(min, max) {
//     min = Math.ceil(min)
//     max = Math.floor(max)
//     return Math.floor(Math.random() * (max - min) + min) // The maximum is exclusive and the minimum is inclusive
// }

// // saif 4
// // Returns the class name for a specific cell

// function getClassName(position) {
//     const cellClass = `cell-${position.i}-${position.j}`
//     console.log('getClassName cellClass', cellClass)
//     return cellClass
// }

//saif 6

function onFirstTimeClick() {
    const gameBoard = []
    for (var i = 0; i < gLevel.size; i++) {
        gameBoard[i] = []
        for (var j = 0; j < gLevel.size; j++) {
            // create cell 
            gameBoard[i][j] = {
                minesAroundCount: 0,
                isShown: false,
                isMine: false,
                isMarked: false
            }
        }
    }

    document.querySelector('.cell').removeEventListener("click", onFirstTimeClick())
    return gameBoard
}

function onCellMarked(elCell) {

}

function checkGameOver() {

}

function expandShown(board, elCell, i, j) {

}