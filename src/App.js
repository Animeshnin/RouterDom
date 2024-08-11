import './App.css';
import {Routes, Route, Navigate} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import NotFoundPage from './pages/NotFoundPage';
import LoginPage from "./pages/LoginPage";
import React from 'react';
import Layout from './components/Layout'
import Single from "./pages/Single";
import CreateBlog from "./pages/CreateBlog";

import RequireAuth from './hoc/RequireAuth'
import AuthProvider from "./hoc/AuthProvider";
function App() {
  return (
    <AuthProvider>

        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route index element={<Home/>} />
                <Route path='about' element={<About/>}/>
                {/* Переадресация в случает того, что ссылка на поисковую строку изменилась, но чтобы не дублировать его существует Navigate*/}
                <Route path='about-us' element={<Navigate to='/about' replace/>}/>
                <Route path='blog' element={<Blog/>}/>
                <Route path='blog/:id' element={<Single/>}/>
                <Route path='blog/new' element={
                    <RequireAuth>
                        <CreateBlog/>
                    </RequireAuth>
                }/>
                <Route path={'login'} element={<LoginPage/>}/>
                <Route path='*' element={<NotFoundPage/>}/>
            </Route>

        </Routes>
      <div>
        <h1>Get started with React-Router 6</h1>
      </div>
    </AuthProvider>
  );
}

export default App;
