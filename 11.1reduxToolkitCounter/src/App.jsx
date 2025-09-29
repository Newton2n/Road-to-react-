import { useState } from 'react'
import './App.css'
import {store} from './app/store'
import {Provider} from 'react-redux'
import Counter from './components/counter'
function App() {
  const [count, setCount] = useState(0)

  return (
    <Provider store={store}>
      <Counter/>
     <h1>Counter</h1>
    </Provider>
    
  )
}

export default App
