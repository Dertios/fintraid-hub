
// Mock data for stocks
export const mockStocks = [
  { 
    id: 1, 
    symbol: 'RELIANCE', 
    name: 'Reliance Industries', 
    price: 2430.45, 
    changePercent: 1.23,
    sector: 'Energy',
    volume: 234500,
    marketCap: 1654322000000 
  },
  { 
    id: 2, 
    symbol: 'TATASTEEL', 
    name: 'Tata Steel', 
    price: 134.67, 
    changePercent: -0.88,
    sector: 'Metals',
    volume: 568700,
    marketCap: 164530000000 
  },
  { 
    id: 3, 
    symbol: 'INFY', 
    name: 'Infosys', 
    price: 1456.78, 
    changePercent: 0.34,
    sector: 'IT',
    volume: 324100,
    marketCap: 604321000000 
  },
  { 
    id: 4, 
    symbol: 'HDFCBANK', 
    name: 'HDFC Bank', 
    price: 1674.50, 
    changePercent: 0.67,
    sector: 'Banking',
    volume: 456300,
    marketCap: 927650000000 
  },
  { 
    id: 5, 
    symbol: 'BHARTIARTL', 
    name: 'Bharti Airtel', 
    price: 873.45, 
    changePercent: -1.12,
    sector: 'Telecom',
    volume: 345600,
    marketCap: 484321000000 
  },
  { 
    id: 6, 
    symbol: 'TCS', 
    name: 'Tata Consultancy Services', 
    price: 3245.67, 
    changePercent: 0.43,
    sector: 'IT',
    volume: 178900,
    marketCap: 1184322000000 
  },
  { 
    id: 7, 
    symbol: 'ITC', 
    name: 'ITC Limited', 
    price: 476.89, 
    changePercent: 1.56,
    sector: 'FMCG',
    volume: 674500,
    marketCap: 591204000000 
  },
  { 
    id: 8, 
    symbol: 'WIPRO', 
    name: 'Wipro Limited', 
    price: 456.78, 
    changePercent: -0.78,
    sector: 'IT',
    volume: 234500,
    marketCap: 250432000000 
  }
];

// Mock market indices
export const mockIndices = [
  { id: 1, name: 'NIFTY 50', value: 19345.67, changePercent: 0.45 },
  { id: 2, name: 'SENSEX', value: 64523.45, changePercent: 0.52 },
  { id: 3, name: 'BANKNIFTY', value: 43256.78, changePercent: -0.23 }
];

// Mock portfolio data
export const mockPortfolio = {
  totalValue: 245678.90,
  investedValue: 230000.00,
  todaysPnL: 1250.45,
  overallPnL: 15678.90,
  todaysPnLPercent: 0.51,
  overallPnLPercent: 6.82,
  holdings: [
    {
      id: 1,
      symbol: 'RELIANCE',
      name: 'Reliance Industries',
      quantity: 10,
      avgPrice: 2250.50,
      currentPrice: 2430.45,
      value: 24304.50,
      pnl: 1799.50,
      pnlPercent: 7.99
    },
    {
      id: 2,
      symbol: 'INFY',
      name: 'Infosys',
      quantity: 15,
      avgPrice: 1400.25,
      currentPrice: 1456.78,
      value: 21851.70,
      pnl: 847.95,
      pnlPercent: 4.04
    },
    {
      id: 3,
      symbol: 'HDFCBANK',
      name: 'HDFC Bank',
      quantity: 12,
      avgPrice: 1600.00,
      currentPrice: 1674.50,
      value: 20094.00,
      pnl: 894.00,
      pnlPercent: 4.66
    },
    {
      id: 4,
      symbol: 'TCS',
      name: 'Tata Consultancy Services',
      quantity: 5,
      avgPrice: 3100.75,
      currentPrice: 3245.67,
      value: 16228.35,
      pnl: 724.60,
      pnlPercent: 4.67
    }
  ]
};

// Mock transactions
export const mockTransactions = [
  {
    id: 1,
    date: new Date('2023-06-15'),
    type: 'BUY',
    symbol: 'RELIANCE',
    quantity: 10,
    price: 2250.50,
    total: 22505.00,
    status: 'COMPLETED'
  },
  {
    id: 2,
    date: new Date('2023-06-20'),
    type: 'BUY',
    symbol: 'INFY',
    quantity: 15,
    price: 1400.25,
    total: 21003.75,
    status: 'COMPLETED'
  },
  {
    id: 3,
    date: new Date('2023-07-05'),
    type: 'BUY',
    symbol: 'HDFCBANK',
    quantity: 12,
    price: 1600.00,
    total: 19200.00,
    status: 'COMPLETED'
  },
  {
    id: 4,
    date: new Date('2023-07-10'),
    type: 'BUY',
    symbol: 'TCS',
    quantity: 5,
    price: 3100.75,
    total: 15503.75,
    status: 'COMPLETED'
  },
  {
    id: 5,
    date: new Date('2023-08-01'),
    type: 'SELL',
    symbol: 'RELIANCE',
    quantity: 5,
    price: 2350.25,
    total: 11751.25,
    status: 'COMPLETED'
  },
  {
    id: 6,
    date: new Date('2023-08-15'),
    type: 'BUY',
    symbol: 'RELIANCE',
    quantity: 5,
    price: 2400.00,
    total: 12000.00,
    status: 'COMPLETED'
  }
];

// Portfolio distribution for pie chart
export const portfolioDistribution = [
  { label: 'Reliance', value: 24304.50 },
  { label: 'Infosys', value: 21851.70 },
  { label: 'HDFC Bank', value: 20094.00 },
  { label: 'TCS', value: 16228.35 }
];

// Monthly PnL for bar chart
export const monthlyPnL = [
  { label: 'Jan', value: 1245.67 },
  { label: 'Feb', value: 2345.89 },
  { label: 'Mar', value: -1234.56 },
  { label: 'Apr', value: 3456.78 },
  { label: 'May', value: 2345.67 },
  { label: 'Jun', value: -2345.67 },
  { label: 'Jul', value: 4567.89 },
  { label: 'Aug', value: 3456.78 }
];

// Sector distribution
export const sectorDistribution = [
  { label: 'IT', value: 38080.05 },
  { label: 'Energy', value: 24304.50 },
  { label: 'Banking', value: 20094.00 }
];

// Mock user profile data
export const userProfile = {
  name: 'Amit Kumar',
  email: 'amit.kumar@example.com',
  phone: '+91 9876543210',
  kycStatus: 'VERIFIED',
  joinDate: new Date('2023-05-01'),
  bankAccounts: [
    {
      id: 1,
      accountNumber: 'XXXX1234',
      bankName: 'HDFC Bank',
      ifsc: 'HDFC0001234',
      primary: true
    },
    {
      id: 2,
      accountNumber: 'XXXX5678',
      bankName: 'ICICI Bank',
      ifsc: 'ICICI0005678',
      primary: false
    }
  ]
};

// Watchlist stocks
export const watchlistStocks = [
  { 
    id: 1, 
    symbol: 'TATAMOTORS', 
    name: 'Tata Motors', 
    price: 564.78, 
    changePercent: 2.34 
  },
  { 
    id: 2, 
    symbol: 'SBIN', 
    name: 'State Bank of India', 
    price: 567.89, 
    changePercent: -0.45 
  },
  { 
    id: 3, 
    symbol: 'ICICIBANK', 
    name: 'ICICI Bank', 
    price: 874.56, 
    changePercent: 0.78 
  },
  { 
    id: 4, 
    symbol: 'AXISBANK', 
    name: 'Axis Bank', 
    price: 934.67, 
    changePercent: 1.23 
  }
];
