create database preguntas;
use preguntas;
create table reporte(
    id int(15) auto_increment,
    folio_reporte int( 11 ),
    nombre varchar(60),
    apellido varchar(60),
    curp varchar(18),
    rfc varchar(20),
    folio varchar(20) default 'null',
    estacion_servicio char(4) default 'no',
    correo varchar(30),
    telefono bigint,
    texto text,
    Fecha TIMESTAMP default CURRENT_TIMESTAMP,
    PRIMARY KEY(id)
)