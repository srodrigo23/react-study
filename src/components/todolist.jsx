
import {useState} from "react";

/**
 * 
 * Component for add tasks
 */
const Todolist = () =>{

  const todos = [
    {
      id: 1,
      description: 'Editar campos de tabla cliente',
      closed: false,
    },
    {
      id: 2,
      description: 'Eliminar registros de prueba en base de datos',
      closed: false,
    },
    {
      id: 3,
      description: 'Habilitar disparadores en base de datos',
      closed: false,
    },
  ];


  const [listTodos, setListTodos] = useState(todos);
  
  const [taskDescription, setTaskDescription] = useState('');
  const [taskToSearch, setTaskToSearch] = useState('');
  
  const handleSearchField = (textToSearch)=>{
    setTaskToSearch(textToSearch)
    const filtered = todos.filter((el) =>
      el.description.toLowerCase().includes(textToSearch.toLowerCase()),
    );
    setListTodos(filtered);
  }

  const handleDeleteTask = (id)=>{
    setListTodos([...listTodos.filter((el)=>id!==el.id)])
  }

  const handleAddTask = ()=>{
    if(taskDescription!==''){
      setListTodos([
        ...todos,
        {
          id: todos.length,
          description: taskDescription,
          closed: false,
        },
      ]);
    }
  }

  return (
    <>
      <h1>Todo list</h1>
      <div>
        <input
          type='text'
          onChange={(event) => handleSearchField(event.target.value)}
          value={taskToSearch}
          placeholder='Buscar'
        />

        <div>
          <input
            type='text'
            onChange={(event) => {
              setTaskDescription(event.target.value);
            }}
            value={taskDescription}
            placeholder='Enter task description'
          />
          <button onClick={handleAddTask} disabled={taskDescription === ''}>
            Agregar tarea
          </button>
        </div>
      </div>

      <ul>
        {listTodos.map((el, index) => (
          <li key={index} className='task-style'>
            <div>{el.description}</div>
            <button onClick={()=>handleDeleteTask(el.id)}>Terminar</button>
          </li>
        ))}
      </ul>
    </>
  );
}
export default Todolist;
