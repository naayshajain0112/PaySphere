export const formatINR = (amount) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 2 }).format(amount)
export const formatDate = (value, options = { day: '2-digit', month: 'short', year: 'numeric' }) => new Intl.DateTimeFormat('en-IN', options).format(new Date(value))
export const formatDateTime = (value) => new Intl.DateTimeFormat('en-IN', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' }).format(new Date(value))
