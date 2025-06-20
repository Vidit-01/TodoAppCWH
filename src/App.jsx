import './App.css'
import { useState } from 'react'
import Navbar from './Components/Navbar'
import {v4 as uuid} from 'uuid'


function App() {
  const [Todo, setTodo] = useState("")
  const [Todos, setTodos] = useState([])
  const HandleAdd = ()=>{
    setTodos([...Todos,{id:uuid(),Todo,isComp:false}])
    setTodo("")
    console.log(Todos)
  }

  const HandleDelete = (e)=>{
    let id = e.target.id;
    Todos.filter(item=>{
      return id!=item.id
    })
  }

  const HandleEdit = ()=>{
    
  }

  const HandleChange = (e)=>{
    setTodo(e.target.value)

  }

  const HandleCheck = (e) => {
    let id = e.target.name;
    let i = Todos.findIndex(item=>{
      return item.id==id;
    })
    let newTodos = [...Todos];
    newTodos[i].isComp = !newTodos[i].isComp;
    setTodos(newTodos);
  }
  
  return (
    <>
    <Navbar/>
      <div className="container mx-auto my-5 rounded-xl p-5 bg-violet-100 min-h-[80vh]">
        <div className="a">
          <div className="addtodo">
            <h2 className="font-bold text-2xl w-1/2">Add Todo</h2>
            <input type="text" placeholder='Todo' className='bg-white p-2 m-4 rounded-xl w-1/4' value={Todo} onChange={HandleChange}/>

            <button className='bg-violet-700 p-2 rounded-xl hover:bg-violet-900 text-white' onClick={HandleAdd} > Submit </button>            
          </div>
          <h2 className="font-bold text-2xl">Todo</h2>
          <div className="todos">

          {Todos.map(item =>{           
              return <div key={item.id} className="todo">
                <input name={item.id} type='checkbox' onChange={HandleCheck}/>
              <label className={item.isComp?'m-2 line-through ':"m-2"}>{item.Todo}</label>
              <button className='bg-violet-700 p-2 rounded-xl hover:bg-violet-900 text-white m-2' onClick={HandleDelete}>Delete</button>
              <button className='bg-violet-700 p-2 rounded-xl hover:bg-violet-900 text-white m-2' onClick={HandleEdit}>Edit</button>
            </div>
            })}

          </div>
        </div>
      </div>
    </>
  )
}

export default App
