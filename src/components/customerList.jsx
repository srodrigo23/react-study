
import { useState } from "react";

function CustomerList() {

  const [name, setName] = useState('')
  const [list, setList] = useState(['sergio', 'fernando', 'carla'])

  const onclickButtonAddCustomer = ()=>{
    if(name !== ''){  
      setList([...list, name]);
      setName('')
    }
  }

  const handleChangeInput = (text) => {
    setName(text);
  };

  return (
    <div className="mt-75 layout-column justify-content-center align-items-center">
      <section className="layout-row align-items-center justify-content-center">
        <input type="text" className="large" placeholder="Name" value={name} data-testid="app-input" onChange={(event) =>handleChangeInput(event.target.value)}/>
        <button 
          type="submit" 
          className="ml-30" 
          data-testid="submit-button"
          onClick = {()=>onclickButtonAddCustomer()}
        >Add Customer</button>

        <button onClick={()=>{setList([])}}>
          Reset
        </button>

      </section>

      <ul className="styled mt-50" data-testid="customer-list">
        {
          list.map((el, id)=>(
            <li
              className="slide-up-fade-in" 
              data-testid="list-item1" key="list-item1" >{el}</li>  
          ))
        }
      </ul>
    </div>
  );
}

export default CustomerList