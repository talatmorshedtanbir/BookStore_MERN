import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import CreateBook from './components/Book/CreateBook';
import ShowBookList from './components/Book/ShowBookList';
import ShowBookDetails from './components/Book/ShowBookDetails';
import UpdateBookInfo from './components/Book/UpdateBookInfo';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Routes>
            <Route exact path='/' element={<ShowBookList/>}></Route>
            <Route path='/create-book' element={<CreateBook/>}></Route>
            <Route path='/edit-book/:id' element={<UpdateBookInfo/>}></Route>
            <Route path='/show-book/:id' element={<ShowBookDetails/>}></Route>
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;