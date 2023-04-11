import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoServicioService {
  private URL="http://localhost:3000/empleados";
  constructor(private http:HttpClient) { }

  //obtener nuestros campo de la tabla cargo
  getEmpleado(){
    return this.http.get(this.URL);
  }


  //obtenemos solo el id de un cargo
  getUnEmpleado(id:string){
    return this.http.get(this.URL+'/'+id)
  }

  addEmpleado(empleado:Empleado){
    return this.http.post(this.URL,empleado)
  }

  deleteEmpleado(id:string){
    return this.http.delete(this.URL+'/'+id)
  }

  updateEmpleado(id:string,empleado:Empleado){
    return this.http.put(this.URL+'/'+id,empleado)
  }

}

export interface Empleado{
  id_empleado?:string;
  nombre_empleado?:string;
  apellidos?:string;
  correo?:string;
  usuario?:string;
  password?:string;
  telefono?:string;
  nombre?:string;

}