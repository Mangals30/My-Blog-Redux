import React from 'react'
import {NavLink} from 'react-router-dom'
const AddPost = (props) => {
    console.log(props)
    const {addPost,post,handleChange,setInitial} = props
    const {title,category,description} = post
    
    return (
        <div className = 'add-new-post'>
            <h1 className = 'add-post-heading'>Add Post</h1>
            <div className = 'input-flex'>
            <div className = 'input-heading'>Title :</div>
            <div>
            <input className = 'input-text' type = 'text' name = 'title' value = {title} onChange = {(e) => handleChange(e)}></input>   
            </div> 
            </div>
            <div className = 'input-flex'>
            <div className = 'input-heading'>Category : </div> 
            <div>
            <input className = 'input-text' type = 'text' name = 'category' value = {category} onChange = {(e) => handleChange(e)}></input>   
            </div>
            </div>
            <div className = 'input-flex'>
            <div className = 'input-heading'>Description : </div>
            <div>
            </div>    
            <textarea className = 'text-area' type = 'text' name = 'description' value = {description} onChange = {(e) => handleChange(e)}></textarea>    
            </div>
         
        <div className = 'two-buttons'>
           <NavLink to = '/' className = 'NavLink'>
             <button onClick = {addPost} className = 'button'>Add</button>
           </NavLink>
            <NavLink to = '/' className = 'NavLink'>
            <button onClick = {setInitial} className = 'button'>Cancel</button>
            </NavLink>
        </div>
        </div>

        

    )
}

export default AddPost
