import React from 'react';
import ReactApexChart from 'react-apexcharts';


const Sales = () => {
    const [state, setState] = React.useState({
      
        series: [{
          name: "Official Receipt",
          data: [31, 40, 28, 51]
        }, {
          name: "Calendar",
          data: [11, 32, 45, 32]
        }, {
            name:"Yearbook",
            data:[120, 45, 55, 21]
        }, {
            name:"Book",
            data:[43, 55, 32, 21]
        }, {
            name:"Mug",
            data:[65, 33, 32, 54]
        }],
        options: {
          chart: {
            height: 300,
            type: 'area'
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'smooth'
          },
          xaxis: {
            type: 'month',
            categories: [
                'Jan',
                'Feb',
                'Mar',
                'Apr'
            ]
          },
          tooltip: {
            x: {
              format: 'dd/MM/yy HH:mm'
            },
          },
        },
      
      
    });

    

    return (
      <div>
        <div id="chart">
            <ReactApexChart options={state.options} series={state.series} type="area" height={300} />
          </div>
        <div id="html-dist"></div>
      </div>
    );
  }

export default Sales;