import React from 'react'
import Contact from './components/Contact'
import Create from './components/Create'
import Edit from './components/Edit'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


const App = () => {
  return (
    <div className='container mx-auto'>
      <Router>
        <Routes>
          <Route path='/' element={<Contact />} />
          <Route path='/create' element={<Create />} />
          <Route path='/edit/:id' element={<Edit />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App