const { Schema, model, Types } = require('mongoose')

const transactionSchema = new Schema({
    amount: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    note: String,
    author: {
        type: Types.ObjectId,
        ref: 'User'
    }

}, { timestamps: true })

module.exports = model('Transaction', transactionSchema)