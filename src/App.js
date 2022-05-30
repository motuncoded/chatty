import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import Register from './pages/Register';

import SignIn from "./pages/SignIn"
import Dashboard from "./pages/Dashboard"

import ErrorPage from "./pages/ErrorPage"

import "./styles/Header.css"


function App() {
 
  

  return (
    <div className="app" >

      <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='signin' element={<SignIn/>}/>
      <Route path='register' element={<Register/>}/>
      <Route path='dashboard' element={<Dashboard/>}/>

      <Route path='*' element={<ErrorPage/>}/>



    </Routes>
     </BrowserRouter>   
</div>
  );
}

export default App;
