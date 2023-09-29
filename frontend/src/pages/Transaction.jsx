import React from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import './css/transaction.css'
import { useDispatch, useSelector } from 'react-redux'
import { createTransaction, getAllTransaction } from '../store/actions/transaction'
import TnxCard from '../components/TnxCard'
import { updateUser } from '../store/actions/authAction'



function Transaction() {
  const { transactions } = useSelector(state => state)
  const dispatch = useDispatch()
  const type = useRef()
  const amount = useRef()


  useEffect(() => {
    dispatch(getAllTransaction())
    dispatch(updateUser())
  }, [dispatch])


  const handleSubmit = (e) => {
    e.preventDefault()

    dispatch(createTransaction({
      type: type.current.value,
      amount: amount.current.value
    }))
  }




  return (
    <div className='transaction'>
      <div className="new-transaction">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="type">Type:</label>
            <select ref={type} name="type" id="">
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="amount">Amount:</label>
            <input ref={amount} type="text" name='amount' />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="container">
        <div className="content">
          <h1>Transactions</h1>
          <div className="wrapper">
            {transactions?.map((item, i) => <TnxCard item={item} key={i} />)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Transaction