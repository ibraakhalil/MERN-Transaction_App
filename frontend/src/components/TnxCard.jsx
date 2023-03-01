import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTransaction } from '../store/actions/transaction'

function TnxCard({ item, i }) {
    const dispatch = useDispatch()

    const handleDelete = (e) => {
        dispatch(deleteTransaction(e.target.dataset.transactionid))
    }

    return (
        <div key={i} className={item.type === 'income' ? 'item income' : 'item expense'}>
            <div className="tnx-id">
                <p>{item._id}</p>
                <div onClick={handleDelete} data-transactionid={item._id} className="close">
                    X
                </div>
            </div>
            <div className="tnx-info">
                <div>
                    <h4>Author</h4>
                    <p>Ibrahim Khalil</p>
                </div>
                <div>
                    ${item.amount}
                </div>
            </div>
            <div className="tnx-body">
                <div>
                    <strong>Type</strong>
                    <p>{item.type}</p>
                </div>
                <div className='date'>
                    <strong>Date</strong>
                    <p>01/03/2023</p>
                </div>
            </div>
        </div>
    )
}

export default TnxCard