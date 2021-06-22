import { Mensaje } from "./mensaje.model";

export class Chat {
  public reporteID: number;
  public usuarioID: number;
  public nombre: string;
  public apellido: string;

  public mensajes: Array<Mensaje>;

  constructor() {
    this.reporteID = 0;
    this.usuarioID = 0;
    this.nombre = '';
    this.apellido = '';

    this.mensajes = new Array<Mensaje>();
  }
}
