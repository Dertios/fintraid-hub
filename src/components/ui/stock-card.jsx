
import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const StockCard = ({ stock }) => {
  const isPositive = stock.changePercent > 0;
  
  return (
    <Card className="hover:shadow-md transition-all">
      <CardContent className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-bold text-lg">{stock.symbol}</h3>
            <p className="text-muted-foreground text-sm">{stock.name}</p>
          </div>
          <div className={`text-right ${isPositive ? 'text-market-up' : 'text-market-down'}`}>
            <p className="font-bold text-lg">₹{stock.price.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</p>
            <div className="flex items-center justify-end gap-1">
              {isPositive ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
              <span className="text-sm font-medium">
                {isPositive ? '+' : ''}{stock.changePercent.toFixed(2)}%
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StockCard;
