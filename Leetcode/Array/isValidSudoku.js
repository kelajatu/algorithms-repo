// Determine if a 9x9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the 9 3x3 sub-boxes of the grid must contain the digits 1-9 without repetition.

// The Sudoku board could be partially filled, where empty cells are filled with the character '.'.

// Example 1:

// Input:
// [
//   ["5","3",".",".","7",".",".",".","."],
//   ["6",".",".","1","9","5",".",".","."],
//   [".","9","8",".",".",".",".","6","."],
//   ["8",".",".",".","6",".",".",".","3"],
//   ["4",".",".","8",".","3",".",".","1"],
//   ["7",".",".",".","2",".",".",".","6"],
//   [".","6",".",".",".",".","2","8","."],
//   [".",".",".","4","1","9",".",".","5"],
//   [".",".",".",".","8",".",".","7","9"]
// ]
// Output: true

const isValidSudoku = board => {
  const rowRules = new Array(9).fill(0).map(() => new Set());
  const colRules = new Array(9).fill(0).map(() => new Set());
  const mixedRules = new Array(9).fill(0).map(() => new Set());

  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      let currentVal = board[row][col];
      let mixedIndex = Math.floor(row / 3) * 3 + Math.floor(col / 3);
      if (currentVal === ".") {
      } else if (
        rowRules[row].has(currentVal) ||
        colRules[col].has(currentVal) ||
        mixedRules[mixedIndex].has(currentVal)
      ) {
        return false;
      } else {
        rowRules[row].add(currentVal);
        colRules[col].add(currentVal);
        mixedRules[mixedIndex].add(currentVal);
      }
    }
  }
  return true;
};

const sudoku = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"]
];
console.log(isValidSudoku(sudoku));
