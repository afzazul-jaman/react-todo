 
import { useState } from 'react';
import './App.css';
 function App() {
  const [input , setInput] = useState("");
  const [todos , setTodos] = useState([]);
 

  const getValues=()=>{
     if(input.trim()==="") return alert("NO DATA YET");
      if (!input.trim() || todos.some(t => t.value.toLowerCase() === input.trim().toLowerCase())) return alert(!input.trim() ? "NO DATA YET" : "SAME DATA NOT ALLOWED");
       const newTodo = {id: Date.now() , value: input , completed: false}
         setTodos([...todos , newTodo]) 
         setInput('')         
  }

  const deleteBtn=(id)=>{
       const data = todos.filter(todo => todo.id !== id);
        setTodos(data)
  }

 const clearAllData = () => {
  const confirmClear = window.confirm("Are you sure?");
  if (confirmClear) {
    setTodos([]);
  }
};
  return (
    <div className="todo-container">
    <div className="todo-header">
        <h2>My Todo List</h2>
    </div>

    <div className="todo-input">
        <input type="text" placeholder="Add a new task..." onChange={(e)=> setInput(e.target.value)} value={input} 
          onKeyDown={(e)=>{
             if (e.key === "Enter") {
            getValues();
          }
          }}
        />
        <button onClick={getValues}>Add</button>
        <button onClick={clearAllData}>All Clear</button>
    </div>
  
   <ul className="todo-list">
  {todos.map((todo) => (
    <li className="todo-item" key={todo.id}>
      <span>{todo.value}</span>
      <button className="delete-btn" onClick={()=> deleteBtn(todo.id)}>X</button>
    </li>
  ))}
</ul>
</div>
  );
}

export default App;
