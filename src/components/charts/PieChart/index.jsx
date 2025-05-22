import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

// Registrar componentes y plugins
ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const PieChart = ({ dataActual, labels }) => {
  const data = {
    labels,
    datasets: [
      {
        label: 'Periodo Actual',
        data: dataActual,
        backgroundColor: [
          '#E74C3C',
          '#F1C40F',
          '#2E86C1',
          '#8E44AD',
          '#1ABC9C',
        ],
        borderColor: '#fff',
        borderWidth: 2,
        spacing: 10, // separa los segmentos (solo Chart.js v4)
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          font: {
            family: 'Inter',
            size: 12,
            weight: '300',
          },
          color: '#000',
        },
      },
      title: {
        display: false,
      },
      datalabels: {
        formatter: (value, context) => {
          const total = context.chart.data.datasets[0].data.reduce((a, b) => a + b, 0);
          const percentage = ((value / total) * 100).toFixed(0) + '%';
          return percentage;
        },
        color: '#fff',
        font: {
          weight: 'bold',
          size: 16,
        },
      },
    },
  };

  return <Pie data={data} options={options} plugins={[ChartDataLabels]} />;
};

export default PieChart;
