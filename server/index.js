// Libraries
const express = require('express');
const cors = require('cors');
const bodyparser = require("body-parser");
const mysql = require('mysql');
const md5 = require('md5');
const { response } = require('express');

// Config .env 
require('dotenv').config();

// Server setup

const root = express();

try {
    root.listen(process.env.port);
    console.log(`Sistema rodando em http://localhost:${process.env.port}`);
} catch (error) {
    console.log(error);
}

root.use(cors());
root.use(express.json())
root.use(bodyparser.urlencoded({ extended: true }));

// Data base setup

const db = mysql.createPool({
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database
});

// Routs

root.post('/cadastro', (req, res) => {
    const user = req.body.user;
    const login = req.body.email;
    const password = req.body.password;

    const query = "INSERT INTO politico (usuario, login, senha) VALUES (?,?,md5(?))";

    db.query(query, [user, login, password]);
});

root.post('/login', (req, res) => {
    const login = req.body.email;
    const password = md5(req.body.password);

    const query = "select idPolitico, login, senha from politico where login = (?);";

    db.query(query, [login], (err, result) => {
        const realPass = result[0].senha;
        if (password == realPass) {
            res.send({
                idUser: result[0].idPolitico
            })
        } else {
            res.send({
                idUser: null
            })
        }
    });
});

root.post('/propostas', (req, res) => {
    const id = req.body.idUser;

    const query = 'select * from sessoes'
});