import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'

function Transaction({transaction}) {
    const {deleteTransaction} = useContext(GlobalContext)


const sign = transaction.amount < 0 ? '-' : '+';

    return (
        //Math.abs is to remove duplicate negative value. Wrapping the transaction amount in Math.abs changes number to always show positive
        <li className={transaction.amount < 0 ? 'minus' : 'plus'}> 
        {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span><button className="delete-btn" onClick={() => deleteTransaction(transaction.id)}>x</button>
        </li>
        )
    }
    
    export default Transaction
    