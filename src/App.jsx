import React, { useState } from 'react'

const App = () => {
  let [count, setCount] = useState(0);

  let increaseCount =()=> {
    setCount(count+1);
  }
  return (
    <div style={{
      backgroundColor : 'green',
      height: '100%',
      width: '100%',
      textAlign: 'center'
    }
    }>
      <h1>{count}</h1>
      <button onClick={increaseCount}>Click</button>
    </div>
  )
}

export default App