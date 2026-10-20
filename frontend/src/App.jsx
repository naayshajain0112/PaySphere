import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AppLayout } from './layouts/AppLayout'
import { AppProvider } from './context/AppContext'
import { Dashboard } from './pages/Dashboard'
import { SendMoney } from './pages/SendMoney'
import { AddMoney } from './pages/AddMoney'
import { Transactions } from './pages/Transactions'
import { Analytics } from './pages/Analytics'
import { BankAccounts } from './pages/BankAccounts'
import { Profile } from './pages/Profile'
import { Admin } from './pages/Admin'
import './index.css'

function App() {
  return <AppProvider><BrowserRouter><Routes><Route element={<AppLayout />}><Route path="/" element={<Dashboard />} /><Route path="/send" element={<SendMoney />} /><Route path="/add-money" element={<AddMoney />} /><Route path="/transactions" element={<Transactions />} /><Route path="/analytics" element={<Analytics />} /><Route path="/bank-accounts" element={<BankAccounts />} /><Route path="/profile" element={<Profile />} /><Route path="/admin" element={<Admin />} /><Route path="*" element={<Navigate to="/" replace />} /></Route></Routes></BrowserRouter></AppProvider>
}
export default App
