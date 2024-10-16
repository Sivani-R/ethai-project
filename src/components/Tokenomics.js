
import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import './Tokenomics.css';


ChartJS.register(ArcElement, Tooltip, Legend);

const Tokenomics = () => {
 
  const data = {
    labels: ['Team', 'Marketing', 'Liquidity Pool'],
    datasets: [
      {
        label: 'Token Distribution',
        data: [35, 5, 90],  
        backgroundColor: [
          '#FF6384', 
          '#36A2EB', 
          '#FFCE56', 
        ],
        hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
        ],
        borderWidth: 1,
      },
    ],
  };

  
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
    },
  };

  return (
    <section className="tokenomics">
      <h2>Tokenomics</h2>
      <div className="tokenomics-content">
        <div className="token-chart">
          <Pie data={data} options={options} />
        </div>
        <div className="token-info">
          <table>
            <tbody>
              <tr><td>Name</td><td>EthAi</td></tr>
              <tr><td>Token Name</td><td>$EthAi</td></tr>
              <tr><td>Blockchain</td><td>Ethereum</td></tr>
              <tr><td>Total Supply</td><td>100 Million</td></tr>
              <tr><td>Team</td><td>35%</td></tr>
              <tr><td>Marketing</td><td>5%</td></tr>
              <tr><td>Liquidity Pool</td><td>90%</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;

