import React from 'react'
// import useState hook
import { useState } from 'react'

const Statehook = () => {
  // how to use the useState
  let [count, setCount] = useState(0);

  // function to update count using setCount
  function increase() {
    setCount(count + 1);
  }
  return (
    <div>
      <h1>Count: {count} </h1>
      <button onClick={() => increase()}>++</button>
    </div>
  )
}

export default Statehook