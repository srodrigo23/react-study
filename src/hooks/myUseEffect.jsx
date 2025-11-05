import { useEffect, useState } from "react";


const MyUseEffect = ()=>{
  const [count, setCount] = useState(0);

  useEffect(()=>{  
    setTimeout(()=>{  
      setCount((count)=>count+1)
    }, 1000)
  });

  return(
    <>
      This method counts {count}
    </>
  )
}
export default MyUseEffect;