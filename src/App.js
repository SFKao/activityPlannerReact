import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import "bootstrap/dist/js/bootstrap.js"
import ActividadesViewer from './component/actividadesViewer/ActividadesViewer.js';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import LoginFragment from './component/loginFragment/LoginFragment.js';
import Header from './component/header/Header.js';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Routes>
          <Route path='/login' element={<LoginFragment/>}/>
          <Route path='/' element={<ActividadesViewer/>}/>
          <Route path='*' element={<h1>404</h1>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

