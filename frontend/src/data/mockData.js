export const demoUser = {
  name: 'john',
  email: 'john@example.com',
  phone: '9876543210',
  walletId: 'PSW10001',
  currency: 'INR',
  status: 'ACTIVE',
  createdAt: '2024-08-14',
}

const daysAgo = (days, hour = 12) => {
  const date = new Date()
  date.setDate(date.getDate() - days)
  date.setHours(hour, 20, 0, 0)
  return date.toISOString()
}

export const recipients = [
  { id: 'priya', name: 'Priya Mehta', phone: '98765 43218', initials: 'PM', location: 'Bengaluru' },
  { id: 'rohan', name: 'Rohan Verma', phone: '98110 76542', initials: 'RV', location: 'Delhi' },
  { id: 'ananya', name: 'Ananya Gupta', phone: '99001 28476', initials: 'AG', location: 'Mumbai' },
  { id: 'kabir', name: 'Kabir Singh', phone: '98204 17386', initials: 'KS', location: 'Pune' },
  { id: 'sneha', name: 'Sneha Iyer', phone: '98450 62914', initials: 'SI', location: 'Chennai' },
  { id: 'aditya', name: 'Aditya Nair', phone: '99860 51432', initials: 'AN', location: 'Kochi' },
  { id: 'ishita', name: 'Ishita Kapoor', phone: '98192 76035', initials: 'IK', location: 'Hyderabad' },
  { id: 'rahul', name: 'Rahul Joshi', phone: '98990 64218', initials: 'RJ', location: 'Jaipur' },
]

export const initialTransactions = [
  { id: 'tx-01', reference: 'PSX8A42K1', party: 'Priya Mehta', type: 'received', description: 'Money received', category: 'Transfers', amount: 4500, status: 'SUCCESS', timestamp: daysAgo(0, 10), partyInitials: 'PM' },
  { id: 'tx-02', reference: 'PSX7M19Q4', party: 'Rohan Verma', type: 'sent', description: 'Shared cab', category: 'Transport', amount: 280, status: 'SUCCESS', timestamp: daysAgo(0, 8), partyInitials: 'RV' },
  { id: 'tx-03', reference: 'PSX6P83L2', party: 'BigBasket', type: 'sent', description: 'Grocery shopping', category: 'Groceries', amount: 1840, status: 'SUCCESS', timestamp: daysAgo(1, 18), partyInitials: 'BB' },
  { id: 'tx-04', reference: 'PSX5N77D8', party: 'Kabir Singh', type: 'sent', description: 'Birthday gift', category: 'Gifts', amount: 1500, status: 'SUCCESS', timestamp: daysAgo(2, 14), partyInitials: 'KS' },
  { id: 'tx-05', reference: 'PSX4B61R0', party: 'Sneha Iyer', type: 'received', description: 'Weekend trip', category: 'Transfers', amount: 3200, status: 'SUCCESS', timestamp: daysAgo(3, 16), partyInitials: 'SI' },
  { id: 'tx-06', reference: 'PSX3T25V6', party: 'INOX Cinemas', type: 'sent', description: 'Movie tickets', category: 'Entertainment', amount: 960, status: 'SUCCESS', timestamp: daysAgo(4, 20), partyInitials: 'IC' },
  { id: 'tx-07', reference: 'PSX2H44S9', party: 'Aditya Nair', type: 'sent', description: 'Lunch payment', category: 'Food', amount: 420, status: 'SUCCESS', timestamp: daysAgo(5, 13), partyInitials: 'AN' },
  { id: 'tx-08', reference: 'PSX1W38E5', party: 'Swiggy', type: 'sent', description: 'Dinner order', category: 'Food', amount: 685, status: 'SUCCESS', timestamp: daysAgo(6, 21), partyInitials: 'SW' },
  { id: 'tx-09', reference: 'PSX9C27J3', party: 'Ananya Gupta', type: 'received', description: 'Money received', category: 'Transfers', amount: 2100, status: 'SUCCESS', timestamp: daysAgo(7, 11), partyInitials: 'AG' },
  { id: 'tx-10', reference: 'PSX8F12A7', party: 'HDFC Rent', type: 'sent', description: 'Monthly rent', category: 'Bills', amount: 12000, status: 'SUCCESS', timestamp: daysAgo(8, 9), partyInitials: 'HR' },
  { id: 'tx-11', reference: 'PSX7D90U2', party: 'Café Coffee Day', type: 'sent', description: 'Coffee', category: 'Food', amount: 240, status: 'SUCCESS', timestamp: daysAgo(9, 17), partyInitials: 'CC' },
  { id: 'tx-12', reference: 'PSX6K18G8', party: 'Ishita Kapoor', type: 'received', description: 'Weekend trip', category: 'Transfers', amount: 1850, status: 'SUCCESS', timestamp: daysAgo(10, 15), partyInitials: 'IK' },
  { id: 'tx-13', reference: 'PSX5L73X4', party: 'Myntra', type: 'sent', description: 'Shopping', category: 'Shopping', amount: 2299, status: 'SUCCESS', timestamp: daysAgo(11, 19), partyInitials: 'MY' },
  { id: 'tx-14', reference: 'PSX4Q52Z1', party: 'Rahul Joshi', type: 'sent', description: 'Lunch payment', category: 'Food', amount: 560, status: 'PENDING', timestamp: daysAgo(12, 13), partyInitials: 'RJ' },
  { id: 'tx-15', reference: 'PSX3R66N0', party: 'MSEDCL', type: 'sent', description: 'Electricity bill', category: 'Bills', amount: 1720, status: 'SUCCESS', timestamp: daysAgo(13, 10), partyInitials: 'MS' },
  { id: 'tx-16', reference: 'PSX2V41Y6', party: 'Priya Mehta', type: 'sent', description: 'Shared cab', category: 'Transport', amount: 310, status: 'SUCCESS', timestamp: daysAgo(15, 8), partyInitials: 'PM' },
  { id: 'tx-17', reference: 'PSX1E84W2', party: 'Rohan Verma', type: 'received', description: 'Money received', category: 'Transfers', amount: 2750, status: 'SUCCESS', timestamp: daysAgo(18, 12), partyInitials: 'RV' },
  { id: 'tx-18', reference: 'PSX9G32M5', party: 'Ajio', type: 'sent', description: 'Shopping', category: 'Shopping', amount: 1399, status: 'FAILED', timestamp: daysAgo(19, 18), partyInitials: 'AJ' },
  { id: 'tx-19', reference: 'PSX8J71P8', party: 'Kabir Singh', type: 'received', description: 'Money received', category: 'Transfers', amount: 800, status: 'SUCCESS', timestamp: daysAgo(21, 16), partyInitials: 'KS' },
  { id: 'tx-20', reference: 'PSX7S29K7', party: 'Bengaluru Metro', type: 'sent', description: 'Metro commute', category: 'Transport', amount: 180, status: 'SUCCESS', timestamp: daysAgo(23, 8), partyInitials: 'BM' },
  { id: 'tx-21', reference: 'PSX6A54T9', party: 'Sneha Iyer', type: 'sent', description: 'Weekend trip', category: 'Travel', amount: 2600, status: 'SUCCESS', timestamp: daysAgo(25, 14), partyInitials: 'SI' },
  { id: 'tx-22', reference: 'PSX5U20B4', party: 'Aditya Nair', type: 'received', description: 'Money received', category: 'Transfers', amount: 1250, status: 'SUCCESS', timestamp: daysAgo(26, 11), partyInitials: 'AN' },
  { id: 'tx-23', reference: 'PSX4Y86C2', party: 'Zepto', type: 'sent', description: 'Grocery shopping', category: 'Groceries', amount: 735, status: 'SUCCESS', timestamp: daysAgo(28, 20), partyInitials: 'ZP' },
  { id: 'tx-24', reference: 'PSX3M39H5', party: 'Ananya Gupta', type: 'sent', description: 'Birthday gift', category: 'Gifts', amount: 950, status: 'SUCCESS', timestamp: daysAgo(30, 15), partyInitials: 'AG' },
  { id: 'tx-25', reference: 'PSX2N63F7', party: 'PaySphere top-up', type: 'topup', description: 'Wallet top-up', category: 'Top up', amount: 5000, status: 'SUCCESS', timestamp: daysAgo(32, 9), partyInitials: 'PS' },
]

export const initialBanks = [
  { id: 'sbi', bank: 'State Bank of India', short: 'SBI', account: '•••• 1842', verified: true, kind: 'Savings' },
  { id: 'hdfc', bank: 'HDFC Bank', short: 'HDFC', account: '•••• 9207', verified: true, kind: 'Salary account' },
  { id: 'icici', bank: 'ICICI Bank', short: 'ICICI', account: '•••• 4418', verified: false, kind: 'Savings' },
]

const participant = (id, name, share, settled = false) => ({ id, userId: id, participantName: name, shareAmount: share, settlementStatus: settled ? 'SETTLED' : 'PENDING', settledAt: settled ? daysAgo(2, 15) : null })

export const initialSplitBills = [
  { splitId: 'split-goa', title: 'Goa Trip', totalAmount: 12000, createdBy: 'john', paidBy: 'john', splitType: 'equal', createdAt: daysAgo(8), description: 'Villa, cabs and activities', status: 'PENDING', participants: [participant('john', 'You', 3000, true), participant('priya', 'Priya Mehta', 3000, true), participant('rohan', 'Rohan Verma', 3000), participant('ananya', 'Ananya Gupta', 3000)] },
  { splitId: 'split-pizza', title: 'Pizza Night', totalAmount: 1800, createdBy: 'john', paidBy: 'john', splitType: 'equal', createdAt: daysAgo(4), description: 'Friday night at Joeys', status: 'PENDING', participants: [participant('john', 'You', 600, true), participant('kabir', 'Kabir Singh', 600), participant('sneha', 'Sneha Iyer', 600)] },
  { splitId: 'split-groceries', title: 'Hostel Groceries', totalAmount: 2400, createdBy: 'priya', paidBy: 'priya', splitType: 'equal', createdAt: daysAgo(12), description: 'Monthly shared supplies', status: 'PENDING', participants: [participant('priya', 'Priya Mehta', 600, true), participant('john', 'You', 600), participant('rohan', 'Rohan Verma', 600), participant('aditya', 'Aditya Nair', 600)] },
  { splitId: 'split-movie', title: 'Movie Tickets', totalAmount: 1200, createdBy: 'john', paidBy: 'john', splitType: 'equal', createdAt: daysAgo(2), description: 'Saturday movie at INOX', status: 'SETTLED', participants: [participant('john', 'You', 400, true), participant('ishita', 'Ishita Kapoor', 400, true), participant('rahul', 'Rahul Joshi', 400, true)] },
]

export const initialMoneyJars = [
  { jarId: 'jar-macbook', jarName: 'New MacBook', targetAmount: 85000, savedAmount: 42500, targetDate: '2027-04-15', category: 'Gadgets', icon: '💻', description: 'A reliable laptop for work and learning', status: 'ACTIVE', createdAt: daysAgo(30), contributions: [{ id: 'contribution-1', amount: 42500, contributionType: 'DEPOSIT', createdAt: daysAgo(10) }] },
  { jarId: 'jar-goa', jarName: 'Goa Vacation', targetAmount: 30000, savedAmount: 22500, targetDate: '2027-01-20', category: 'Travel', icon: '🏝️', description: 'Beach time with friends', status: 'ACTIVE', createdAt: daysAgo(24), contributions: [{ id: 'contribution-2', amount: 22500, contributionType: 'DEPOSIT', createdAt: daysAgo(7) }] },
  { jarId: 'jar-emergency', jarName: 'Emergency Fund', targetAmount: 50000, savedAmount: 50000, targetDate: '2026-12-31', category: 'Safety', icon: '🛡️', description: 'A little extra peace of mind', status: 'COMPLETED', createdAt: daysAgo(80), contributions: [{ id: 'contribution-3', amount: 50000, contributionType: 'DEPOSIT', createdAt: daysAgo(20) }] },
  { jarId: 'jar-birthday', jarName: 'Birthday Shopping', targetAmount: 10000, savedAmount: 3500, targetDate: '2026-11-30', category: 'Shopping', icon: '🎁', description: 'Gifts and a special dinner', status: 'ACTIVE', createdAt: daysAgo(14), contributions: [{ id: 'contribution-4', amount: 3500, contributionType: 'DEPOSIT', createdAt: daysAgo(3) }] },
]
