import { createContext } from 'preact';

const mode = { isDark: true, style: ``};
const toggleMode = null;

const ModeContext = createContext({mode, toggleMode});

export default ModeContext;