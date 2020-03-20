export const selectPost = (id) => {
    return (
        {
            type : 'SELECT_POST',
            payload : {
                id : id
            }

        }
    )
    
}
export const deletePost = (id) => {
    return (
        {
            type : 'DELETE_POST',
            payload : {
                id : id
            }

        }
    )
    
}
export const addPost = () => {
    return (
        {
            type : 'ADD_POST',

        }
    )
    
}

export const setInitial = () => {
    return (
        {
            type : 'SET_INITIAL',

        }
    )
    
}
export const editInput = (id) => {
    return (
        {
            type : 'EDIT_INPUT',
            payload : {
                id : id
            }

        }
    )
    
}

export const editPost = (id) => {
    return (
        {
            type : 'EDIT_POST',
            payload : {
                id : id
            }

        }
    )
    
}

export const handleChange = (e) => {
    return (
        {
            type : 'HANDLE_CHANGE',
            payload : {
             name : e.target.name,
             value : e.target.value
            }

        }
    )
    
}