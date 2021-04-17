/* eslint-disable space-before-function-paren */
'use strict'
const BaseController = require('./base')

/**
 * @author Whitson Dzimah <workwithwhitson@gmail.com>
 * @summary Controller to handle http request for order model related functions
 * @name ActivityController
 * @extends BaseController
 */
module.exports.name = 'ActivityController'
module.exports.dependencies = ['ActivityRepository', 'miscHelper', 'logger', 'response', 'mongoose']
module.exports.factory = class extends BaseController {
  /**
   * @param {object} repo The repository which will handle the operations to be
   * performed in this controller
   * @param {object} helper - helper object
   * @param {object} logger - logger object
   * @param {object} response - Response handler object
   * @param {object} mongoose mongodb middleware
   */
  constructor(repo, helper, logger, response, mongoose) {
    super(repo, mongoose, helper, logger, response)
    this.name = 'Activity'
  }
}
