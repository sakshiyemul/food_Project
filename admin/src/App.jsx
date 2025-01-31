import React from 'react'
import Add from './pages/Add'
import 'bootstrap/dist/css/bootstrap.min.css'
import ListItems from './pages/ListItems'
import Navbar from './components/Navbar'
import { BrowserRouter, Route , Routes } from 'react-router-dom'
import Update from './components/Update'

const App = () => {
  return (
    <>
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Add/>}></Route>
            <Route path='/listitems' element={<ListItems/>}></Route>
            <Route path='/update/:id' element={<Update/>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App