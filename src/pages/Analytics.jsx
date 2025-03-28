
import React, { useState } from 'react';
import { PieChart as PieChartIcon, BarChart4, ArrowDownUp, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import PieChart from '@/components/charts/PieChart';
import BarChart from '@/components/charts/BarChart';
import { portfolioDistribution, sectorDistribution, monthlyPnL } from '@/data/mockData';

const Analytics = () => {
  const [timeRange, setTimeRange] = useState('ytd');
  
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Analytics</h1>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger className="w-[180px]">
            <Calendar className="w-4 h-4 mr-2" />
            <SelectValue placeholder="Select Time Range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1m">Last Month</SelectItem>
            <SelectItem value="3m">Last 3 Months</SelectItem>
            <SelectItem value="6m">Last 6 Months</SelectItem>
            <SelectItem value="ytd">Year to Date</SelectItem>
            <SelectItem value="1y">Last Year</SelectItem>
            <SelectItem value="all">All Time</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-xl flex items-center">
              <PieChartIcon className="h-5 w-5 mr-2" /> Portfolio Distribution
            </CardTitle>
            <Select defaultValue="holdings">
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="View By" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="holdings">By Holdings</SelectItem>
                <SelectItem value="sector">By Sector</SelectItem>
              </SelectContent>
            </Select>
          </CardHeader>
          <CardContent>
            <PieChart data={portfolioDistribution} />
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-xl flex items-center">
              <ArrowDownUp className="h-5 w-5 mr-2" /> Sector Allocation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <PieChart data={sectorDistribution} />
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-xl flex items-center">
            <BarChart4 className="h-5 w-5 mr-2" /> Monthly Profit & Loss
          </CardTitle>
          <Select defaultValue="absolute">
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="View By" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="absolute">Absolute Value</SelectItem>
              <SelectItem value="percent">Percentage</SelectItem>
            </SelectContent>
          </Select>
        </CardHeader>
        <CardContent>
          <BarChart data={monthlyPnL} title="Monthly P&L (₹)" />
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Performance Metrics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-2 border-b">
                <span className="font-medium">Total Return</span>
                <span className="text-market-up font-bold">+15.68%</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b">
                <span className="font-medium">Annual Return (CAGR)</span>
                <span className="text-market-up font-bold">+12.45%</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b">
                <span className="font-medium">Volatility</span>
                <span className="font-medium">4.32%</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b">
                <span className="font-medium">Sharpe Ratio</span>
                <span className="font-medium">1.24</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b">
                <span className="font-medium">Drawdown</span>
                <span className="text-market-down font-medium">-8.75%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium">Alpha</span>
                <span className="text-market-up font-medium">+2.34%</span>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Top Performers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-medium">RELIANCE</span>
                  <span className="text-market-up font-bold">+7.99%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-market-up h-2 rounded-full" style={{ width: '80%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-medium">TCS</span>
                  <span className="text-market-up font-bold">+4.67%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-market-up h-2 rounded-full" style={{ width: '47%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-medium">HDFCBANK</span>
                  <span className="text-market-up font-bold">+4.66%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-market-up h-2 rounded-full" style={{ width: '46%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-medium">INFY</span>
                  <span className="text-market-up font-bold">+4.04%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-market-up h-2 rounded-full" style={{ width: '40%' }}></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Analytics;
