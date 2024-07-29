// import 'preact/devtools'
import type { AppProps } from 'next/app'
import { Mode } from 'components/shared/types'
import { useLocalStorageState } from 'hooks/local-storage'

import ModeContext from 'components/contexts/ModeContext'

import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient()

const PublicGoodApp = ({ Component, pageProps }: AppProps) => {
  const [darkMode, setDarkMode] = useLocalStorageState({ key: 'is-dark-mode', defaultValue: false })

  const getStyle = (_darkMode: boolean): string => {
    const _style: string = _darkMode
      ? `
            --m:dark;
            --fg:250, 250, 250; 
            --bg:45, 45, 45;
            --l:0, 220, 249;
            --l-v:231, 143, 255;
            --il:255, 165, 0;
            --il-v:255, 165, 0;
            --il-fw:bold;
            --table-bg-brown:204, 190, 159;
            --table-bg-blue:171, 195, 201;
            --em:255, 255, 0;
            --key:45, 45, 45; 
        `
      : `
            --m:light;
            --fg:12, 12, 12;
            --bg:250, 255, 250;
            --l:28, 83, 120;
            --l-v:78, 44, 146;
            --il:50, 50, 50;
            --il-fw:bold;
            --table-bg-brown:204, 190, 159;
            --table-bg-blue:171, 195, 201;
            --em:155, 0, 0;
            --key:45, 45, 45;
        `
    return _style
  }

  const mode: Mode = { isDark: darkMode, style: getStyle(darkMode) }

  const toggleMode = () => {
    setDarkMode(!darkMode)
    mode.isDark = darkMode
    mode.style = getStyle(darkMode) as any
    document.body.style.backgroundColor = darkMode ? 'rgb(250, 255, 250)' : 'rgb(45, 45, 45)'
  }

  return (
    <ModeContext.Provider value={{ mode, toggleMode }}>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps}></Component>
      </QueryClientProvider>
    </ModeContext.Provider>
  )
}

export default PublicGoodApp

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
