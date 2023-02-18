import React from 'react';
import { usePersistent } from './hooks/usePersistent';
import { Layout } from './components/Layout';
import { ThemeProvider } from 'styled-components';
import { Dark, Light } from './theme/theme';
import Global from './theme/Global';

function App() {
  const { value: isDark, setValue: setIsDark } = usePersistent('DARK_MODE');

  const toggleTheme = (): void => {
    setIsDark((prev) => !prev);
  };

  return (
    <ThemeProvider theme={isDark ? Dark : Light}>
      <Global />
      <Layout toggleTheme={toggleTheme} isDark={isDark}>
        <h1>Teste</h1>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
