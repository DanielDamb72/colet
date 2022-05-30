CREATE TABLE usuarios(
    usuario_id int(4) AUTO_INCREMENT,
    nome varchar(30) NOT NULL,
    email varchar(50) NOT NULL,
    senha varchar(32) NOT NULL,
    tipo_usuario bit NOT NULL,

    PRIMARY KEY (usuario_id)
);