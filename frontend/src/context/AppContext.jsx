import { createContext, useMemo, useState } from 'react'
import { demoUser, initialBanks, initialTransactions } from '../data/mockData'

const AppContext = createContext(null)
export function AppProvider({ children }) {
  const [transactions, setTransactions] = useState(initialTransactions)
  const [balance, setBalance] = useState(25000)
  const [banks, setBanks] = useState(initialBanks)
  const [user, setUser] = useState(demoUser)
  const addTransaction = (transaction) => {
    setTransactions((items) => [transaction, ...items])
    if (transaction.status === 'SUCCESS') setBalance((value) => value + (transaction.type === 'received' || transaction.type === 'topup' ? transaction.amount : -transaction.amount))
  }
  const sendMoney = (party, amount, note) => addTransaction({ id: `tx-${Date.now()}`, reference: `PSX${Math.random().toString(36).slice(2, 8).toUpperCase()}`, party: party.name, type: 'sent', description: note || 'Money sent', category: 'Transfers', amount, status: 'SUCCESS', timestamp: new Date().toISOString(), partyInitials: party.initials })
  const addMoney = (amount) => addTransaction({ id: `tx-${Date.now()}`, reference: `PSX${Math.random().toString(36).slice(2, 8).toUpperCase()}`, party: 'PaySphere top-up', type: 'topup', description: 'Wallet top-up', category: 'Top up', amount, status: 'SUCCESS', timestamp: new Date().toISOString(), partyInitials: 'PS' })
  const value = useMemo(() => ({ user, setUser, transactions, balance, banks, setBanks, addTransaction, sendMoney, addMoney }), [user, transactions, balance, banks])
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
export { AppContext }
