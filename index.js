const assert = require('assert')
const DwStreamWrap = require('@dwcore/dws2wrap')

module.exports = DwStreamFromString

function DwStreamFromString (string) {
  assert.equal(typeof string, 'string')

  return DwStreamWrap(function (size, next) {
    if (string.length <= 0) return this.push(null)

    const chunk = string.slice(0, size)
    string = string.slice(size)

    next(null, chunk)
  })
}
