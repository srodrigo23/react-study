
import { useState } from "react";
import { memo } from "react";

const listTodos = ['sergio', 'rodrigo', 'cardenas']

const Todolist = () =>{
  
  const [list, setList] = useState(listTodos);
  const [name, setName] = useState('');
  console.log('rerendered')

  const manageChange = (event)=>{
    // event.preventDefault();
    // console.log(event.target.value)
    setName(event.target.value)
  }

  const clickButton=(event)=>{
    if(name.trim() !== ""){
      list.push(name);
      setName('')
    }
  }  

  return (
    <>
      <h1>Todo list</h1>
      <input type="text" onChange={manageChange} value={name} placeholder="Enter task description"/>
      
      <button onClick={clickButton}>Agregar tarea</button>
      <ul> 
        {list.map((el, index)=>(
          <li key={index}>{el}</li>
        ))}  
      </ul>
      
    </>)
}
export default Todolist;
