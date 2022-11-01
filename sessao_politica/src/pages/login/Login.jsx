// Tools
import { Navigate, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

// Styles
import './style.login.scss';

function Login({ idUser, setIdUser }) {
    // States logins
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // State texto
    const [textCad, setTextLog] = useState('');

    const login = () => {
        try {
            axios.post('http://localhost:3001/login', {
                email: email,
                password: password
            }).then((response) => {
                setIdUser(response.data.idUser);
            })
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <section className="loginPage">
            <Routes>
                {idUser ? <Route path='/' element={<Navigate to="/" />} /> : null}
            </Routes>
            <div className="title"><p>Login</p></div>
            <div className="login">
                <input type="email" name="login" id="login" placeholder="E-mail" required className="formInput" onChange={(e) => {
                    setEmail(e.target.value)
                }} />
                <input type="password" name="password" id="password" placeholder="Senha" required className="formInput" onChange={(e) => {
                    setPassword(e.target.value)
                }} />
                <button onClick={login} className='formButton'>Entrar</button>

                {<p>{textCad}</p>}
            </div>
        </section >
    );
}

export default Login;