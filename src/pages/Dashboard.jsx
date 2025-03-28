
import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Briefcase, Wallet, ArrowUpDown, ChevronRight, Plus, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TabsContent, Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import PortfolioSummaryCard from '@/components/ui/portfolio-summary-card';
import PieChart from '@/components/charts/PieChart';
import { mockPortfolio, portfolioDistribution } from '@/data/mockData';

const Dashboard = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="hidden md:flex">
            <Filter className="h-4 w-4 mr-2" /> Filter
          </Button>
          <Button size="sm">
            <Plus className="h-4 w-4 mr-2" /> Buy Stocks
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <PortfolioSummaryCard 
          title="Total Value" 
          value={mockPortfolio.totalValue} 
          change={mockPortfolio.overallPnL}
          changePercent={mockPortfolio.overallPnLPercent}
          icon={<Briefcase className="h-4 w-4" />}
        />
        <PortfolioSummaryCard 
          title="Invested Amount" 
          value={mockPortfolio.investedValue} 
          change={0}
          changePercent={0}
          icon={<Wallet className="h-4 w-4" />}
        />
        <PortfolioSummaryCard 
          title="Today's P&L" 
          value={mockPortfolio.todaysPnL} 
          change={mockPortfolio.todaysPnL}
          changePercent={mockPortfolio.todaysPnLPercent}
          icon={<ArrowUpDown className="h-4 w-4" />}
        />
        <PortfolioSummaryCard 
          title="Overall P&L" 
          value={mockPortfolio.overallPnL} 
          change={mockPortfolio.overallPnL}
          changePercent={mockPortfolio.overallPnLPercent}
          icon={<TrendingUp className="h-4 w-4" />}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-xl">Your Holdings</CardTitle>
            <Button variant="ghost" size="sm" asChild>
              <Link to="/analytics" className="flex items-center">
                View Analytics <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </Button>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left border-b">
                    <th className="p-2 font-medium">Stock</th>
                    <th className="p-2 font-medium text-right">Qty</th>
                    <th className="p-2 font-medium text-right">Avg Price</th>
                    <th className="p-2 font-medium text-right">LTP</th>
                    <th className="p-2 font-medium text-right">Current Value</th>
                    <th className="p-2 font-medium text-right">P&L</th>
                  </tr>
                </thead>
                <tbody>
                  {mockPortfolio.holdings.map((holding) => (
                    <tr key={holding.id} className="border-b hover:bg-muted/50">
                      <td className="p-2">
                        <div className="font-medium">{holding.symbol}</div>
                        <div className="text-sm text-muted-foreground">{holding.name}</div>
                      </td>
                      <td className="p-2 text-right">{holding.quantity}</td>
                      <td className="p-2 text-right">₹{holding.avgPrice.toLocaleString('en-IN', { maximumFractionDigits: 2 })}</td>
                      <td className="p-2 text-right">₹{holding.currentPrice.toLocaleString('en-IN', { maximumFractionDigits: 2 })}</td>
                      <td className="p-2 text-right">₹{holding.value.toLocaleString('en-IN', { maximumFractionDigits: 2 })}</td>
                      <td className={`p-2 text-right ${holding.pnl >= 0 ? 'text-market-up' : 'text-market-down'}`}>
                        <div>₹{holding.pnl.toLocaleString('en-IN', { maximumFractionDigits: 2 })}</div>
                        <div className="text-sm">{holding.pnlPercent >= 0 ? '+' : ''}{holding.pnlPercent.toFixed(2)}%</div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-xl">Portfolio Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <PieChart data={portfolioDistribution} />
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-xl">Recent Transactions</CardTitle>
          <Button variant="ghost" size="sm" asChild>
            <Link to="/transactions" className="flex items-center">
              View All <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </Button>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all">
            <TabsList className="mb-4">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="buy">Buy</TabsTrigger>
              <TabsTrigger value="sell">Sell</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-left border-b">
                      <th className="p-2 font-medium">Date</th>
                      <th className="p-2 font-medium">Type</th>
                      <th className="p-2 font-medium">Stock</th>
                      <th className="p-2 font-medium text-right">Qty</th>
                      <th className="p-2 font-medium text-right">Price</th>
                      <th className="p-2 font-medium text-right">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[...mockPortfolio.holdings].slice(0, 3).map((holding, index) => (
                      <tr key={index} className="border-b hover:bg-muted/50">
                        <td className="p-2">
                          {new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}
                        </td>
                        <td className="p-2">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${index % 2 === 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                            {index % 2 === 0 ? 'BUY' : 'SELL'}
                          </span>
                        </td>
                        <td className="p-2">{holding.symbol}</td>
                        <td className="p-2 text-right">{holding.quantity}</td>
                        <td className="p-2 text-right">₹{holding.avgPrice.toLocaleString('en-IN', { maximumFractionDigits: 2 })}</td>
                        <td className="p-2 text-right">₹{(holding.quantity * holding.avgPrice).toLocaleString('en-IN', { maximumFractionDigits: 2 })}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </TabsContent>
            
            <TabsContent value="buy">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-left border-b">
                      <th className="p-2 font-medium">Date</th>
                      <th className="p-2 font-medium">Stock</th>
                      <th className="p-2 font-medium text-right">Qty</th>
                      <th className="p-2 font-medium text-right">Price</th>
                      <th className="p-2 font-medium text-right">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[...mockPortfolio.holdings].slice(0, 2).map((holding, index) => (
                      <tr key={index} className="border-b hover:bg-muted/50">
                        <td className="p-2">
                          {new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}
                        </td>
                        <td className="p-2">{holding.symbol}</td>
                        <td className="p-2 text-right">{holding.quantity}</td>
                        <td className="p-2 text-right">₹{holding.avgPrice.toLocaleString('en-IN', { maximumFractionDigits: 2 })}</td>
                        <td className="p-2 text-right">₹{(holding.quantity * holding.avgPrice).toLocaleString('en-IN', { maximumFractionDigits: 2 })}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </TabsContent>
            
            <TabsContent value="sell">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-left border-b">
                      <th className="p-2 font-medium">Date</th>
                      <th className="p-2 font-medium">Stock</th>
                      <th className="p-2 font-medium text-right">Qty</th>
                      <th className="p-2 font-medium text-right">Price</th>
                      <th className="p-2 font-medium text-right">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b hover:bg-muted/50">
                      <td className="p-2">
                        {new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}
                      </td>
                      <td className="p-2">RELIANCE</td>
                      <td className="p-2 text-right">5</td>
                      <td className="p-2 text-right">₹2,430.45</td>
                      <td className="p-2 text-right">₹12,152.25</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
