import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import ClicksCounter from './components/clicksCounter'
import FatherComponent from './components/fatherComponent'
import SiblinComponent from './components/siblinCompoent'
import Todolist from './components/todolist/todolist'
import UseMemoComponet from './components/efficientComponents/useMemoComponet'
import UseCallbackComponent from './components/efficientComponents/useCallbackComponent'
import FetchData from './hooks/fetchData'
import MyUseEffect from './hooks/myUseEffect'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* <Todolist />
      
      <ClicksCounter/>

      <FatherComponent>
        <SiblinComponent/>
      </FatherComponent>

      <UseMemoComponet/>

      <UseCallbackComponent/> */}
      
      <FetchData/>

      {/* <MyUseEffect /> */}
    </>
  );
}

export default App
