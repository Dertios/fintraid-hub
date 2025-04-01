
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, TrendingUp, Briefcase, LineChart, BarChart as BarChartIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TabsContent, Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import StockCard from '@/components/ui/stock-card';
import MarketIndexCard from '@/components/ui/market-index-card';
import { mockStocks, mockIndices, watchlistStocks } from '@/data/mockData';

const Home = () => {
  const [topGainers, setTopGainers] = useState([]);
  const [topLosers, setTopLosers] = useState([]);
  
  useEffect(() => {
    // Simulate data fetching
    const sortedStocks = [...mockStocks].sort((a, b) => b.changePercent - a.changePercent);
    setTopGainers(sortedStocks.slice(0, 4));
    setTopLosers([...sortedStocks].reverse().slice(0, 4));
  }, []);

  return (
    <div className="space-y-8 animate-fade-in">
      <section className="py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold tracking-tight mb-2">Welcome to MarketFlow</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <Button asChild>
              <Link to="/dashboard">Go to Dashboard</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/market">Explore Market</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Market Indices</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {mockIndices.map(index => (
            <MarketIndexCard key={index.id} index={index} />
          ))}
        </div>
      </section>

      <section className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Market Movers</h2>
          <Button variant="ghost" asChild>
            <Link to="/market" className="flex items-center">
              View All <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </Button>
        </div>

        <Tabs defaultValue="gainers">
          <TabsList className="mb-4">
            <TabsTrigger value="gainers">Top Gainers</TabsTrigger>
            <TabsTrigger value="losers">Top Losers</TabsTrigger>
            <TabsTrigger value="watchlist">My Watchlist</TabsTrigger>
          </TabsList>
          
          <TabsContent value="gainers">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {topGainers.map(stock => (
                <StockCard key={stock.id} stock={stock} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="losers">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {topLosers.map(stock => (
                <StockCard key={stock.id} stock={stock} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="watchlist">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {watchlistStocks.map(stock => (
                <StockCard key={stock.id} stock={stock} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Briefcase className="h-5 w-5 text-primary" /> 
              Portfolio Management
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Track your investments, analyze performance, and manage your portfolio with ease.</p>
            <Button variant="outline" asChild className="w-full">
              <Link to="/dashboard">View Portfolio</Link>
            </Button>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" /> 
              Live Market Data
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Get real-time stock prices, market trends, and company information all in one place.</p>
            <Button variant="outline" asChild className="w-full">
              <Link to="/market">Explore Market</Link>
            </Button>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChartIcon className="h-5 w-5 text-primary" /> 
              Performance Analysis
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Visualize your investment performance with interactive charts and detailed analytics.</p>
            <Button variant="outline" asChild className="w-full">
              <Link to="/analytics">View Analytics</Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default Home;
