import React from 'react'
import Post from './Post'
import {NavLink} from 'react-router-dom'

const Posts = (props) => {
    const {posts,selectPost} = props
    const postList = posts.posts.map(post => (
        <div key = {post.id} onClick = {()=> selectPost(post.id)}><Post post = {post}/></div>
        ))
    return (
        <div>
            <div>
             <NavLink to = '/post/newPost' className = 'NavLink'>
                 <button className = 'add-post-button'>Add New Post</button>
             </NavLink>
            </div>
            <h1 className = 'my-blog'>Welcome to my blog</h1>
            <div>
              {postList}
            </div>
        </div>

    )
}

export default Posts
