import React, { useEffect,useState } from 'react'
import {useSelector} from 'react-redux'
import {useUserAuth} from '../../context/UserAuthContext'
import { auth } from '../../firebase';

function Home() {
  const [todo,setTodo] = useState([]);
  const {user,logOut} = useUserAuth();

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
  
  return (
    <div>
      <h1>Welcome {user.email}</h1>
      <div className="div_log_out">
        <button onClick={handleLogoOut}>Log out</button>
      </div>
      <div className="showTodo">
        <table>
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
                  <td><button>Edit</button><button>Delete</button></td>
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
