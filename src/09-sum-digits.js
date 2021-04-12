/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let num = n.toString();
  let res = 0;

  do {
    res = 0;
    for (let i = 0; i < num.length; i++) {
      res += +num[i];
    }
    num = res.toString();
  } while (num.length > 1);

  return res;
}

module.exports = getSumOfDigits;
