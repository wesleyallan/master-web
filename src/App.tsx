import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { ThemeProvider } from 'styled-components';
import { Dark, Light } from './theme/theme';
import Global from './theme/Global';

function App() {
  const [isDark, setIsDark] = useState<boolean>(false);

  const toggleTheme = (): void => {
    setIsDark((prev) => !prev);
  };

  return (
    <ThemeProvider theme={isDark ? Dark : Light}>
      <Global />
      <Layout toggleTheme={toggleTheme} isDark={isDark} />
    </ThemeProvider>
  );
}

export default App;
