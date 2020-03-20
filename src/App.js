import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux'
import {selectPost,deletePost,addPost,handleChange,setInitial,editInput,editPost} from './store/action'
import {BrowserRouter,NavLink,Route,Switch} from 'react-router-dom'
import Posts from './component/Posts'
import PostDetails from './component/PostDetails'
import EditPost from './component/EditPost';
import DeletePost from './component/DeletePost'
import AddPost from './component/AddPost'

class App extends Component {
  render () {
    return(
     <BrowserRouter>
      <Switch>
        <Route 
          exact 
          path='/' 
          render={ () => <Posts 
          posts = {this.props.posts}
          selectPost = {this.props.selectPost}   
            />
          }
        />
                <Route 
          exact 
          path='/post/newPost' 
          render={ () => <AddPost 
          addPost = {this.props.addPost}
          setInitial = {this.props.setInitial}
          post = {this.props.posts.post}
          handleChange = {this.props.handleChange} 
            />
          }
        />
        <Route 
          exact 
          path={`/post/:id`} 
          render={ () => {return <PostDetails
          selectedPost = {this.props.posts.selectedPost}
          deletePost = {this.props.deletePost}
          editInput = {this.props.editInput}
          />}}  
        />
        />
        <Route 
          exact 
          path={`/post/edit/:id`} 
          render={ () => {return <EditPost
          selectedPost = {this.props.posts.selectedPost}
          handleChange = {this.props.handleChange}
          post = {this.props.posts.post}
          editPost = {this.props.editPost}
          setInitial = {this.props.setInitial}
          />}}  
        />
        />
        <Route 
          exact 
          path={`/post/delete/:id`} 
          render={ () => {return <DeletePost
          selectedPost = {this.props.posts.selectedPost}
          deletePost = {this.props.deletePost}
          />}}  
        />
      </Switch> 
      </BrowserRouter> 
    )
  }

}

const mapStateToProps = (props) => {
  
  const {posts} = props
  
return ({
  posts : posts
})
}
const mapActionToProps = (dispatch) => (
  {
    selectPost : (id) => dispatch (selectPost(id)),
    deletePost : (id) => dispatch(deletePost(id)), 
    addPost : () => dispatch(addPost()),
    setInitial : () => dispatch(setInitial()),
    editInput : (id) => dispatch(editInput(id)),
    editPost : (id) => dispatch(editPost(id)),
    handleChange : (e) => dispatch(handleChange(e))
  }
)
export default connect (mapStateToProps,mapActionToProps)(App);
