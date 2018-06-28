const dwStreamChain = require('@dwcore/dws-chain')
const test = require('tape')

const DwStreamFromString = require('./')

test('should assert input types', function (t) {
  t.plan(1)
  t.throws(DwStreamFromString, /string/)
})

test('should create a stream from a string', function (t) {
  t.plan(1)
  DwStreamFromString('greetings martian').pipe(dwStreamChain(function (res) {
    t.equal(res.toString(), 'greetings martian')
  }))
})
