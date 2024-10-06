import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './components/Main'
import Header from './components/Section/Header'
import Nav from './components/Section/Nav'
import Loading from './components/Loading'
import Like from './components/Like'
import Search from './components/Search'
import Mypage from './components/Mypage'

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/main' element={<Main />} />
                <Route path='/' element={<Loading />} />
                <Route path='/like' element={<Like />} />
                <Route path='/search' element={<Search />} />
                <Route path='/mypage' element={<Mypage />} />
            </Routes>
            <Nav />
        </BrowserRouter>
    )
}

export default App