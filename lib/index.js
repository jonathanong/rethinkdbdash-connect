'use strict'

module.exports = options => {
  options = options || {};

  const RETHINKDB_URL = options.url || process.env.SQLAZURECONNSTR_RETHINKDB_URL || process.env.RETHINKDB_URL
  if (RETHINKDB_URL) {
    const args = require('url').parse(RETHINKDB_URL)
    if (args.path) options.db = args.path.slice(1)
    if (args.auth) [options.user, options.password] = args.auth.split(':')
    options.servers = [
      {
        host: args.hostname,
        port: args.port
      }
    ]

    const RETHINKDB_CA = options.ca || process.env.RETHINKDB_CA
    if (RETHINKDB_CA) {
      options.ssl = {
        ca: RETHINKDB_CA
      }
    }

    delete options.url
    delete options.ca
  }

  return require('rethinkdbdash')(options)
}
