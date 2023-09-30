 import './App.css'
import TodoContextProvider from './components/Context/TodoContextProvider'
import Todo from './components/Todo'
 

function App() {
   

  return (
    <>
       <TodoContextProvider>
        <Todo/>
       </TodoContextProvider>
    </>
  )
}

export default App
