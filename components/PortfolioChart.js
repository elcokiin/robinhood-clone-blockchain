import React from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const data = {
    labels: [
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
        "Jan",
        // "Feb",
        // "Mar"
    ],
    datasets: [
        {
            fill: false,
            lineTension: 0.01,
            backgroundColor: '#38E148',
            borderColor: '#38E148',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: '#38E148',
            pointBackgroundColor: '#38E148',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: '#38E148',
            pointHoverBorderColor: '#38E148',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [ 40, 20, 30, 10, 30, 10, 20, 30, 10, 20, 30, 10 ],
        }
    ]
}

const options = {
    plugins: {
        legend: {
            display: false,
        }
    }
}

const PortfolioChart = () => {
    return <Line data={data} options={options} width={400} height={150}/>
}

export default PortfolioChart;