const logger = require('chip-log')

module.exports = scratchFn
module.exports.benchmarkable = () => scratchFn()

function scratchFn () {
  logger.info()
}

logger.info('Init')
scratchFn()
