import './App.css';
import Todolist from './components/Todolist';

function App() {
  return (
    <div className="App">
      <div className="max-w-xl m-auto px-0 py-4">
        <h1 className="mt-4 text-center">Todo App</h1>
        <div className="mt-4 flex gap-4 justify-center">
          <input className="w-96 border-b-2 border-slate-900 px-0 py-2" type="text" name="" placeholder="Add todos..." />
          <button type="submit" className="bg-black text-white w-20 px-2 py-2 rounded-xl">Add</button>
        </div>
        <div className="list">
          <Todolist
            text="hi"
          />
          <Todolist
            text="hello"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
