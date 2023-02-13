import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Customers } from './pages/Customers';
import { Dark, Light } from './theme/theme';
import Global from './theme/Global';
import { Layout } from './components/Layout';
import { usePersistent } from './hooks/usePersistent';

function App() {
  const { value: isDark, setValue: setIsDark } = usePersistent('DARK_MODE');

  const toggleTheme = (): void => {
    setIsDark((prev) => !prev);
  };

  return (
    <ThemeProvider theme={isDark ? Dark : Light}>
      <Global />
      <Layout isDark={isDark} toggleTheme={toggleTheme}>
        <Customers />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
