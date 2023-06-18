import { useState, useEffect } from 'react';
import './App.css';
import Todolist from './components/Todolist';
import { addTodo, deleteTodo, getallTodo, updateTodo } from './utils/Controller';

function App() {
  const [todos,setTodos] = useState([]);
  const [text,setText] = useState("");
  const [isupdate, setIsUpdate] = useState(false);
  const [todoId,setId] = useState("");
  useEffect(()=>{
    getallTodo(setTodos);
  },[])
  const updateMode = (_id,text) => {
    setIsUpdate(true);
    setText(text);
    setId(_id);
  }
  return (
    <div className="App">
      <div className="max-w-xl m-auto px-0 py-4">
        <h1 className="mt-4 text-center">Todo App</h1>
        <div className="mt-4 flex gap-4 justify-center">
          <input className="w-96 border-b-2 border-slate-900 px-0 py-2"   type="text" 
            value={text} placeholder="Add todos..." 
            onChange={(e) => setText(e.target.value)}
          />
          <button onClick={isupdate ? 
          ()=> updateTodo(todoId,text,setTodos,setText,setIsUpdate) : 
            () => addTodo(text,setText,setTodos)} 
            className="bg-black text-white w-20 px-2 py-2 rounded-xl">
            {isupdate ? "Update" : "Add"}
          </button>
        </div>
        <div className="list">
          {todos.map((todo) => {
            return (
              <Todolist 
                key={todo._id} 
                text={todo.text}
                updateMode={() => updateMode(todo._id, todo.text)}
                deleteMode={() => deleteTodo(todo._id,setTodos)}
              />
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
