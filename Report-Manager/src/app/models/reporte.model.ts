export class Reporte {
  public reporteID: number;
  public descripcion: string;
  public fechaReporte: string;
  public fechaProblema: string;
  public empleadoID: number;
  public nombre: string;
  public apellido: string;
  public estado: string;
  public zona: string;
  public categoria: string;

  constructor() {
    this.reporteID = 0;
    this.empleadoID = 0;
    this.descripcion = '';
    this.fechaReporte = '';
    this.fechaProblema = '';
    this.nombre = '';
    this.apellido = '';
    this.estado = '';
    this.zona = '';
    this.categoria = '';
  }
}
