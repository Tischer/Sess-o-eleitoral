// Tools
import { useState, useEffect } from 'react';
import axios from 'axios';

// Styles
import './style.home.scss';

function Home(idUser) {

    useEffect(() => {
        try {
            axios.post('http://localhost:3001/propostas', {
                idUser: idUser
            }).then((response) => {
                console.log(response);
            })
        } catch (error) {
            console.log(error);
        }
    }, [])


    return (
        <section className="homePage">
            <div className="emAndamento">
                <div className="title"><p>Sessões em andamento</p></div>
                <div className="propostas propostasAtivas">
                    <div className="proposta">
                        <p className="titulo">Título do projeto</p>
                        <p className="resumo">Resumo da proposta: Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti sapiente ullam quia dolor suscipit ad architecto amet ratione esse nobis. Eum tempore beatae laboriosam deserunt labore! Fuga magni laboriosam quaerat.</p>
                        <p className='resultado'>Aprovado</p>
                        <p className="autor">Autor: nome do politico</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;