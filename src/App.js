import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { useState } from 'react';
import {login} from './component/axios/axiosI.js'
import HolaMundo from './component/holaMundo/HolaMundo.js';

function App() {

  const handleLogin = e => {
    e.preventDefault()

    login(usernameOrEmail, pass);
  }

  const [usernameOrEmail, setusernameOrEmail] = useState("test");
  const [pass, setpass] = useState("pass");

  return (
    <div className="App">
      <header>
        <p>
            Hola Mundo!
        </p>
      </header>
      <form action='' onSubmit={handleLogin}>
        <input name='usernameOrEmail' value={usernameOrEmail} onChange={e => setusernameOrEmail(e.target.value)}/>
        <input name='pass' type='password' value={pass} onChange={e => setpass(e.target.value)}/>
        <button type='submit'>
          Submit
        </button>
      </form>
      <div>
        <HolaMundo/>
      </div>
    </div>
  );
}

export default App;
