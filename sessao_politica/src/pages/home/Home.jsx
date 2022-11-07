// Tools
import { useState, useEffect } from 'react';
import axios from 'axios';

// Styles
import './style.home.scss';

function Home(idUser) {
    let [sessoes, setSessoes] = useState([]);

    useEffect(() => {
        try {
            axios.post('http://localhost:3001/propostas', {
                idUser: idUser
            }).then((response) => {
                setSessoes(response.data);
            })
        } catch (error) {
            console.log(error);
        }
    }, [])

    return (
        <section className="homePage">
            <div className="tipoSessao emAndamento">
                <div className="title"><p>Sessões em andamento</p></div>
                {sessoes.map((sessao, index) =>
                    <div className="propostas">
                        {sessao.estado === "A" ? <div key={index} className="proposta">
                            <p className="titulo">{sessao.nome}</p>
                            <p className="resumo">{sessao.descricao}</p>
                            <p className="autor">Autor: {sessao.usuario}</p>
                        </div> : null}
                    </div>
                )}
            </div>
            <div className="tipoSessao finalizadas">
                <div className="title"><p>Sessões em Finalizadas</p></div>
                {sessoes.map((sessao, index) =>
                    <div className="propostas">
                        {sessao.estado === "F" ? <div key={index} className="proposta">
                            <p className="titulo">{sessao.nome}</p>
                            <p className="resumo">{sessao.descricao}</p>
                            <p className='resultado'>Resultado da votação: <span className={sessao.resultado === "Aprovada" ? "aprovada" : sessao.resultado === "Empate" ? "empate" : "reprovada"}>{sessao.resultado}</span></p>
                            <p className="autor">Autor: {sessao.usuario}</p>
                        </div> : null}
                    </div>
                )}
            </div>
        </section >
    );
}

export default Home;