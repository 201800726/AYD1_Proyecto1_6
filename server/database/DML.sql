USE ReportesMixco;

INSERT INTO Rol (tipo) VALUES ('Admin');
INSERT INTO Rol (tipo) VALUES ('Empleado');
INSERT INTO Rol (tipo) VALUES ('Ciudadano');

INSERT INTO CategoriaReporte (nombre) VALUES ('Baches en las calles');
INSERT INTO CategoriaReporte (nombre) VALUES ('Actos de delincuencia');

INSERT INTO EntidadEncargada(nombre, correo, numerotelefono)
VALUES ('Direccion General de Caminos','dgc@gmail.com',22099);

INSERT INTO EntidadEncargada(nombre, correo, numerotelefono)
VALUES ('Policia Naional Civil','pnc@gmail.com',110);

INSERT INTO EncargadoCategoria( categoriaReporte, encargado)
VALUES (1,1);
INSERT INTO EncargadoCategoria( categoriaReporte, encargado)
VALUES (1,1);

INSERT INTO Zona (nombre) VALUES ('Zona 1');
INSERT INTO Zona (nombre) VALUES ('Zona 2');
INSERT INTO Zona (nombre) VALUES ('Zona 3');
INSERT INTO Zona (nombre) VALUES ('Zona 4');
INSERT INTO Zona (nombre) VALUES ('Zona 5');
INSERT INTO Zona (nombre) VALUES ('Zona 6');
INSERT INTO Zona (nombre) VALUES ('Zona 7');
INSERT INTO Zona (nombre) VALUES ('Zona 8');
INSERT INTO Zona (nombre) VALUES ('Zona 9');
INSERT INTO Zona (nombre) VALUES ('Zona 10');
INSERT INTO Zona (nombre) VALUES ('Zona 11');

INSERT INTO Usuario (usuario, contrasenia, DPI, nombre, apellido, fechaNacimiento) 
    VALUES ('admin', 'admin', '1234', 'Administrador', 'Administrador', '2021-06-01');

INSERT INTO RolUsuario (usuario, rol) VALUES ('1', '1');
