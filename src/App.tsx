import { useState } from 'react'
import './App.css'
import { login } from './api/auth'


function App() {
  const clickhandler = async () => {
    try {
      const res = await login({ username: 'varun', password: 'admin' })
      console.log(res)
    }
    catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <button onClick={clickhandler}>
        login
      </button>
    </>
  )
}

export default App
