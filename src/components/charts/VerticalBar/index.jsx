import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Registrar los componentes de Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const VerticalBarChart = ({ dataActual, dataAnterior, labels }) => {
  const data = {
    labels, // Etiquetas (nombres de oficinas)
    datasets: [
      {
        label: 'Periodo Actual',
        data: dataActual, // Datos del periodo actual
        backgroundColor: '#0556BF', // Azul
        borderColor: 'rgba(0, 123, 255, 1)',
        borderWidth: 1,
      },
      {
        label: 'Periodo Anterior',
        data: dataAnterior, // Datos del periodo anterior
        backgroundColor: '#00A370', // Verde
        borderColor: 'rgba(40, 167, 69, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        align: 'end',
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
    },
    scales: {
      x: {
        grid: {
            display: false,
        },
        title: {
          display: false,
        },
      },
      y: {
        grid: {
            display: true,
        },
        title: {
          display: false,
        },
        beginAtZero: true,
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default VerticalBarChart;