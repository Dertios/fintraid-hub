
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

const PortfolioSummaryCard = ({ title, value, change, changePercent, icon }) => {
  const isPositive = change >= 0;
  
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon && <div className="text-muted-foreground">{icon}</div>}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">₹{value.toLocaleString('en-IN', { maximumFractionDigits: 2 })}</div>
        <div className="flex items-center gap-1 mt-1">
          <div className={`flex items-center text-sm ${isPositive ? 'text-market-up' : 'text-market-down'}`}>
            {isPositive ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
            <span>{isPositive ? '+' : ''}{change.toLocaleString('en-IN', { maximumFractionDigits: 2 })} ({isPositive ? '+' : ''}{changePercent.toFixed(2)}%)</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PortfolioSummaryCard;
