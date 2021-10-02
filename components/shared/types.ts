import { Dispatch, SetStateAction } from 'react';

export type Page = {
    title?: string,
    bytes?: number,
}

export type Metrics = {
    page?: Page,
    pages?: Array<Page>, 
    cumulativeBytes?: number,
}

export type MetricsContextState = {
    state: Metrics,
    setState: Dispatch<SetStateAction<Metrics>>
}