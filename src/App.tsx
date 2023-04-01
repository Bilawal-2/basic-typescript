
import './App.css';
import Box from './components/state/context/Box';
import { ThemeContextProvider } from './components/state/context/ThemeContext';

function App() {

  return (
    <div className="App">

      <ThemeContextProvider>
        <Box/>
      </ThemeContextProvider>

     </div>
  );
}

export default App;
