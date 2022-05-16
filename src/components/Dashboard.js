import '../styles/Container.css';
import Header from "./components/Header.js";
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import Notification from './components/Notification';

const Dashboard=() =>{
  return (
    <div className="app-container">
     <Header/>
<div className='container'>
<div><Sidebar/></div>
<div><Chat/></div>
<div><Notification/></div>
</div>
    </div>
  );
}

export default Dashboard;