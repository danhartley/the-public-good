import { useEffect, useState } from 'preact/hooks';

import CanvasChart from 'pages/dashboard/canvas-chart';

import { ChartType } from 'lib/enums';

const PieChart = () => {

    const components = [
        {
            component: 'Devices',
            percentage: 34
        },
        {
            component: 'Networks',
            percentage: 21
        },
        {
            component: 'Data centres',
            percentage: 29
        },
        {
            component: 'Manufacturing',
            percentage: 16
        },
    ];

    const [data, setData] = useState(null);
    const [type, setType] = useState(ChartType.Doughnut);
    const [options, setOptions] = useState({maintainAspectRatio: true });

    useEffect(() => {

        setData({
            labels:  [
                'Red',
                'Blue',
                'Yellow',
                'Green'
            ],
            options: {
                responsive: true,                
                plugins: {
                        legend: {
                        position: 'top',
                        },
                        title: {
                        display: true,
                        text: 'Chart.js Doughnut Chart'
                        }
                    },
                },
                datasets: [{
                    label: ' something ',
                    radius: '50%',
                    data: components.map(d => d.percentage),
                    backgroundColor: [
                        'rgb(255, 99, 132)',
                        'rgb(54, 162, 235)',
                        'rgb(255, 205, 86)',
                        'rgb(255, 99, 132)'
                    ],
                    hoverOffset: 4,                
                }]
        });

    }, []);

    return (
        <>
        { data === null 
            ? <div>No do!</div>
            : <CanvasChart type={type} data={data} plugins={null} options={options} scales={null} /> 
        }
        </>
    )

};

export default PieChart;