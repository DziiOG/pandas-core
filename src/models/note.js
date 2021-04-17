/* eslint-disable space-before-function-paren */
/**
 * Counter Model. Defining order schema using mongoose
 * @author Whitson Dzimah <workwithwhitson@gmail.com>
 */

module.exports.name = 'NoteModel'
module.exports.dependencies = ['mongoose']
module.exports.factory = mongoose => {
  'use strict'

  const Schema = mongoose.Schema
  const schema = new Schema(
    {
      title: {
        type: String,
        required: [true, 'Title is required']
      },
      body: {
        type: String,
        required: [true, 'Body is required']
      },
      type: {
        type: String,
        required: [true, 'Type is required']
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

  return mongoose.model('Note', schema)
}
