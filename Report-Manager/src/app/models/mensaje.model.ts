export class Mensaje {
  public mensajeID: number;
  public contenido: string;
  public fechaHora: string;

  public reporte: number;
  public emisor: number;

  constructor(reporte: number, emisor: number, contenido: string) {
    this.mensajeID = 0;
    this.contenido = contenido;
    this.fechaHora = '';

    this.reporte = reporte;
    this.emisor = emisor;
  }

}
