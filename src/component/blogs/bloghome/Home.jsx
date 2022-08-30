import axios from 'axios';
import React, { useEffect, useState } from 'react'
import '../bloghome/home.scss'
import {Link} from 'react-router-dom'
import Blogtemp from '../blogtemp/Blogtemp';
import useFetch from '../customHook/useFetch';
import Loader from '../loader/Loader';

const Home = () => {
  const {blogs, loading} = useFetch('http://localhost:8000/blogs')
  

  // function to delete a blog
  // function handleDelete(id) {
    // console.log('this blog id is ',id);
    // using filter to mimick delete blog
    //  let newBlogs= blogs.filter((blog) => blog.id !==id);
    //  setblogs(newBlogs);
  // }

  return (
    <div>
    <h1>Home</h1>
    
    {/* to display blogs,enter into javascript environment with{} */}
    {
      loading && 
      <Loader />
    }
    {
      !loading &&
      <Blogtemp blogs={blogs} max={100} />} 
    </div>
  )
}

export default Home