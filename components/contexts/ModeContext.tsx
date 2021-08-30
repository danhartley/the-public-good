import { createContext } from 'preact';

const mode = { isDark: true, style: ``};

const ModeContext = createContext({mode});

export default ModeContext;