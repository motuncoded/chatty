import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import { createContext, useState } from 'react';
import './App.css';
import "./pages/Home";
import Home from './pages/Home';
import SignUp from './pages/SignIn';





export const ThemeContext = createContext(null)

function App() {
const[theme, setTheme] = useState("light")
 const toggleTheme =() =>{
   setTheme((color) => color ==="light"? "dark" :"light")
 } 
    

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
    <div className="app"  id="light">
      <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='signup' element={<SignUp/>}/>

    </Routes>
     </BrowserRouter>   
</div>
</ThemeContext.Provider>
  );
}

export default App;
