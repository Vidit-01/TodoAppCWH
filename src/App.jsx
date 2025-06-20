import './App.css'
import { useEffect, useState } from 'react'
import Navbar from './Components/Navbar'
import {v4 as uuid} from 'uuid'


function App() {
  const [Todo, setTodo] = useState("")
  const [Todos, setTodos] = useState([])
 const [fininsh, setfininsh] = useState(false)
  useEffect(()=>{
    let todostring = localStorage.getItem("todos")
    if (todostring){
    let todos = JSON.parse(localStorage.getItem("todos"))
    setTodos(todos)
    }

  },[])

  const save = (params)=>{
    localStorage.setItem("todos",JSON.stringify(Todos))
  }
  const HandleAdd = ()=>{
    setTodos([...Todos,{id:uuid(),Todo,isComp:false}])
    setTodo("")
    console.log(Todos)
    save()
  }

  const HandleDelete = (e)=>{
    let id = e.target.name;
    let ne = Todos.filter(item=>{
      return id!=item.id
    })

      setTodos(ne)
    save()
  }

  const HandleEdit = (e)=>{
    let id = e.target.name;
    let ne = Todos.filter(item=>{
      if (item.id==id){
        setTodo(item.Todo)
      }
      return item.id!=id
    })
    setTodos(ne)
    save()
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
    save()
  }
  
  return (
    <>
    <Navbar/>
      <div className="container mx-auto my-5 rounded-xl p-5 bg-violet-100 min-h-[80vh] flex justify-items-center md:w-1/2">
        <div className="a w-full">
          <div className="addtodo">
            <h2 className="font-bold text-2xl w-1/2">Add Todo</h2>
            <input type="text" placeholder='Todo' className='bg-white p-2 m-4 rounded-xl w-3/4' value={Todo} onChange={HandleChange} onKeyDown={(e)=>{
              
              if (e.key=='Enter'){
                HandleAdd(e)
              }
            }}/>

            <button className='bg-violet-700 p-2 rounded-xl hover:bg-violet-900 text-white' onClick={HandleAdd} > Submit </button>            
          </div>
          <h2 className="font-bold text-2xl">Todo</h2>
          <input type="checkbox" name="" id="" onChange={(e)=>{setfininsh(!fininsh)}}/>Show Completed
          <div className="todos">
            {(Todos.length==0)&&<div>Nothing to show</div>
            }
          {Todos.map(item =>{           
              return (fininsh||!item.isComp)&&(<div key={item.id} className="todo flex justify-between w- rounded-xl p-2 bg" > 
              <div className="flex items-center space-x-2">
                <input name={item.id} type='checkbox' text={item.Todo} onChange={HandleCheck} checked={item.isComp}/>
              <label className={item.isComp?'m-2 line-through ':"m-2"} text={item.Todo}>{item.Todo}</label>
              </div>
              <div className="flex space-x-2">
              <button className='bg-violet-700 p-2 rounded-xl hover:bg-violet-900 text-white m-2' onClick={HandleDelete}text={item.Todo}name={item.id}>Delete</button>
              <button text={item.Todo} className='bg-violet-700 p-2 rounded-xl hover:bg-violet-900 text-white m-2' onClick={HandleEdit}name={item.id}>Edit</button>
              </div>
            </div>)
            })}

          </div>
        </div>
      </div>
    </>
  )
}

export default App
