import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { blog } from '../atom/blog';
import { useRecoilState } from 'recoil'



const useFetch = (url) => {
    // create a blog state
  // const [blogs, setblogs] = useState(null);
  let [blogs, setblogs] = useRecoilState(blog);
  // for animation
  let [loading, setLoading] = useState(true);

  // we use useffect to get our data from json once the page loads only once
  useEffect(() => {
    setTimeout(() =>{
      axios.get(url).then((res) => {
        // console.log('res is: ',res.data);
        // condition render in react
        res.data && setblogs(res.data)
        setLoading(false);
  
      }).catch((err) => {
        // console.log('err is: ',err);
      })
    },1500)
  },[])
  return {blogs, loading}
}

export default useFetch