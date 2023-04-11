import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CargoServicioService {
  private URL="http://localhost:3000/cargos";

  constructor(private http:HttpClient) { }

  //obtener nuestros campo de la tabla cargo
  getCargo(){
    return this.http.get(this.URL);
  }


  //obtenemos solo el id de un cargo
  getUnCargo(id:string){
    return this.http.get(this.URL+'/'+id)
  }

  addCargo(cargo:Cargo){
    return this.http.post(this.URL,cargo)
  }

  deleteCargo(id:string){
    return this.http.delete(this.URL+'/'+id)
  }

  updateCargo(id:string,cargo:Cargo){
    return this.http.put(this.URL+'/'+id,cargo)
  }


}

export interface Cargo{
  id_cargo?:string;
  nombre?:string;
}
