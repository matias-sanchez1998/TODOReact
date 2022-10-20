import React from 'react';

import { HashRouter, Route, Routes } from 'react-router-dom';
import { EditTodoPage } from './EditPage/EditTodoPage';
import { HomePage } from './HomePage/HomePage';
import { NewTodoPage } from './NewTodoPage/NewTodoPage';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/new' element={<NewTodoPage/>}></Route>
        <Route path='/edit/:id' element={<EditTodoPage/>}></Route>
        <Route path='*' element={<p>Not Found</p>}></Route>
      </Routes>
    </HashRouter>
  )
}

export  {App};
