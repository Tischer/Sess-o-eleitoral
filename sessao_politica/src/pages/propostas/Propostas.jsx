//Tools
import { Routes, Navigate, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

//Styles
import './style.propostas.scss';

function Proposta({ idUser }) {

    let [user, setUser] = useState([]);
    let [sessoes, setSessoes] = useState([]);


    useEffect(() => {
        try {
            axios.post('http://localhost:3001/userInfo', {
                idUser: idUser
            }).then((response) => {
                setUser(response.data[0]);
                setSessoes(response.data);
            })
        } catch (error) {
            console.log(error);
        }
    }, [])

    return (
        <section className="propostasPage">
            <Routes>
                {idUser ? null : <Route path='/' element={<Navigate to="/" />} />}
            </Routes>
            <div className="propostasInterface">
                <div className="menu">
                    <p className="userName">{user.usuario}</p>
                    <Link to={'/criar-proposta'}>Criar proposta</Link>
                </div>
                <div className="minhasPropostas">
                    {sessoes.map((sessao, index) => <div className="proposta" key={index}>
                        <p className="titulo">{sessao.nome}</p>
                        <p className="descricao">{sessao.descricao}</p>
                        <p className="votos">Votos: <span className="positivo">{sessao.qtdVotosPos} A favor </span> <span className="negativo">{sessao.qtdVotosNeg} Contra</span></p>
                        <p className="autor">{sessao.usuario}</p>
                    </div>)}
                </div>
            </div>
        </section>
    );
}

export default Proposta;