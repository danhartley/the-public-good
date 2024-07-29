import { createContext } from 'react';
import { Mode } from 'components/shared/types';

const mode:Mode = { isDark: true, style: ``};
const toggleMode = null;

const ModeContext = createContext({mode, toggleMode});

export default ModeContext;