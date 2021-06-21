
DROP DATABASE IF EXISTS ReportesMixco;
CREATE DATABASE ReportesMixco;
USE ReportesMixco;

CREATE TABLE Rol(
    rolID INT NOT NULL AUTO_INCREMENT,
    tipo VARCHAR(25) NOT NULL,
    PRIMARY KEY (rolID)
);

CREATE TABLE Usuario(
    usuarioID INT NOT NULL AUTO_INCREMENT,
    usuario VARCHAR(75) NOT NULL,
    contrasenia VARCHAR(100) NOT NULL,
    DPI INT NOT NULL,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    fechaNacimiento DATE NOT NULL,
    PRIMARY KEY (usuarioID)
);

CREATE TABLE RolUsuario(
    rolusuarioID INT NOT NULL AUTO_INCREMENT,
    usuario INT NOT NULL,
    rol INT NOT NULL,
    PRIMARY KEY (rolusuarioID),
    FOREIGN KEY (usuario) REFERENCES Usuario (usuarioID),
    FOREIGN KEY (rol) REFERENCES Rol (rolID)
);

CREATE TABLE Zona(
    zonaID INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    PRIMARY KEY (zonaID)
);

CREATE TABLE CategoriaReporte(
    categoriaReporteID INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    PRIMARY KEY (categoriaReporteID)
);

CREATE TABLE EntidadEncargada(
    entidadID INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(150) NOT NULL,
    correo VARCHAR(150) NOT NULL,
    numeroTelefono SMALLINT NOT NULL,
    PRIMARY KEY (entidadID)
);

CREATE TABLE EncargadoCategoria(
    encargadoCategoriaID INT NOT NULL AUTO_INCREMENT,
    categoriaReporte INT NOT NULL,
    encargado INT NOT NULL,
    PRIMARY KEY (encargadoCategoriaID),
    FOREIGN KEY (categoriaReporte) REFERENCES CategoriaReporte (categoriaReporteID),
    FOREIGN KEY (encargado) REFERENCES EntidadEncargada (entidadID)
);

CREATE TABLE Reporte(
    reporteID INT NOT NULL AUTO_INCREMENT,
    descripcion VARCHAR(255) NOT NULL,
    fechaReporte DATETIME  NOT NULL DEFAULT NOW(),
    fechaProblema DATETIME  NOT NULL,
    ciudadano INT,
    empleado INT,
    estado CHAR(1) DEFAULT 0 NOT NULL,
    zona INT NOT NULL,
    categoria INT NOT NULL,
    PRIMARY KEY (reporteID),
    FOREIGN KEY (ciudadano) REFERENCES Usuario (usuarioID),
    FOREIGN KEY (empleado) REFERENCES Usuario (usuarioID),
    FOREIGN KEY (zona) REFERENCES Zona (zonaID),
    FOREIGN KEY (categoria) REFERENCES CategoriaReporte (categoriaReporteID)
);

CREATE TABLE Archivo(
    archivoID INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(75) NOT NULL,
    ruta VARCHAR(255) NOT NULL,
    reporte INT NOT NULL,
    PRIMARY KEY (archivoID),
    FOREIGN KEY (reporte) REFERENCES Reporte (reporteID)
);

CREATE TABLE Mensaje(
    mensajeID INT NOT NULL AUTO_INCREMENT,
    contenido VARCHAR(255) NOT NULL,
    fechaHora DATETIME NOT NULL DEFAULT NOW(),
    reporte INT NOT NULL,
    emisor INT NOT NULL,
    PRIMARY KEY (mensajeID),
    FOREIGN KEY (reporte) REFERENCES Reporte (reporteID),
    FOREIGN KEY (emisor) REFERENCES Usuario (usuarioID)
);