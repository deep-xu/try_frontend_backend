import React, { useState } from 'react'
import axios from 'axios'

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post('http://localhost:4000/login', 
      {email, password}, 
      {withCredentials: true})
      setEmail('')
      setPassword('')
      } catch(err) {
        console.log('something went wrong')
      }
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-[350px]">
        <h2 className="text-3xl text-center mb-6">
          Login
        </h2>
        <form onSubmit={(e) => {
          submitHandler(e)
        }}>
          <input
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
          }}
          type="email"
          placeholder="Enter your email"
          className="w-full px-4 py-3 mb-4 border rounded-xl"
        />

        <input
        value={password}
        onChange={(e) => {
          setPassword(e.target.value)
        }}
          type="password"
          placeholder="Enter your password"
          className="w-full px-4 py-3 mb-6 border rounded-xl"
        />

        <button type='submit'
          className="w-full bg-amber-400 text-white py-3 rounded-xl text-xl"
        >
          Login
        </button>
        </form>
      </div>
    </div>
  )
}

export default Login 