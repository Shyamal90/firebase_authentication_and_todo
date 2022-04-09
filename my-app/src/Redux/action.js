const addData = (data) =>{
    return{
        type:"ADD_DATA",
        payload: data
    }
}


const editData = (id) => {
    return{
        type: "EDIT_DATA",
        payload: id,
    }
}

const deleteData = (id) => {
    return{
        type:"DELETE_DATA",
        payload: id
    }
}