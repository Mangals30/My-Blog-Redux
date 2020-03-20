import React from 'react'
import {NavLink} from 'react-router-dom'
import ICON from '../images/icon.png'
const Post = (props) => {
    const {id,title, category,date} = props.post
    return (
        <div className = 'posts'>
         <NavLink to = {`/post/${id}`} className = 'NavLink'>
         <div className = 'category'>  
         <img src = {ICON} alt = 'icon' className = 'icon'></img>
         <div className = 'cat'>{category}</div>
         </div>  
            <div className = 'title'>{title}</div> 
            <div className = 'time'>Last Edited Time : {date}</div>
         </NavLink>
        </div>
    )
}

export default Post
