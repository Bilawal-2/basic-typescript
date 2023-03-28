
import './App.css';
import { Greet } from './components/Greet';
import Person from './components/Person';
import PersonList from './components/PersonList';

function App() {
  const personName = {
    first:'Bruce',
    last:'Wayne'
  }

const nameList =[
  {
    first:'Bruce',
    last:'Wayne',
  },
  {
    first:'Micheal',
    last:'Jackson',
  },
  {
    first:'Mickey',
    last:'Mouse',
  },
  {
    first:'Chop',
    last:'Chop',
  },
]

  return (
    <div className="App">
     <Greet name='Bilawal' messageCount={20} isLoggedIn={true}/>
     <Person name = {personName}/>
     <PersonList namelist= {nameList}/>
    </div>
  );
}

export default App;
