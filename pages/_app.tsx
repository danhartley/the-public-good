
import type { AppProps } from 'next/app';
import { useLocalStorageState } from 'hooks/local-storage';

import ModeContext from 'components/contexts/ModeContext';

const MyApp = ({ Component, pageProps }: AppProps) => {

    const [darkMode, setDarkMode] = useLocalStorageState({ key: 'is-dark-mode', defaultValue: false });

    const getStyle = (_darkMode:boolean) => {        
        const _style = _darkMode 
        ? `
            --m:dark;
            --fg:207, 210, 214; 
            --bg:45, 45, 45;
            --l:87, 163, 202;
            --l-v:214, 174, 222;
            --il:255, 165, 0;
            --il-v:255, 165, 0;
            --il-fw:bold;
        ` 
        : 
        `
            --m:light;
            --fg:12, 12, 12;
            --bg:250, 250, 250;
            --bg:254 254 241;
            --l:33, 100, 144;            
            --l-v:78, 44, 146;
            --il:50, 50, 50;
            --il-fw:bold;
        ` as any;
        return _style;
    };

    const mode = { isDark: darkMode, style: getStyle(darkMode) };

    const toggleMode = () => {
        setDarkMode(!darkMode);
        mode.isDark = darkMode;
        mode.style = getStyle(darkMode) as any;
        document.getElementsByTagName('header')[0].style.backgroundColor = darkMode ? 'rgb(250, 250, 250)' : 'rgb(45, 45, 45)';
        document.body.style.backgroundColor = darkMode ? 'rgb(250, 250, 250)' : 'rgb(45, 45, 45)';
    };

    return (
        <ModeContext.Provider value={{mode, toggleMode}}>
            <Component {...pageProps} />
        </ModeContext.Provider>
    )
}

export default MyApp;

export function reportWebVitals(metric) {
    // if (metric.label === 'web-vital') {
        // console.log(metric) // The metric object ({ id, name, startTime, value, label }) is logged to the console
    // }
}

// TypeScript version
// import type { AppProps, NextWebVitalsMetric } from 'next/app'
// export function reportWebVitals(metric: NextWebVitalsMetric) {
//     console.log(metric)
// }