import './App.css';
import Header from "./components/Header.js";
import Sidebar from './components/Sidebar';
import Menu from './components/Menu';
import Chat from './components/Chat';

function App() {
  return (
    <div className="app">
<Header/>
<div className='container'>
<div><Sidebar/></div>
<div><Chat/></div>

<div>c</div>

</div>
      </div>
  );
}

export default App;
