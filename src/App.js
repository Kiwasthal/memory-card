import GameController from './components/Controller';
import { ThemeProvider } from 'styled-components';

const theme = {
  main: 'red',
  secondary: 'blue',
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GameController />
    </ThemeProvider>
  );
}

export default App;
