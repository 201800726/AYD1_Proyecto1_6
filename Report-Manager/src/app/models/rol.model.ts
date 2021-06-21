export enum TipoRol {
  administrador = 'administrador',
  empleado = 'empleado',
  desconocido = 'desconocido'
}

export class Rol {
  public rolID: number;
  public tipo: string;

  constructor(rolID: number, tipo: string) {
    this.rolID = rolID;
    this.tipo = tipo;
  }

  public getTipo(): TipoRol {
    const tipos: any = {
      'Admin': TipoRol.administrador,
      'Empleado': TipoRol.empleado,
    }
    return tipos[this.tipo] || TipoRol.desconocido;
  }
}
