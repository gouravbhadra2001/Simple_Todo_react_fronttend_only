import { useState } from 'react';
import './App.css';
import Add from "./Components/Add"
import List from './Components/List';

var count = 0

function App() {



  const [todoTitle, setTodoTitle] = useState("");
  const [todoDescription, setTodoDescription] = useState("");
  const [isRotated, setIsRotated] = useState(false); // State to track rotation

  const [todoTitles, setTodoTitles] = useState([]);
  const [todoDescriptions, setTodoDescriptions] = useState([]);

  const addTodo = () => {
    count = count + 1
    if (todoTitle !== "") {
      setTodoTitles([...todoTitles, todoTitle]);
      setTodoTitle("");
    }
    if (todoDescription !== "") {
      setTodoDescriptions([...todoDescriptions, todoDescription]);
      setTodoDescription("");
    }
  };

  const deleteTodo = (title, description) => {
    const newTodoTitles = todoTitles.filter((todoTitle) => todoTitle !== title);
    const newTodoDescriptions = todoDescriptions.filter(
      (todoDescription) => todoDescription !== description
    );
    setTodoTitles(newTodoTitles);
    setTodoDescriptions(newTodoDescriptions);
  };

  const handleButtonClick = () => {
    setIsRotated(!isRotated); // Toggle rotation state
  
    
  };
  

  return (
    <>
   <div className='fixed-top bg-info mx-5 mx-md-5 mx-sm-0 mx-xs-0 mt-2 rounded-5 shadow '>
   <nav className='navbar navbar-default justify-content-center'>
  <h1 className='header-font'>
    Simple Todo List
  </h1>
</nav>

   </div> 
      
      <div style={{ minHeight: '120px' }} className='pt-5'>
        <div className="collapse collapse-horizontal pt-5" id="collapseWidthExample">
          <div className="card card-body bg-transparent border-0 z-1000">
            <Add
              todoTitle={todoTitle}
              setTodoTitle={setTodoTitle}
              todoDescription={todoDescription}
              setTodoDescription={setTodoDescription}
              addTodo={addTodo}
            />
          </div>
        </div>
      </div>
      
      <List
        listNames={todoTitles}
        listDescriptions={todoDescriptions}
        remove={deleteTodo}
      />

      <div className="fixed-bottom d-flex justify-content-end mb-3 me-3">
        <button
          className={`btn custom-bg-card fab shadow rounded-5 btn-lg border ${isRotated ? "rotate-45" : "rotate-90"}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseWidthExample"
          aria-expanded="true"
          aria-controls="collapseWidthExample"
          onClick={handleButtonClick}
          title="Toggle Open/Close 'Add Item' Window"
        >
        <h1>
          +
        </h1>
        </button>
      </div>
    </>
  );
}

export default App;
