import React, { useEffect,useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useUserAuth} from '../../context/UserAuthContext'
import {addData, editData , deleteData} from '../../Redux/action'

function Home() {
  const [todo,setTodo] = useState([]);
  const {user,logOut} = useUserAuth();
  const [todoName,setTodoName] = useState("");
  const dispatch = useDispatch();

  const store = useSelector((state)=>state.todoList);

  useEffect(()=>{
     setTodo([...store])
  },[store])


  const handleLogoOut = () =>{
    try {
      logOut()
    } catch (error) {
      console.log(error.message)
    }
  }
  
  /*=======================================
            Handle Add
  =========================================*/
  const handleAdd = () =>{
    let newData = {
      id: new Date().getTime().toString(),
      name : todoName
    }

    dispatch(addData(newData));
    setTodoName("")
  }

  /*=======================================
            Handle Delete
  =========================================*/
  const handleDelete = (id) => {
     dispatch(deleteData(id))
  }



  return (
    <div>
      <h1>Welcome {user.email}</h1>
      <div className="div_log_out">
        <button onClick={handleLogoOut}>Log out</button>
      </div>
      <br />
      <div className="inputField">
        <input type="text" value={todoName} onChange={(event)=>setTodoName(event.target.value)}/>
        <button onClick={()=>handleAdd()}>Add</button>
      </div>
      <div className="showTodo">
        <table border="1">
          <thead>
            <tr>
              <th>#Id</th>
              <th>Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              todo.map((item)=>{
                return(<tr>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td><button>Edit</button><button onClick={()=>handleDelete(item.id)}>Delete</button></td>
                </tr>)
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Home
