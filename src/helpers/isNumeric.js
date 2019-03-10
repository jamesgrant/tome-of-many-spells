/**
 * Assert if a value is numeric
 * @param {number}
 * @return {bool}
 */
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}

export default isNumeric
