import './App.css';
import Header from "./components/Header.js";
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import Notification from './components/Notification';

function App() {
  return (
    <div className="app">
<Header/>
<div className='container'>
<div><Sidebar/></div>
<div><Chat/></div>

<div><Notification/></div>

</div>
      </div>
  );
}

export default App;
