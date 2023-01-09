import React, { useState } from 'react'
import { H1 } from './App.styled'
import image from './image_react.png'
import image2 from './image_logo.svg'

const App = () => {
  const [count, setCount] = useState(0)
  return (
    <>
      <H1>
        hello webpack{process.env.API_ROOT} {process.env.NODE_ENV}
      </H1>
      <img src={image} alt="react logo" width={200} height={200} />
      <img src={image2} alt="react logo" width={200} height={200} />
      <button
        onClick={() => setCount(count + 1)}
      >{`click me: ${count}`}</button>
    </>
  )
}

export default App
