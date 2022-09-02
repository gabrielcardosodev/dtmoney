import React, { createContext, useEffect, useState } from 'react'

import { Transaction } from '../@types'
import { api } from '../lib/axios'

interface CreateTransactionInputType {
  description: string
  price: number
  category: string
  type: 'income' | 'outcome'
}

interface TransactionsContextType {
  transactions: Transaction[]
  fetchTransaction: (query?: string) => Promise<void>
  createTransaction: (data: CreateTransactionInputType) => Promise<void>
}

interface TransactionProviderProps {
  children: React.ReactNode
}

export const TransactionsContext = createContext({} as TransactionsContextType)

export function TransactionsProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  async function fetchTransaction(query?: string) {
    const response = await api.get('transactions', {
      params: {
        _sort: 'createdAt',
        _order: 'desc',
        q: query,
      },
    })

    setTransactions(response.data)
  }

  async function createTransaction(data: CreateTransactionInputType) {
    const { description, type, category, price } = data

    const response = await api.post('transactions', {
      description,
      type,
      category,
      price,
      createdAt: new Date(),
    })

    setTransactions((state) => [response.data, ...state])
  }

  useEffect(() => {
    fetchTransaction()
  }, [])

  return (
    <TransactionsContext.Provider
      value={{ transactions, fetchTransaction, createTransaction }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}
