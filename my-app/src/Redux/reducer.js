const initialState = {
    todoList : [
        {
            id: 1,
            name: "Learning React"
        },
        {
            id: 2,
            name : "LeaRning Firebase"
        },
        {
            id: 3,
            name : "LeaRning MongoDB"
        },
        {
            id: 4,
            name: "LearNing PHP"
        }
    ]
}

export const todoReducer = (state = initialState, action) => {
    switch(action.type)
    {
        case "ADD_DATA":
                       console.log(action.payload)
                       return {
                           ...state,
                           todoList:[...state.todoList, action.payload]
                       }

        case "EDIT_DATA":
                        let updatedData = state.todoList.map((todo)=>{
                            if(todo.id === action.payload.id){
                                return todo.name = action.payload.name;
                            }

                            return todo;
                        })

                        return {
                            todoList:[...updatedData]
                        }

        case "DELETE_DATA":
                          let filteredData = state.todoList.filter((todo)=>{
                              return todo.id !== action.payload
                          })

                          return {
                              todoList : [...filteredData]
                          }

        default           : return state;
    }
}