import React, { useEffect, useState } from 'react'

const UseEffect_p = () => {

    const [count,setCount] = useState(0)
    const [calculation, setCalculation] = useState(0);

    // useEffect(()=>{
    //     setTimeout(()=>{
    //         setCount((count) => count*5)
    //     },100)
    // },[])

    useEffect(()=>{
        setCalculation(()=>(count*2))
    },[count])
  return (
    <div>
        <h2>I am practicing useEffect using counter</h2>
        <h1>Count:{count}</h1>
        <button onClick={() => setCount((c) => c + 1)}>+</button>
        <p>{calculation}</p>
        </div>
  )
}

export default UseEffect_p