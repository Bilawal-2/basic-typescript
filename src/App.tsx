
import './App.css';
import { UserContextProvider } from './components/state/context/UserContext';
import { User } from './components/state/User';


function App() {

  return (
    <div className="App">

      <UserContextProvider>
        <User/>
      </UserContextProvider>

    </div>
  );
}

export default App;
