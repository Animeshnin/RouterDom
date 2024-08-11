import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import NotFoundPage from './pages/NotFoundPage';



import React from 'react';

import Layout from './components/Layout'
import Single from "./pages/Single";
import CreateBlog from "./pages/CreateBlog";
function App() {
  return (
    <>

        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route index element={<Home/>} />
                <Route path='about' element={<About/>}/>
                <Route path='blog' element={<Blog/>}/>
                <Route path='blog/:id' element={<Single/>}/>
                <Route path='blog/new' element={<CreateBlog/>}/>
                <Route path='*' element={<NotFoundPage/>}/>
            </Route>

        </Routes>
      <div>
        <h1>Get started with React-Router 6</h1>
      </div>
    </>
  );
}

export default App;
