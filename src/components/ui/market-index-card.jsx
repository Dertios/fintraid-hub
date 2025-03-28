
import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const MarketIndexCard = ({ index }) => {
  const isPositive = index.changePercent > 0;
  
  return (
    <Card className="hover:shadow-md transition-all">
      <CardContent className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-bold text-md md:text-lg">{index.name}</h3>
          </div>
          <div className={`text-right ${isPositive ? 'text-market-up' : 'text-market-down'}`}>
            <p className="font-bold text-md md:text-lg">{index.value.toLocaleString('en-IN', { maximumFractionDigits: 2 })}</p>
            <div className="flex items-center justify-end gap-1">
              {isPositive ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
              <span className="text-sm font-medium">
                {isPositive ? '+' : ''}{index.changePercent.toFixed(2)}%
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MarketIndexCard;
