import { TipoRol } from './rol.model';

export class Usuario {
  public usuarioID: number
  public DPI: number;
  public nombre: string;
  public apellido: string
  public fechaNacimiento: string;

  public usuario: string;
  public contrasenia?: string;

  public roles: Array<TipoRol>;

  constructor() {
    this.usuarioID = 0;
    this.DPI = 0;
    this.nombre = '';
    this.apellido = '';
    this.fechaNacimiento = '';

    this.usuario = '';

    this.roles = new Array<TipoRol>();
  }
};
