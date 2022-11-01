//Tools
import { Routes, Navigate, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

//Styles
import './style.propostas.scss';

function Proposta(idUser) {

    return (
        <section className="propostasPage">
            <Routes>
                {idUser ? null : <Route path='/' element={<Navigate to="/" />} />}
            </Routes>
            <p className="title">Suas propostas em votação</p>
            <div className="propostas propostasAtivas">
                <div className="proposta">
                    <p className="titulo">Título do projeto</p>
                    <p className="resumo">Resumo da proposta: Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti sapiente ullam quia dolor suscipit ad architecto amet ratione esse nobis. Eum tempore beatae laboriosam deserunt labore! Fuga magni laboriosam quaerat.</p>
                    <p>Votos:</p>
                    <div className="votos">
                        <p className="voto">A favor: <span className='positivos'>23</span></p>
                        <p className="voto">Contra: <span className='negativos'>12</span></p>
                    </div>
                    <p className="autor">Autor: nome do politico</p>
                </div>
            </div>
            <p className="title">Suas propostas aprovadas</p>
            <div className="propostas propostasAprovadas">
                <div className="proposta">
                    <p className="titulo">Título do projeto</p>
                    <p className="resumo">Resumo da proposta: Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti sapiente ullam quia dolor suscipit ad architecto amet ratione esse nobis. Eum tempore beatae laboriosam deserunt labore! Fuga magni laboriosam quaerat.</p>
                    <p>Votos:</p>
                    <div className="votos">
                        <p className="voto">A favor: <span className='positivos'>23</span></p>
                        <p className="voto">Contra: <span className='negativos'>12</span></p>
                    </div>
                    <p className="autor">Autor: nome do politico</p>
                </div>
            </div>
            <p className="title">Suas propostas Reprovadas</p>
            <div className="propostas propostasReprovadas">
                <div className="proposta">
                    <p className="titulo">Título do projeto</p>
                    <p className="resumo">Resumo da proposta: Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti sapiente ullam quia dolor suscipit ad architecto amet ratione esse nobis. Eum tempore beatae laboriosam deserunt labore! Fuga magni laboriosam quaerat.</p>
                    <p>Votos:</p>
                    <div className="votos">
                        <p className="voto">A favor: <span className='positivos'>23</span></p>
                        <p className="voto">Contra: <span className='negativos'>12</span></p>
                    </div>
                    <p className="autor">Autor: nome do politico</p>
                </div>
            </div>
            <p className="title">Todas suas propostas</p>
            <div className="propostas todasPropostas">
                <div className="proposta">
                    <p className="titulo">Título do projeto</p>
                    <p className="resumo">Resumo da proposta: Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti sapiente ullam quia dolor suscipit ad architecto amet ratione esse nobis. Eum tempore beatae laboriosam deserunt labore! Fuga magni laboriosam quaerat.</p>
                    <p>Votos:</p>
                    <div className="votos">
                        <p className="voto">A favor: <span className='positivos'>23</span></p>
                        <p className="voto">Contra: <span className='negativos'>12</span></p>
                    </div>
                    <p className="autor">Autor: nome do politico</p>
                </div>
            </div>
        </section>
    );
}

export default Proposta;