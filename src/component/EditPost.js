import React from 'react'
import {Redirect,NavLink} from 'react-router-dom'
const EditPost = (props) => {
    console.log(props)
    if(props.selectedPost!=null) {
        const {selectedPost,post,handleChange,editPost,setInitial} = props
        const {id} = selectedPost
        return (
            <div className = 'add-new-post'>
                <h1 className = 'add-post-heading'>Edit Post</h1>
                <div className = 'input-flex'>
                <div className = 'input-heading'>Title :</div>
                <div>  
                <input className = 'input-text' type = 'text' name = 'title' value = {post.title} onChange = {(e) => handleChange(e)}></input>   
                </div> 
                </div>
                <div className = 'input-flex'>
                <div className = 'input-heading'>Category : </div> 
                <div>
                <input className = 'input-text' type = 'text' name = 'category' value = {post.category} onChange = {(e) => handleChange(e)}></input>   
                </div> 
                </div>
                <div className = 'input-flex'>
                <div className = 'input-heading'>Description : </div>
                <div>
                </div> 
                <textarea className = 'text-area' type = 'text' name = 'description' value = {post.description} onChange = {(e) => handleChange(e)}></textarea>   
                </div>  
                <div className = 'two-buttons'>
                   <NavLink to = '/' className = 'NavLink'>
                       <button onClick = {() => editPost(id)} className = 'button'>Save</button>
                   </NavLink>
                   <NavLink to = {`/post/edit${id}`} className = 'NavLink'>
                    <button onClick = {setInitial} className = 'button'>Cancel</button>
                   </NavLink> 
                </div>
                </div>
            
        )

    }

    return (
     <Redirect to = '/'/>
    )
}

export default EditPost
