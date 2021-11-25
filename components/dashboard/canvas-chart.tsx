import { Line, Bar, Doughnut, Bubble } from 'react-chartjs-2';

import { Chart } from 'chart.js';
import annotationPlugin from 'chartjs-plugin-annotation';

import { ChartType } from 'lib/enums';
import ChartDataLabels from 'chartjs-plugin-datalabels';

Chart.register(annotationPlugin);
Chart.register(ChartDataLabels);

import styles from 'components/dashboard/Dashboard.module.scss';

  const CanvasChart = ({type, data, plugins, options, scales}) => {

    const config = {        
        type: type,
        data: data, 
        options: options, 
        plugins: true
    } as any;

    console.log(plugins)

    if(plugins === "false") config.plugins = false;
    if(scales) config.scales = scales;

    return (
        
        // required: proper accessibility solution e.g. tables 
        // https://www.w3.org/WAI/PF/HTML/wiki/Canvas_Accessibility_Use_Cases
        // https://pauljadam.com/demos/canvas.html

        type === ChartType.Line 
            ? <div class={styles.canvas}>
                <Line data={data} options={config} >
                    <div>Hello Fallback World</div>
                </Line></div>
            : type === ChartType.Bar
                ? <div class={styles.canvas}>
                    <Bar data={data} options={config}>
                        <div>Hello Fallback World</div>
                    </Bar></div>
                : type === ChartType.Doughnut
                    ? <div class={styles.canvas}>
                        <Doughnut data={data} options={config}>
                            <div>Hello Fallback World</div>
                        </Doughnut>
                      </div>
                    : <div class={styles.canvas}>
                        <Bubble data={data} options={config}>
                            <div>Hello Fallback World</div>
                        </Bubble>
                      </div>                
    );

  };

  export default CanvasChart;