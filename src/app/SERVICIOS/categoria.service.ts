import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  private URL="http://localhost:3000/categorias";
  constructor(private http:HttpClient) { }

  //obtener nuestros campo de la tabla cargo
  getCategoria(){
    return this.http.get(this.URL);
  }


  //obtenemos solo el id de un cargo
  getUnCategoria(id:string){
    return this.http.get(this.URL+'/'+id)
  }

  addCategoria(categorias:Categorias){
    return this.http.post(this.URL,categorias)
  }

  deleteCategoria(id:string){
    return this.http.delete(this.URL+'/'+id)
  }

  updateCategoria(id:string,categorias:Categorias){
    return this.http.put(this.URL+'/'+id,categorias)
  }


}

export interface Categorias{
  id_categoria?:string;
  nombre?:string;
}
