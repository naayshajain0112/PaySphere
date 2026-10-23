import { createContext, useState } from 'react'
import { demoUser, initialBanks, initialMoneyJars, initialSplitBills, initialTransactions } from '../data/mockData'

const AppContext = createContext(null)
export function AppProvider({ children }) {
  const [transactions, setTransactions] = useState(initialTransactions)
  const [balance, setBalance] = useState(25000)
  const [banks, setBanks] = useState(initialBanks)
  const [user, setUser] = useState(demoUser)
  const [splitBills, setSplitBills] = useState(() => JSON.parse(localStorage.getItem('paysphere-split-bills') || 'null') || initialSplitBills)
  const [moneyJars, setMoneyJars] = useState(() => JSON.parse(localStorage.getItem('paysphere-money-jars') || 'null') || initialMoneyJars)
  const persistSplits = (next) => { setSplitBills(next); localStorage.setItem('paysphere-split-bills', JSON.stringify(next)) }
  const persistJars = (next) => { setMoneyJars(next); localStorage.setItem('paysphere-money-jars', JSON.stringify(next)) }
  const addSplitBill = (bill) => persistSplits([bill, ...splitBills])
  const settleParticipant = (splitId, participantId) => persistSplits(splitBills.map((bill) => bill.splitId !== splitId ? bill : (() => { const settledAt = new Date().toISOString(); const participants = bill.participants.map((item) => item.id === participantId ? { ...item, settlementStatus: 'SETTLED', settledAt } : item); return { ...bill, status: participants.every((item) => item.settlementStatus === 'SETTLED') ? 'SETTLED' : 'PENDING', participants, settlementActivity: [{ id: `settlement-${Date.now()}`, participantId, settledAt }, ...(bill.settlementActivity || [])] } })()))
  const addMoneyJar = (jar) => persistJars([jar, ...moneyJars])
  const updateMoneyJar = (jarId, changes) => persistJars(moneyJars.map((jar) => jar.jarId === jarId ? { ...jar, ...changes } : jar))
  const deleteMoneyJar = (jarId) => persistJars(moneyJars.filter((jar) => jar.jarId !== jarId))
  const addJarContribution = (jarId, amount, type) => persistJars(moneyJars.map((jar) => { if (jar.jarId !== jarId) return jar; const savedAmount = Math.max(0, jar.savedAmount + (type === 'DEPOSIT' ? amount : -amount)); return { ...jar, savedAmount, status: savedAmount >= jar.targetAmount ? 'COMPLETED' : 'ACTIVE', contributions: [{ id: `contribution-${Date.now()}`, amount, contributionType: type, createdAt: new Date().toISOString() }, ...jar.contributions] } }))
  const addTransaction = (transaction) => {
    setTransactions((items) => [transaction, ...items])
    if (transaction.status === 'SUCCESS') setBalance((value) => value + (transaction.type === 'received' || transaction.type === 'topup' ? transaction.amount : -transaction.amount))
  }
  const sendMoney = (party, amount, note) => addTransaction({ id: `tx-${Date.now()}`, reference: `PSX${Math.random().toString(36).slice(2, 8).toUpperCase()}`, party: party.name, type: 'sent', description: note || 'Money sent', category: 'Transfers', amount, status: 'SUCCESS', timestamp: new Date().toISOString(), partyInitials: party.initials })
  const addMoney = (amount) => addTransaction({ id: `tx-${Date.now()}`, reference: `PSX${Math.random().toString(36).slice(2, 8).toUpperCase()}`, party: 'PaySphere top-up', type: 'topup', description: 'Wallet top-up', category: 'Top up', amount, status: 'SUCCESS', timestamp: new Date().toISOString(), partyInitials: 'PS' })
  const value = { user, setUser, transactions, balance, banks, setBanks, addTransaction, sendMoney, addMoney, splitBills, addSplitBill, settleParticipant, moneyJars, addMoneyJar, updateMoneyJar, deleteMoneyJar, addJarContribution }
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
export { AppContext }
