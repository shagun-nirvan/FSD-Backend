import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import { useState } from 'react'

import './App.css'
import AddBook from './components/AddBook'
import ViewBook from './components/ViewBook'
import SearchBook from './components/SearchBook'
import DeleteBook from './components/DeleteBook'
import UpdateBook from './components/UpdateBook'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <Router>
      <nav>
        <Link to="/add">Add Book</Link>
        <Link to="/view">View Book</Link>
        <Link to="/search">Search Book</Link>
        <Link to="/delete">Delete Book</Link>
        <Link to="/update">Update Book</Link>
      </nav>
      <Routes>
        <Route path='/add' element={<AddBook />} />
        <Route path='/view' element={<ViewBook />} />
        <Route path='/search' element={<SearchBook />} />
        <Route path='/delete' element={<DeleteBook />} />
        <Route path='/update' element={<UpdateBook />} />

        
      </Routes>
    </Router>
   </div>
  )
}

export default App
