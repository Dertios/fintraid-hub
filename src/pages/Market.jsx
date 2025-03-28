
import React, { useState } from 'react';
import { Search, Filter, ChevronDown, ChevronUp, BarChart4 } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import MarketIndexCard from '@/components/ui/market-index-card';
import { mockStocks, mockIndices } from '@/data/mockData';

const Market = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: 'symbol', direction: 'asc' });
  const [filterSector, setFilterSector] = useState('All');
  
  const filteredStocks = mockStocks.filter(stock => 
    (stock.symbol.toLowerCase().includes(searchTerm.toLowerCase()) || 
     stock.name.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (filterSector === 'All' || stock.sector === filterSector)
  );
  
  const sortedStocks = [...filteredStocks].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === 'asc' ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === 'asc' ? 1 : -1;
    }
    return 0;
  });
  
  const requestSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const sectors = ['All', ...new Set(mockStocks.map(stock => stock.sector))];

  const getSortIcon = (columnName) => {
    if (sortConfig.key !== columnName) return null;
    
    return sortConfig.direction === 'asc' ? (
      <ChevronUp className="h-4 w-4 inline ml-1" />
    ) : (
      <ChevronDown className="h-4 w-4 inline ml-1" />
    );
  };
  
  return (
    <div className="space-y-6 animate-fade-in">
      <h1 className="text-3xl font-bold">Market</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {mockIndices.map(index => (
          <MarketIndexCard key={index.id} index={index} />
        ))}
      </div>
      
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-xl flex items-center">
            <BarChart4 className="h-5 w-5 mr-2" /> Stock Explorer
          </CardTitle>
          <div className="flex flex-col md:flex-row gap-4 mt-2">
            <div className="relative flex-1">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search stocks..."
                className="pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <Select 
                value={filterSector} 
                onValueChange={setFilterSector}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by sector" />
                </SelectTrigger>
                <SelectContent>
                  {sectors.map(sector => (
                    <SelectItem key={sector} value={sector}>{sector}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Button variant="outline" className="hidden md:flex">
                <Filter className="h-4 w-4 mr-2" /> More Filters
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left border-b">
                  <th className="p-2 font-medium cursor-pointer" onClick={() => requestSort('symbol')}>
                    Symbol {getSortIcon('symbol')}
                  </th>
                  <th className="p-2 font-medium cursor-pointer" onClick={() => requestSort('name')}>
                    Name {getSortIcon('name')}
                  </th>
                  <th className="p-2 font-medium cursor-pointer text-right" onClick={() => requestSort('price')}>
                    LTP {getSortIcon('price')}
                  </th>
                  <th className="p-2 font-medium cursor-pointer text-right" onClick={() => requestSort('changePercent')}>
                    Change % {getSortIcon('changePercent')}
                  </th>
                  <th className="p-2 font-medium cursor-pointer hidden md:table-cell" onClick={() => requestSort('sector')}>
                    Sector {getSortIcon('sector')}
                  </th>
                  <th className="p-2 font-medium cursor-pointer text-right hidden lg:table-cell" onClick={() => requestSort('volume')}>
                    Volume {getSortIcon('volume')}
                  </th>
                  <th className="p-2 font-medium text-right hidden lg:table-cell">Action</th>
                </tr>
              </thead>
              <tbody>
                {sortedStocks.map((stock) => (
                  <tr key={stock.id} className="border-b hover:bg-muted/50">
                    <td className="p-2 font-medium">{stock.symbol}</td>
                    <td className="p-2">{stock.name}</td>
                    <td className="p-2 text-right">₹{stock.price.toLocaleString('en-IN', { maximumFractionDigits: 2 })}</td>
                    <td className={`p-2 text-right ${stock.changePercent >= 0 ? 'text-market-up' : 'text-market-down'}`}>
                      {stock.changePercent > 0 ? '+' : ''}{stock.changePercent.toFixed(2)}%
                    </td>
                    <td className="p-2 hidden md:table-cell">{stock.sector}</td>
                    <td className="p-2 text-right hidden lg:table-cell">{stock.volume.toLocaleString('en-IN')}</td>
                    <td className="p-2 text-right hidden lg:table-cell">
                      <Button size="sm">Buy</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Market;
