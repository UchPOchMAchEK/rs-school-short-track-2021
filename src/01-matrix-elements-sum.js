/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let res = 0;
  const skipIndex = new Set();

  matrix.forEach((arr) => {
    arr.forEach((value, index) => {
      if (value !== 0 && !skipIndex.has(index)) {
        res += value;
      } else if (value === 0 && !skipIndex.has(index)) {
        skipIndex.add(index);
      }
    });
  });

  return res;
}

module.exports = getMatrixElementsSum;
