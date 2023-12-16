import React, { createContext, useContext } from 'react'

const Context = createContext()

const Child = ()=>{

    const context = useContext(Context)

    return(
        <div>
            Child Component {context.data}
        </div>
    )
}

const UseContext_p = () => {

   
  return (
    <div>
        <Context.Provider value={{data:"this is from context"}}>
            <Child/>
        </Context.Provider>
    </div>
  )
}

export default UseContext_p