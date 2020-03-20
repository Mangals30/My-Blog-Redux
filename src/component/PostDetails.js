import React from 'react'
import {NavLink,Redirect} from 'react-router-dom'
const PostDetails = (props) => {
    if(props.selectedPost) {
        
        const {selectedPost,editInput} = props
        const {id,title,description} = selectedPost
        console.log(id)
        return (
            <div>
              <div>
                 <NavLink to = '/' className = 'NavLink'>
                     <button className = 'add-post-button'>Back</button>
                 </NavLink>
              </div>
              <div className = 'post-det-div'>
                  <div className = 'post-details'>
                <h1 className = 'post-heading'>{title}</h1>
                <p className = 'post-description'>{description}</p>
                </div>
                <div className = 'two-buttons'>
                <NavLink to = {`/post/edit/${id}`} className = 'NavLink'>
                <button onClick = {() => editInput(id)} className = 'button'>Edit</button>
                </NavLink>
                <NavLink to = {`/post/delete/${id}`} className = 'NavLink'>
                <button className = 'button'>Delete</button>
                </NavLink>
                </div>
            </div>
            </div>

        )
    }
    return(
        <div>
          <Redirect to = '/'/>
        </div>
    )
}

export default PostDetails
