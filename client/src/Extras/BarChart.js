import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

function BarChart({ chartData }) {
  return (
    <div className="bar-chart">
      <div className="your-progress">Your Progress:</div>
      <Bar
        data={chartData}
        options={{
          plugins: {
            legend: {
              display: false,
            },
            // scales: {
            //   yAxes: [
            //     {
            //       scaleLabel: {
            //         display: false,
            //         labelString: 'Y text',
            //       },
            //     },
            //   ],
            //   xAxes: [
            //     {
            //       scaleLabel: {
            //         display: true,
            //         labelString: 'X text',
            //       },
            //     },
            //   ],

            //   // x: {
            //   //     type: 'time',
            //   //     time: {
            //   //       unit: 'year'
            //   //     }
            //   // }
            // },
          },
        }}
      />
    </div>
  );
}

export default BarChart;
