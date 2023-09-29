const { Schema, model, Types } = require('mongoose')


const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    balance: Number,
    income: Number,
    expense: Number,
    transactions: [
        {
            type: Types.ObjectId,
            ref: 'Transaction'
        }
    ]
}, { timestamps: true })


module.exports = model.user || model('User', userSchema)