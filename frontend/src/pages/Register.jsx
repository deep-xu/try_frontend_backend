import React, { useState } from 'react'
import axios from 'axios'

const Register = () => {

  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] =  useState('')
  const [data, setData] = useState([])

  const submitHandler = async (e) => {
    e.preventDefault()

    try {
    await axios.post('http://localhost:4000/signUp', 
      {name, age, email, password}, 
      { withCredentials: true })
    setData([...data, {name, age, email, password}])
    setName('')
    setAge('')
    setEmail('')
    setPassword('')
    } catch(err){
      console.log('something went wrong')
    }
  } 

  return (

    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-[350px] bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl text-center mb-6">
          Register
        </h2>

        <form onSubmit={(e) => {
          submitHandler(e)
        }}>
          <input
          value={name}
          onChange={(e) => {
            setName(e.target.value)
          }}
          type="text"
          placeholder="Enter your name"
          className="w-full px-4 py-3 mb-4 border rounded-xl"
        />

        <input
        value={age}
        onChange={(e) => {
          setAge(e.target.value)
        }}
          type="number"
          placeholder="Enter your age"
          className="w-full px-4 py-3 mb-4 border rounded-xl"
        />

        <input
        value={email}
        onChange={(e) => {
          setEmail(e.target.value)
        }}
          type="email"
          placeholder="Create email"
          className="w-full px-4 py-3 mb-4 border rounded-xl"
        />

        <input
        value={password}
        onChange={(e) => {
          setPassword(e.target.value)
        }}
          type="password"
          placeholder="Create password"
          className="w-full px-4 py-3 mb-6 border rounded-xl"
        />

        <button type='submit'
          className="w-full bg-amber-400 text-white py-3 rounded-xl text-xl cursor-pointer active:scale-95"
        >
          Register
        </button>
        </form>
      </div>
    </div>
  )
}

export default Register
