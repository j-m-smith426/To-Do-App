import "./App.scss"
import AppTitle from "./components/AppTitle/AppTitle";
import NewItem from "./components/NewItem/NewItem";
import ToDoList from "./components/ToDoList/ToDoList";



function App() {
  

  return (
    

    <div className="App">
      <div>

        <AppTitle />
        <ToDoList />
      </div>
      <NewItem />
    </div>
    
  );
}

export default App;
