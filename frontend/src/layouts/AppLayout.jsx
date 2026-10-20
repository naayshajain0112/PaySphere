import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'
import { MobileNav } from '../components/MobileNav'
import { Sidebar } from '../components/Sidebar'
export function AppLayout() { const [mobileOpen, setMobileOpen] = useState(false); return <div className="app-shell"><Sidebar />{mobileOpen && <div onClick={() => setMobileOpen(false)} className="fixed inset-0 z-40 bg-[#18203c]/30 lg:hidden" />}<main className="min-h-screen lg:pl-[250px]"><Header onMenu={() => setMobileOpen(true)} /><div className="page-wrap p-5 pb-24 lg:p-10"><Outlet /></div></main><MobileNav /></div> }
