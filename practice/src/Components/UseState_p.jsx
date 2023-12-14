import React, { useState } from 'react'

const UseState_p = () => {
  const [data,setData] = useState(0)

  const handleClick=()=>{
    setData(data+1)
  }

  const handleDelete = ()=>{
    setData(data-1)
  }

  return (
    <div>
      <h1>Count {data}</h1>
      <button onClick={handleClick}>ADD</button>
      <button onClick={handleDelete}>DELETE</button>
    </div>
  )
}

export default UseState_p