import { useState } from 'react'
import {login} from '../axios/axiosI.js'


const LoginFragment = () => {

    const handleLogin = e => {
        e.preventDefault()
    
        login(usernameOrEmail, pass);
      }
    
      const [usernameOrEmail, setusernameOrEmail] = useState("test");
      const [pass, setpass] = useState("pass");

    return(
        <form action='' onSubmit={handleLogin}>
          <input name='usernameOrEmail' value={usernameOrEmail} onChange={e => setusernameOrEmail(e.target.value)}/>
          <input name='pass' type='password' value={pass} onChange={e => setpass(e.target.value)}/>
          <button type='submit'>
            Submit
          </button>
        </form>
    )

}

export default LoginFragment;