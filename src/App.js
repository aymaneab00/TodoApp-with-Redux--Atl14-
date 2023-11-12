import './App.css';
import AddTache from './Components/AddTache';
import ListeTask from './Components/ListeTask';
import StatTodo from './Components/StatTodo';

function App() {
  return (
    <div className="App">
      <AddTache/>
   <ListeTask/>
   <StatTodo/>
    </div>
  );
}

export default App;
