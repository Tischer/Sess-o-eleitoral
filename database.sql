create database sessaoPolitica;

use sessaoPolitica;

create table politico(
	idPolitico int primary key auto_increment,
    usuario varchar(200) unique,
    login varchar(100) unique,
    senha varchar(80)
);

create table Sessao(
	idSessao int primary key auto_increment,
    idPolitico int,
    foreign key (idPolitico) references politico(idPolitico),
    nome varchar(150),
    descricao varchar(250),
    tipo varchar(1),
    opcao1 varchar(3),
	opcao2 varchar(2),
    dataInicial date,
    dataFinal date,
    qtdMax int,
    qtdVotosPos int,
    qtdVotosNeg	int,
    estado varchar(1)
);

create table voto (
        idPolitico int,
        idSessao int, 
        foreign key (idPolitico) references politico(idPolitico),
        foreign key (idSessao) references sessao(idSessao),
        resposta int,
        estado varchar(1)
);


select * from politico;
select * from voto;
select * from sessao;