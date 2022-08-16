import React from 'react'

import { PriceHighlight, TransactionsTableContainer } from './styles'

export function TransactionsTable() {
  return (
    <TransactionsTableContainer>
      <tbody>
        <tr>
          <td>Desenvolvimento de site</td>
          <td>
            <PriceHighlight variant="income">R$ 12.000,00</PriceHighlight>
          </td>
          <td>Venda</td>
          <td>13/04/2021</td>
        </tr>

        <tr>
          <td>Macbook</td>
          <td>
            <PriceHighlight variant="outcome">- R$ 12.000,00</PriceHighlight>
          </td>
          <td>Compra</td>
          <td>18/04/2021</td>
        </tr>
      </tbody>
    </TransactionsTableContainer>
  )
}
