
import React, { useState } from 'react';
import { DownloadCloud, Filter, Calendar, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { mockTransactions } from '@/data/mockData';

const Transactions = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('ALL');
  const [sortOrder, setSortOrder] = useState('newest');
  
  const filteredTransactions = mockTransactions.filter(transaction => 
    (transaction.symbol.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (filterType === 'ALL' || transaction.type === filterType)
  );
  
  const sortedTransactions = [...filteredTransactions].sort((a, b) => {
    if (sortOrder === 'newest') {
      return new Date(b.date) - new Date(a.date);
    } else {
      return new Date(a.date) - new Date(b.date);
    }
  });
  
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
  };
  
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-3xl font-bold">Transaction History</h1>
        <Button variant="outline">
          <DownloadCloud className="h-4 w-4 mr-2" /> Export
        </Button>
      </div>
      
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-xl">All Transactions</CardTitle>
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <div className="relative flex-1">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by symbol..."
                className="pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <Select value={filterType} onValueChange={setFilterType}>
                <SelectTrigger className="w-[120px]">
                  <Filter className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Filter" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ALL">All</SelectItem>
                  <SelectItem value="BUY">Buy</SelectItem>
                  <SelectItem value="SELL">Sell</SelectItem>
                </SelectContent>
              </Select>
              
              <Select value={sortOrder} onValueChange={setSortOrder}>
                <SelectTrigger className="w-[130px]">
                  <Calendar className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Sort" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="oldest">Oldest First</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left border-b">
                  <th className="p-2 font-medium">Date</th>
                  <th className="p-2 font-medium">Type</th>
                  <th className="p-2 font-medium">Symbol</th>
                  <th className="p-2 font-medium text-right">Quantity</th>
                  <th className="p-2 font-medium text-right">Price</th>
                  <th className="p-2 font-medium text-right">Total Value</th>
                  <th className="p-2 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {sortedTransactions.map((transaction) => (
                  <tr key={transaction.id} className="border-b hover:bg-muted/50">
                    <td className="p-2">{formatDate(transaction.date)}</td>
                    <td className="p-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        transaction.type === 'BUY' 
                          ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' 
                          : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
                      }`}>
                        {transaction.type}
                      </span>
                    </td>
                    <td className="p-2 font-medium">{transaction.symbol}</td>
                    <td className="p-2 text-right">{transaction.quantity}</td>
                    <td className="p-2 text-right">₹{transaction.price.toLocaleString('en-IN', { maximumFractionDigits: 2 })}</td>
                    <td className="p-2 text-right">₹{transaction.total.toLocaleString('en-IN', { maximumFractionDigits: 2 })}</td>
                    <td className="p-2">
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                        {transaction.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-md">Total Buy Value</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">₹78,212.50</p>
            <p className="text-sm text-muted-foreground">4 transactions</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-md">Total Sell Value</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">₹11,751.25</p>
            <p className="text-sm text-muted-foreground">1 transaction</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-md">Net Investment</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">₹66,461.25</p>
            <p className="text-sm text-muted-foreground">Last trade on 15 Aug 2023</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Transactions;
