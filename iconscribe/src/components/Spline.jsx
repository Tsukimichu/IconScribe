import React from 'react';
import ReactApexChart from 'react-apexcharts';

const ApexChart = () => {
  const [state, setState] = React.useState({
    series: [
      {
        name: 'Jan',
        data: [31, 40, 28, 51, 42],
      },
      {
        name: 'Feb',
        data: [11, 32, 45, 32, 34],
      },
      {
        name: 'Mar',
        data:[42, 11, 22, 44, 12],
      },
      {
        name: 'Apr',
        data:[33, 45, 12, 32, 43],
      },
    ],
    options: {
      chart: {
        height: 300,
        type: 'area',
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
      },
      xaxis: {
        type: 'product',
        categories: [
          "Official Receipt",
          "Calendar",
          "Yearbook",
          "Book",
          "Mug",
        ],
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm',
        },
      },
    },
  });

  return (
    <div id="chart">
      <ReactApexChart options={state.options} series={state.series} type="area" height={300} />
    </div>
  );
};

export default ApexChart;
