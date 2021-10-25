import { Line, Bar, Doughnut, Bubble } from 'react-chartjs-2';

import { Chart } from 'chart.js';
import annotationPlugin from 'chartjs-plugin-annotation';

import { ChartType } from 'lib/enums';
import ChartDataLabels from 'chartjs-plugin-datalabels';

Chart.register(annotationPlugin);
Chart.register(ChartDataLabels);

// import { useRef } from 'preact/hooks';

import styles from 'pages/dashboard/Dashboard.module.scss';

  const CanvasChart = ({type, data, plugins, options, scales}) => {

    // Chart.defaults.font.size = 12;   

    // const canvas = useRef<HTMLCanvasElement>(null);

    const config = {        
        type: type,
        data: data, 
        options: options,                    
    } as any;

    if(plugins) config.plugins = plugins;
    if(scales) config.scales = scales;

    return (
        
        type === ChartType.Line 
            ? <div class={styles.canvas}><Line data={data} options={config} /></div>
            : type === ChartType.Bar
                ? <div class={styles.canvas}><Bar data={data} options={config} /></div>
                : type === ChartType.Doughnut
                    ? <div class={styles.canvas}>
                        <Doughnut data={data} options={config}>
                        <p>Hello Fallback World</p>
                        </Doughnut>
                      </div>
                    : <div class={styles.canvas}>
                        <Bubble data={data} options={config}>
                            <p>Hello Fallback World</p>
                        </Bubble>
                      </div>                
    );

  };

  export default CanvasChart;