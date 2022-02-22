import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Error404 from './pages/Error404';
import Course from './components/Course';
import PostCourse from './pages/PostCourse';
import { CategoryDesign, CategoryIA, CategoryMarketing, CategoryOthers, CategoryProgramming } from './pages/CategoryPage';
import Blog from './pages/Blog';
import ScrollToTop from './components/ScrollToTop';
import ButtonToTop from './components/ButtonToTop';

function App() {


  return (
      <>
      <BrowserRouter> 
        <ScrollToTop />
        <Header />
        <Routes>      
          <Route path='*' element={<Error404 />}/>
          <Route path="/" exact={true} element={<Home/>}/>
          <Route path='/course/:id_course'  element={<Course />}/>
          <Route path='/categoria/programacion'  element={<CategoryProgramming />}/>
          <Route path='/categoria/design'  element={<CategoryDesign />}/>
          <Route path='/categoria/inteligencia-artificial'  element={<CategoryIA />}/>
          <Route path='/categoria/marketing'  element={<CategoryMarketing />}/>
          <Route path='/categoria/otros'  element={<CategoryOthers />}/>
          <Route path='/blog' element={<Blog />}/>
          <Route path="/acerca-de" element={<About/>}/>
          <Route path='/publica-un-curso' element={<PostCourse />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
      <ButtonToTop />
      </>
  );
}

export default App;
