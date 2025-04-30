import React from 'react';
import ReactApexChart from 'react-apexcharts';

const Reports = () => {
  const [state, setState] = React.useState({
    
      series: [44, 55, 13, 43, 22],
      options: {
        chart: {
          width: 480,
          type: 'pie',
        },
        labels: ['Official Receipt', 'Calendar', 'Yearbook', 'Book', 'Mug'],
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 300
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      },
    
    
  });

  

  return (
    <div>
      <div id="chart">
          <ReactApexChart options={state.options} series={state.series} type="pie" width={380} />
        </div>
      <div id="html-dist"></div>
    </div>
  );
}

export default Reports;