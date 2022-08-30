import React, { useContext } from 'react'

import { TransactionsContext } from '../../../../contexts/TransactionContext'
import { dataFormatter, priceFormatter } from '../../../../utils/formatter'
import { PriceHighlight, TransactionsTableContainer } from './styles'

export function TransactionsTable() {
  const { transactions } = useContext(TransactionsContext)

  return (
    <TransactionsTableContainer>
      <tbody>
        {transactions.map((transaction) => {
          return (
            <tr key={transaction.id}>
              <td>{transaction.description}</td>
              <td>
                <PriceHighlight variant={transaction.type}>
                  {transaction.type === 'outcome' && '- '}
                  {priceFormatter.format(transaction.price)}
                </PriceHighlight>
              </td>
              <td>{transaction.category}</td>
              <td>{dataFormatter.format(new Date(transaction.createdAt))}</td>
            </tr>
          )
        })}
      </tbody>
    </TransactionsTableContainer>
  )
}
