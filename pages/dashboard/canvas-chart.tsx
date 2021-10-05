import { Line, Bar } from 'react-chartjs-2';
import * as ChartAnnotation from 'chartjs-plugin-annotation';

import { Chart } from 'chart.js';
import annotationPlugin from 'chartjs-plugin-annotation';

import { ChartType } from 'pages/dashboard/enums';

Chart.register(annotationPlugin);

import { useRef } from 'preact/hooks';

import styles from 'pages/dashboard/Dashboard.module.scss';

  const CanvasChart = ({type, data, plugins, options, scales}) => {

    Chart.defaults.font.size = 12;

    const canvas = useRef<HTMLCanvasElement>(null);

    const config = {        
        type: type,
        data: data, 
        options: options,                    
    } as any;

    if(plugins) config.plugins = plugins;
    if(scales) config.scales = scales;

    console.log(config);
    
    return (
        
        type === ChartType.Line 
            ? <div class={styles.canvas}><Line ref={canvas} data={data} options={config} /></div>
            : <div class={styles.canvas}><Bar ref={canvas} data={data} options={config} /></div>

        // <div class={styles.canvas}><Line ref={canvas} data={data} options={config} plugins={[ChartAnnotation]} /></div>
    );

  };

  export default CanvasChart;