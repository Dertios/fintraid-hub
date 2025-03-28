
import React, { useEffect, useRef } from 'react';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

Chart.register(ArcElement, Tooltip, Legend);

const PieChart = ({ data, title }) => {
  const chartRef = useRef();

  useEffect(() => {
    // If needed, we could add more dynamic effects here
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  const chartData = {
    labels: data.map(item => item.label),
    datasets: [
      {
        data: data.map(item => item.value),
        backgroundColor: [
          'rgba(14, 165, 233, 0.7)',   // Primary blue
          'rgba(139, 92, 246, 0.7)',   // Accent purple
          'rgba(16, 185, 129, 0.7)',   // Green
          'rgba(239, 68, 68, 0.7)',    // Red
          'rgba(245, 158, 11, 0.7)',   // Amber
          'rgba(59, 130, 246, 0.7)',   // Blue
          'rgba(107, 114, 128, 0.7)',  // Gray
        ],
        borderColor: [
          'rgba(14, 165, 233, 1)',
          'rgba(139, 92, 246, 1)',
          'rgba(16, 185, 129, 1)',
          'rgba(239, 68, 68, 1)',
          'rgba(245, 158, 11, 1)',
          'rgba(59, 130, 246, 1)',
          'rgba(107, 114, 128, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right',
        labels: {
          padding: 20,
          boxWidth: 10,
          usePointStyle: true,
        },
      },
      title: {
        display: !!title,
        text: title || '',
        font: {
          size: 16,
        },
        padding: {
          top: 10,
          bottom: 20
        }
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            const label = context.label || '';
            const value = context.raw || 0;
            const total = context.dataset.data.reduce((a, b) => a + b, 0);
            const percentage = Math.round((value / total) * 100);
            return `${label}: ₹${value.toLocaleString('en-IN')} (${percentage}%)`;
          }
        }
      }
    },
    cutout: '30%',
  };

  return (
    <div className="chart-container">
      <Pie ref={chartRef} data={chartData} options={options} />
    </div>
  );
};

export default PieChart;
