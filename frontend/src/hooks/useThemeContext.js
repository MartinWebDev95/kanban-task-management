import { useContext } from 'react';
import { themeContext } from '../context/ThemeContext';

const useThemeContext = () => {
  const context = useContext(themeContext);

  return context;
};

export default useThemeContext;
