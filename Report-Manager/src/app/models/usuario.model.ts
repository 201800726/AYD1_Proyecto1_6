import { TipoRol } from './rol.model';

export class Usuario {
  public usuarioID: number
  public DPI: string;
  public nombre: string;
  public apellido: string
  public fechaNacimiento: string;

  public usuario: string;
  public contrasenia?: string;

  public roles: Array<TipoRol>;

  constructor() {
    this.usuarioID = 0;
    this.DPI = '';
    this.nombre = '';
    this.apellido = '';
    this.fechaNacimiento = '';

    this.usuario = '';

    this.roles = new Array<TipoRol>();
  }
};
