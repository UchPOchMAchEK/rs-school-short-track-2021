/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arrN = n.toString().split('');
  let res = 0;
  for (let i = 0; i < arrN.length; i++) {
    const x = [...arrN.slice(0, i), ...arrN.slice(i + 1)].join('');
    if (res < x) {
      res = x;
    }
  }
  return +res;
}

module.exports = deleteDigit;
