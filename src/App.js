
import './App.css';
import userData from './userData';
import Card from './Card';
function createCard(user){
  return <Card key ={user.name}
   name={user.name}
   designation ={user.designation}
   description={user.description}
   image ={user.image}/>
}

function App() {
  return (
    <div className="App">
      
     {userData.map(createCard)};
     
      
    </div>
  );
};

export default App;
