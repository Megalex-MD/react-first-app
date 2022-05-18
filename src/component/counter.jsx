import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0)
  // const [value, setValue] = useState('text')

  const incriment = () => setCount(count + 1)
  const decriment = () => setCount(count - 1)

  return (
    <div className='app'>
      <h2>{count}</h2>
      <button onClick={incriment}>Incriment</button>
      <button onClick={decriment}>Decriment</button>
      {/* 
      <h2>{value}</h2>
      <input type='text' value={value} onChange={event => setValue(event.target.value)}></input> */}
    </div>
  )
}

export default Counter