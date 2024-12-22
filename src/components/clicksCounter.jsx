import { useState } from "react";

const ClicksCounter = ()=>{

  const [counter, setCounter] = useState(0);
  console.log('rerendered')

  const contador = ()=>{
    setCounter(counter+1)
  }

  const decrementar=()=>{
    setCounter(counter -1)
  }

  return(
    <>
      <h1>Contador de clicks</h1>
      <h4>{counter}</h4>

      <button onClick={contador}>Nos fuimos</button>
      <button onClick={decrementar}>Decrementar</button>
    </>
  )
}

export default ClicksCounter;