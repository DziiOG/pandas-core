/* eslint-disable space-before-function-paren */
/**
 * Counter Model. Defining order schema using mongoose
 * @author Whitson Dzimah <workwithwhitson@gmail.com>
 */

module.exports.name = 'ActivityModel'
module.exports.dependencies = ['mongoose']
module.exports.factory = mongoose => {
  'use strict'

  const Schema = mongoose.Schema
  const schema = new Schema(
    {
      name: {
        type: String
      }
    },
    {
      versionKey: false,
      timestamps: true,
      writeConcern: {
        w: 'majority',
        j: true,
        wtimeout: 1000
      }
    }
  )

  return mongoose.model('Activity', schema)
}
