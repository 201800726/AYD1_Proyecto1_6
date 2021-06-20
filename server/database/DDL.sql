CREATE DATABASE ReportesMixco;
USE ReportesMixco;

CREATE TABLE Rol(
    rolID INT NOT NULL,
    tipo VARCHAR(25) NOT NULL,
    PRIMARY KEY (rolID)
);

CREATE TABLE Usuario(
    usuarioID INT,
    usuario VARCHAR(75) NOT NULL,
    contrasenia VARCHAR(100) NOT NULL,
    DPI INT NOT NULL,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    fechaNacimiento DATE NOT NULL,
    PRIMARY KEY (usuarioID)
);

CREATE TABLE RolUsuario(
    rolusuarioID INT NOT NULL,
    usuario INT NOT NULL,
    rol INT NOT NULL,
    PRIMARY KEY (rolusuarioID),
    FOREIGN KEY (usuario) REFERENCES Usuario (usuarioID),
    FOREIGN KEY (rol) REFERENCES Rol (rolID)
);

CREATE TABLE Zona(
    zonaID INT NOT NULL,
    nombre VARCHAR(100) NOT NULL,
    PRIMARY KEY (zonaID)
);

CREATE TABLE Categoria(
    categoriaID INT NOT NULL,
    nombre VARCHAR(100) NOT NULL,
    PRIMARY KEY (categoriaID)
);

CREATE TABLE EntidadEncargada(
    entidadID INT NOT NULL,
    nombre VARCHAR(150) NOT NULL,
    correo VARCHAR(150) NOT NULL,
    numeroTelefono SMALLINT NOT NULL,
    PRIMARY KEY (entidadID)
);

CREATE TABLE EncargadoCategoria(
    encargadoCategoriaID INT NOT NULL,
    categoria INT NOT NULL,
    encargado INT NOT NULL,
    PRIMARY KEY (encargadoCategoriaID),
    FOREIGN KEY (categoria) REFERENCES Categoria (categoriaID),
    FOREIGN KEY (encargado) REFERENCES EntidadEncargada (entidadID)
);

CREATE TABLE Reporte(
    reporteID INT NOT NULL,
    descripcion VARCHAR(255) NOT NULL,
    fechaReporte DATETIME  NOT NULL DEFAULT NOW(),
    fechaProblema DATETIME  NOT NULL,
    ciudadano INT,
    empleado INT,
    estado CHAR(1) DEFAULT 0 NOT NULL,
    PRIMARY KEY (reporteID),
    FOREIGN KEY (ciudadano) REFERENCES Usuario (usuarioID),
    FOREIGN KEY (empleado) REFERENCES Usuario (usuarioID)
);

CREATE TABLE Archivo(
    archivoID INT NOT NULL,
    nombre VARCHAR(75) NOT NULL,
    ruta VARCHAR(255) NOT NULL,
    reporte INT NOT NULL,
    PRIMARY KEY (archivoID),
    FOREIGN KEY (reporte) REFERENCES Reporte (reporteID)
);

CREATE TABLE Mensaje(
    mensajeID INT NOT NULL,
    contenido VARCHAR(255) NOT NULL,
    fechaHora DATETIME NOT NULL DEFAULT NOW(),
    reporte INT NOT NULL,
    emisor INT NOT NULL,
    PRIMARY KEY (mensajeID),
    FOREIGN KEY (reporte) REFERENCES Reporte (reporteID),
    FOREIGN KEY (emisor) REFERENCES Usuario (usuarioID)
);