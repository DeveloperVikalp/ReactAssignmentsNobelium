
import './App.css';
import Counter from './day5/Counter'

import Clock from './day1to4/Clock';
import ToDo from './day5/ToDo';
import Toggle from './day5/Toggle';

function App() {
  return (
    <div className="App">
      
     <ToDo/>
     <Counter/>
     
     <Toggle/>
     <Clock/>
     
      
    </div>
  );
};

export default App;
