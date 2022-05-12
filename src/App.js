import './App.css';
import "./pages/Home";

function App() {
  return (
    <div className="app">
      <div className='app-layout'>
<h1>Chatty</h1>
<form>
    <ul className='form-heading'>
      <li>
        <a href="/" className='active'>SIGN IN</a></li>
      <li><a href="/">SIGN OUT</a></li>

    </ul>

  
  <div className='input-group'>
  <input type="text" placeholder='Username'/>
  <input type="password" placeholder='Password'/>
<button >Submit</button>
</div>
</form>
</div>
</div>
  );
}

export default App;
