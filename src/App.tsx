import { useState } from 'react'
import { H1 } from './App.styled'
import image from './image_react.png'
import image2 from './image_logo.svg'

const App = () => {
  const [count, setCount] = useState(0)
  // eslint-disable-next-line no-undef
  const apiUrl = process.env.API_ROOT
  // eslint-disable-next-line no-undef
  const nodeEnv = process.env.NODE_ENV
  return (
    <>
      <H1>
        hello webpack {apiUrl} {nodeEnv}
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
