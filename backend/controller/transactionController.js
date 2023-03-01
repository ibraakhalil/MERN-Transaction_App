const Transaction = require("../model/transaction")
const User = require("../model/user")


const getAllTransaction = async (req, res, next) => {
    const userId = req.user._id

    try {
        const transactions = await Transaction.find({ author: userId })

        res.json(transactions.reverse())

    } catch (e) {
        next(e)
    }


}

const postTransaction = async (req, res, next) => {

    let { amount, type, note } = req.body
    amount = Number(amount)
    const userId = req.user._id

    const newTransaction = new Transaction({
        amount, type, note,
        author: userId
    })


    try {
        const saveTransaction = await newTransaction.save()
        const user = await User.findById(userId)
        let { balance, income, expense } = user
        await User.findOneAndUpdate(
            { _id: userId },
            {
                $push: { 'transactions': saveTransaction._id },
                $set: {
                    'balance': type === 'income' ? balance + amount : balance - amount,
                    'income': type === 'income' ? income + amount : income + 0,
                    'expense': type === 'expense' ? expense + amount : expense + 0
                }
            },
            { new: true }
        )

        res.json(saveTransaction)

    } catch (e) {
        next(e)
    }
}


const deleteTransaction = async (req, res, next) => {
    const { transactionId } = req.params

    try {

        await Transaction.findOneAndDelete({ _id: transactionId })
        await User.findOneAndUpdate(
            { _id: req.user._id },
            { $pull: { 'transactions': transactionId } }
        )


        res.json({ message: 'Transaction deleted' })

    } catch (e) {
        next(e)
    }
}


module.exports = { getAllTransaction, postTransaction, deleteTransaction }