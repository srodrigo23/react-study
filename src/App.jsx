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

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ClicksCounter/>

      <FatherComponent>
        <SiblinComponent/>
      </FatherComponent>
      <Todolist/>

      <UseMemoComponet/>
      <UseCallbackComponent/>
    </>
  )
}

export default App
