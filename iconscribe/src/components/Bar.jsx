import React from 'react';
import ReactApexChart from 'react-apexcharts';

const Expenses = () => {
    const [state, setState] = React.useState({
      
        series: [{
          name: 'Paper',
          data: [89.92, 91.5, 88.34, 88.8]
        }, {
          name: 'Ink',
          data: [78.3, 48.6, 63.44, 77.59]
        }, {
          name: 'Gas',
          data: [35, 41, 36, 26]
        }, {
          name: 'Salary',
          data: [87.5, 88.24, 79.42, 65.39]
        }, {
          name: 'Misc.',
          data: [33.39, 26.66, 28.31, 34.2]
        }],
        options: {
          chart: {
            type: 'bar',
            height: 350
          },
          plotOptions: {
            bar: {
              horizontal: false,
              columnWidth: '55%',
              borderRadius: 5,
              borderRadiusApplication: 'end'
            },
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
          },
          xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr',],
          },
          yaxis: {
            title: {
              text: '$ (thousands)'
            }
          },
          fill: {
            opacity: 1
          },
          tooltip: {
            y: {
              formatter: function (val) {
                return "$ " + val + " thousands"
              }
            }
          }
        },
      
      
    });

    

    return (
      <div>
        <div id="chart">
            <ReactApexChart options={state.options} series={state.series} type="bar" height={300} />
          </div>
        <div id="html-dist"></div>
      </div>
    );
  }

export default Expenses;