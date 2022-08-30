import React from 'react'
import '../createblog/create.scss'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Updateblog = ({hide,blogs}) => {
  // create state for title,content and authors
  let [title,setTitle] = useState(blogs[0].title);
  let [content,setContent] = useState(blogs[0].content);
  let [author,setAuthor] = useState(blogs[0].author);
  const notify = ()=> toast('Blog Updated Successfully!');
  const [disabled, setDisabled] = useState(false);


  let blogPost = {
    title: title,
    content: content,
    author: author
  }
//   console.log(blogs)
  let history = useNavigate();

  function handleSubmit(e){
    e.preventDefault(e)
    // console.log('submitted');
    axios.patch(`http://localhost:8000/blogs/${blogs[0].id}`,blogPost).then((res) =>{
        setDisabled(true);
      // shows what was posted on db
      // console.log(res.data);
      // console.log('your blog post has been sent')
      notify()
      setTimeout(() =>{
        history('/');
      }, 4700)
    }).catch((err) =>{
    //   console.log(err);
    })
  }
  return (
    <div className='create'>
      <h1>Update-Blog</h1>
      <form onSubmit={handleSubmit}>
        <div className='title'><label>Title</label> 
        <input type="text" placeholder='Blog Title'
        onChange={(e)=> setTitle(e.target.value)}
        value={title}
        required
         />
        </div>
        <div>
        <h3>Blog Content</h3>
        <textarea 
        name="" id="" cols="85" rows="20" placeholder='Blog Content'
        onChange={(e)=> setContent(e.target.value)}
        value={content}
        required
        >
        </textarea>
        </div>
        <div className='authors'>
          <label>Authors</label> <select name="" id=""
          onChange={(e)=> setAuthor(e.target.value)}
          value={author}
          >
            <option value="ade">Ade</option>
            <option value="praise">Praise</option>
            <option value="robert">Robert</option>
          </select>
        </div>
        <div className='update'>
            <button onClick={() => hide()}>Cancel Update</button> 
        {
            !disabled &&
            <button>Update Blog</button>}
        </div>
        {/* show state changes on keypress */}
      {/* <p>{title}</p> */}
      {/* <p>{content}</p> */}
      {/* <p>{author}</p> */}
      </form>
      <ToastContainer />
    </div>
  )
}

export default Updateblog