USE ReportesMixco;

INSERT INTO Rol (tipo) VALUES ('Admin');
INSERT INTO Rol (tipo) VALUES ('Empleado');
INSERT INTO Rol (tipo) VALUES ('Usuario');

INSERT INTO Usuario (usuario, contrasenia, DPI, nombre, apellido, fechaNacimiento) 
    VALUES ('admin', 'admin', '1234', 'Administrador', 'Administrador', '2021-06-01');

INSERT INTO RolUsuario (usuario, rol) VALUES ('1', '1');
