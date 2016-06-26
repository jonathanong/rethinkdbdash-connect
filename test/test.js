/* eslint-env mocha */
const assert = require('assert')

const connect = require('..')

const TABLE = 'testTable'

describe('rethinkdbdash-connect', () => {
  let id = Math.random()
  let r

  before(() => {
    r = connect({
      url: 'rethinkdb://localhost:28015/test'
    })
  })

  before(() => {
    return r.tableCreate(TABLE).catch(err => {
      if (err.name !== 'ReqlOpFailedError') console.error(err.stack)
    })
  })

  before(() => {
    return r.table(TABLE).delete()
  })

  it('should insert', () => {
    return r.table(TABLE).insert({
      message: id
    })
  })

  it('should get that doc', () => {
    return r.table(TABLE).filter({
      message: id
    }).then(results => {
      assert(results.length)
    })
  })
})
