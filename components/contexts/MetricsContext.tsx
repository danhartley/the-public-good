import { useContext, useState } from 'react';
import { createContext } from 'react';
import { MetricsContextState, Metrics } from 'components/shared/types';

const MetricsContext = createContext({} as MetricsContextState);

const MetricsContextProvider = ({children}) => {

    const [state, setState] = useState({ page: { title: '', bytes: 0 }, cumulativeBytes: 0 } as Metrics);
    
    return (<MetricsContext.Provider value={{state, setState}}>{children}</MetricsContext.Provider>)
};

const useGlobalState = context => {

    const value = useContext(context);
    if (value === null) throw new Error(`Missing context, ${context}`);
    
    return value;
};

const AppContext = createContext(null);

export function AppWrapper({ children }) {
  
    const sharedState = null;

    return (
        <AppContext.Provider value={sharedState}>
        {children}
        </AppContext.Provider>
    );
}

const useAppContext = () => {
  return useContext(AppContext);
}

// export { MetricsContext, MetricsContextProvider, useGlobalState, useAppContext };