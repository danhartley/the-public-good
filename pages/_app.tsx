import "preact/devtools";
import { useEffect } from 'preact/hooks';
import { getCLS, getFCP, getFID, getLCP, getTTFB } from 'web-vitals';
import type { AppProps } from 'next/app';
import { Mode } from 'components/shared/types';
import { useLocalStorageState } from 'hooks/local-storage';

import ModeContext from 'components/contexts/ModeContext';

const PublicGoodApp = ({ Component, pageProps }: AppProps) => {

    const [darkMode, setDarkMode] = useLocalStorageState({ key: 'is-dark-mode', defaultValue: false });

    const getStyle = (_darkMode:boolean): string => {        
        const _style:string = _darkMode 
        ? `
            --m:dark;
            --fg:250, 250, 250; 
            --bg:45, 45, 45;
            --l:0, 220, 249;
            --l-v:231, 143, 255;
            --il:255, 165, 0;
            --il-v:255, 165, 0;
            --il-fw:bold;
            --h1:218, 217, 205;
            --em:255, 255, 0;
            --key:45, 45, 45; 
        ` 
        : 
        `
            --m:light;
            --fg:12, 12, 12;
            --bg:255 255 255;
            --l:33, 100, 144;
            --l-v:78, 44, 146;
            --il:50, 50, 50;
            --il-fw:bold;
            --h1:218, 217, 205;
            --em:155, 0, 0;
            --key:45, 45, 45;
        `;
        return _style;
    };

    const mode:Mode = { isDark: darkMode, style: getStyle(darkMode) };

    const toggleMode = () => {
        setDarkMode(!darkMode);
        mode.isDark = darkMode;
        mode.style = getStyle(darkMode) as any;
        document.body.style.backgroundColor = darkMode ? 'rgb(255 255 255)' : 'rgb(45, 45, 45)';
    };

    useEffect(() => {
        // getCLS(console.log);
        // getFCP(console.log);
        // getFID(console.log);
        // getLCP(console.log);
        // getTTFB(console.log);
    });

    return (
        <ModeContext.Provider value={{mode, toggleMode}} children={null}>
            <Component {...pageProps}></Component>
        </ModeContext.Provider>
        
    )
}

export default PublicGoodApp;

export function reportWebVitals(metric) {
    if (metric.label === 'web-vital') {
        // console.log(metric) // The metric object ({ id, name, startTime, value, label }) is logged to the console
    }
    if (metric.label === 'custom') {
        // console.log(metric) // The metric object ({ id, name, startTime, value, label }) is logged to the console
    }
}

// TypeScript version
// import type { AppProps, NextWebVitalsMetric } from 'next/app'
// export function reportWebVitals(metric: NextWebVitalsMetric) {
//     console.log(metric)
// }