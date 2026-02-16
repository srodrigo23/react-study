import React  from "react";
import { useState } from "react";
import "./index.css";

function CustomerList() {
  const customers = []
  const [name, setName] = useState('')
  const [list, setList] = useState(customers)

  const onclickButtonAddCustomer = ()=>{
    const newCurtomerList = customers.push(name);
    setList(newCurtomerList);
  }

  const changeInput =(event)=>{
    setName(event.target.value)
  }
  return (
    <div className="mt-75 layout-column justify-content-center align-items-center">
      <section className="layout-row align-items-center justify-content-center">
        <input type="text" className="large" placeholder="Name" data-testid="app-input" onChange={changeInput}/>
        <button type="submit" className="ml-30" data-testid="submit-button"
        onclickButtonAddCustomer = {onclickButtonAddCustomer}
        >Add Customer</button>
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