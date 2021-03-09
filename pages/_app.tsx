
import type { AppProps } from 'next/app';
import { useLocalStorageState } from 'hooks/local-storage';

import ModeContext from 'components/contexts/ModeContext';

const MyApp = ({ Component, pageProps }: AppProps) => {

    const [darkMode, setDarkMode] = useLocalStorageState({ key: 'is-dark-mode', defaultValue: true });

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
            --d: 220 156 151;
        ` 
        : 
        `
            --m:light;
            --fg:25, 25, 25; 
            --bg:250, 250, 250;
            --l:50, 50, 50;
            --l-v:75, 75, 75;
            --il:50, 50, 50;
            --il-fw:bold;
            --d: 0,0,0;
        ` as any;
        return _style;
    };

    const mode = { isDark: darkMode, style: getStyle(darkMode) };

    const toggleMode = () => {
        setDarkMode(!darkMode);
        mode.isDark = darkMode;
        mode.style = getStyle(darkMode) as any;
    };

    return (
        <ModeContext.Provider value={{mode, toggleMode}}>
            <Component {...pageProps} />
        </ModeContext.Provider>
    )
}

export default MyApp;