import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';

// Styles
import './style/mainStyles.scss';

// Pages
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Cadastro from './pages/cadastro/Cadastro';
import Propostas from './pages/propostas/Propostas';


function App() {

  const [idUser, setIdUser] = useState();

  return (
    <div className="App">
      <Router>
        <header>
          <div className="logo"><p className="title">Sessão Política</p></div>
          <div className="menu">
            <Link className='menuItem' to="/">Home</Link>
            {idUser ? <Link className='menuItem' to="/login">Meus votos</Link> : null}
            {idUser ? <Link className='menuItem' to="/minhas-propostas">Minhas propostas</Link> : null}
            {idUser ? null : <Link className='menuItem' to="/login">Login</Link>}
            {idUser ? null : <Link className='menuItem' to="/cadastro">Cadastro</Link>}
          </div>
        </header>
        <Routes>
          <Route path='/' exact="true" element={<Home idUser={idUser} />}></Route>
          <Route path='/login' element={<Login idUser={idUser} setIdUser={setIdUser} />}></Route>
          <Route path='/cadastro' element={<Cadastro idUser={idUser} />}></Route>
          <Route path='/minhas-propostas' element={<Propostas idUser={idUser} />}></Route>
          <Route path='/cadastro' element={<Cadastro idUser={idUser} />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
