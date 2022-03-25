import { ChartType } from 'lib/enums';

export type Coordinates = {
    x?: {   
            type: string,
            min: number,
            max: number,
            ticks?: {                                
                stepSize: number
            },
            title: { 
                    display: boolean,
                    text: string,
                    padding: { top: number }
                },
            offset?: boolean
        },
    y?: { 
            ticks: { padding: number }
        } 
};

export type ChartProps = {
    labels?: Array<string>,
    label?: string, 
    datasets?: Array<{
        indexAxis: string,
        label: string, 
        backgroundColor: Array<string>,
        borderColor?: string,
        data?: Array<number>,
        plugins?: { 
            legend: { 
                position: string
            }
        },
        barPercentage?: number
    }>,
};

export type PluginProps = { 
    autocolors: boolean,
    annotation: { 
        annotations: { 
            median: { 
                type: ChartType, indexAxis: string, xMin: number, xMax: number, yMin: number, yMax: number, borderColor: string, borderWidth: number
            }
        }
    }
};