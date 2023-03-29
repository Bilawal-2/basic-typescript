
import './App.css';
import Status from './components/Status';
import { Heading } from './components/Heading';
import Oscar from './components/Oscar';
import { Greet } from './components/Greet';
function App() {

  return (
    <div className="App">
      <Status _status='success'/>
      <Heading >Placeholder text</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicpario!</Heading>
      </Oscar>
      <Greet name ='Bilawal'  isLoggedIn={true}/>
    </div>
  );
}

export default App;
