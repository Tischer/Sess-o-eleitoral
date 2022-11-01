// Tools
import { Navigate, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

// Styles
import './style.cadastro.scss';

function Cadastro(idUser) {

    // States cadastros
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // State texto
    const [textCad, setTextCad] = useState('');

    const submitCad = () => {
        if (user && email && password) {
            try {
                axios.post('http://localhost:3001/cadastro', {
                    user: user,
                    email: email,
                    password: password
                })
            } catch (error) {
                console.log(error);
            }
            setTextCad('Cadastro realizado');
        } else {
            setTextCad('Preencha todos os campos');
        }
    }

    return (
        <section className="cadastroPage">
            <Routes>
                {idUser ? null : <Route path='/' element={<Navigate to="/" />} />}
            </Routes>
            <div className="title"><p>Cadastre-se</p></div>
            <div className="cadastro">
                <input type="text" name="user" id="user" placeholder="Nome completo" required className="formInput" onChange={(e) => {
                    setUser(e.target.value)
                }} />
                <input type="email" name="login" id="login" placeholder="E-mail" required className="formInput" onChange={(e) => {
                    setEmail(e.target.value)
                }} />
                <input type="password" name="password" id="password" placeholder="Senha" required className="formInput" onChange={(e) => {
                    setPassword(e.target.value)
                }} />
                <button onClick={submitCad} className='formButton'>Cadastrar</button>

                {<p>{textCad}</p>}
            </div>
        </section>
    );
}


export default Cadastro;