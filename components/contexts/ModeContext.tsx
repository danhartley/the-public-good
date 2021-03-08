import { createContext } from 'preact';

const mode = { isDark: true, style: ``};
const toggleMode = () => {};

const ModeContext = createContext({mode, toggleMode});

export default ModeContext;