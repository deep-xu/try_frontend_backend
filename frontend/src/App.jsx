import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Navbar from './components/Navbar'

import Home from './pages/Home'
import Manga from './pages/Manga'
import Combos from './pages/Combos'
import TrackOrder from './pages/TrackOrder'
import Contact from './pages/Contact'
import Categories from './pages/Categories'
import Login from './pages/Login'
import Register from './pages/Register'
import Footer from './components/Footer'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Cart from './components/Cart'

const App = () => {

  const [book, setBook] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    const getBook = async () => {
      try{
        const res = await axios.get('http://localhost:4000/book')
        setBook(res.data)
      } catch(err){
        console.log('something wrong', err)
      }
    }
    getBook()
  }, [])

  return (
    <>
      <Header setSearch={setSearch}/>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home book={book} search={search}/>} />
        <Route path="/manga" element={<Manga book={book} search={search}/>} />
        <Route path="/combos" element={<Combos book={book}/>} />
        <Route path="/track-order" element={<TrackOrder />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/categories" element={<Categories/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App 
