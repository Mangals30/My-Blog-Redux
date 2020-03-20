import {POSTS} from '../data/posts'
import {randomId} from '../data/randomId'
import {date} from '../data/date'
const initialState = {
    posts : POSTS,
    selectedPost : null,
    post : {
        title : '',
        category : '',
        description : ''
    }
}
const postReducer = (state = initialState,{type,payload}) =>{
    let id = ''
    let posts = ''
    let initialPost = ''
    switch (type) {

        case 'SELECT_POST':
        id = payload.id
        posts = state.posts
        const selectedPost = posts.find(post => post.id === id)
        return {...state, selectedPost : selectedPost}

        case 'DELETE_POST' : 
        id = payload.id
        posts = state.posts.filter(post => post.id!==id)
        return {...state, posts : posts}
        
        case 'ADD_POST' : 
          const addedPost = {
            id : randomId(),
            title : state.post.title,
            category : state.post.category,
            description : state.post.description,
            date : date()
        }
        const newPosts = [...state.posts]
        newPosts.unshift(addedPost)
        initialPost = {
            title : '',
            category : '',
            description : ''
        }
        return {...state,posts : newPosts,post : initialPost}

        case 'HANDLE_CHANGE' : 
        const name = payload.name
        const value = payload.value
        const post = {...state.post,[name] : value}
        return {...state,post : post}
    
        case 'SET_INITIAL' : 
        initialPost = {
            title : '',
            category : '',
            description : ''
        }
        return {...state,post : initialPost}

        case 'EDIT_INPUT' : 
        id = payload.id
        let editInputPost = state.posts.find(post => post.id === id)
        
        const editInput = {
            title : editInputPost.title,
            category : editInputPost.category,
            description : editInputPost.description
        }
        return {...state,post : editInput}

        case 'EDIT_POST' : 
        id = payload.id
        let editPost = state.posts.find(post => post.id === id)
        editPost.title = state.post.title
        editPost.category = state.post.category
        editPost.description = state.post.description
        editPost.date = date()
        const filterPost = state.posts.filter(post => post.id!==id)
        const newPostsEdit = [editPost,...filterPost]
        initialPost = {
            title : '',
            category : '',
            description : ''
        }
        return {...state,posts : newPostsEdit,post : initialPost}

        default:
        return state;


    }
}
export default postReducer