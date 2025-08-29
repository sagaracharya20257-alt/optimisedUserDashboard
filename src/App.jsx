import { useState } from 'react'
import './App.css'
import UserDashboard from './UserDashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <UserDashboard/>
      </div>
    </>
  )
}

export default App
