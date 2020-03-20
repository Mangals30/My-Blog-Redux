import React from 'react'
import {NavLink,Redirect} from 'react-router-dom'

const DeletePost = (props) => {
    console.log(props)
    if(props.selectedPost!=null) {
        const {selectedPost,deletePost} = props
        const {id} = selectedPost
        return (
            <div>
                <p>Are You Sure You want to delete this post?</p>
                <NavLink to = {`/post/${id}`}>
                <button>Cancel</button>
                </NavLink>
                <NavLink to = '/'>
                <button onClick = {()=>deletePost(id)}>OK</button>
                </NavLink>
                
            </div>
        )
    }
    return ( 
        <Redirect to = '/'/>
    )
}

export default DeletePost
