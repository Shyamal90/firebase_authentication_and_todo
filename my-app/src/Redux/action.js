export const addData = (data) =>{
    return{
        type:"ADD_DATA",
        payload: data
    }
}


export const editData = (id) => {
    return{
        type: "EDIT_DATA",
        payload: id,
    }
}

export const deleteData = (id) => {
    return{
        type:"DELETE_DATA",
        payload: id
    }
}