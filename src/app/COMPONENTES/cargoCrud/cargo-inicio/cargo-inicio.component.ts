import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { CargoServicioService,Cargo} from 'src/app/SERVICIOS/cargo-servicio.service';

@Component({
  selector: 'app-cargo-inicio',
  templateUrl: './cargo-inicio.component.html',
  styleUrls: ['./cargo-inicio.component.css']
})
export class CargoInicioComponent implements OnInit  {


  ListarCargos:Cargo[]=[];
  cargo:Cargo={
    id_cargo:'',
    nombre:''
  }
  constructor(private cargo_servcio:CargoServicioService,private router:Router){}


  ngOnInit(): void {
    this.listarCargos();
  }

  listarCargos(){
    this.cargo_servcio.getCargo().subscribe(res=>{
      this.ListarCargos=<any>res;
    },
    err=>{
      console.log('error :',err);
      
    }
    )
  };


  eliminar(idC:any){
    let id:string=String(idC);
    this.cargo_servcio.deleteCargo(id).subscribe(
      res=>{
        console.log(id);
          console.log('Usuario eliminado');
          this.listarCargos();
        })
  
  }

  modificar(idC:any){
    let id=String(idC);
    this.router.navigate(['/cargoEdit/'+id])
  }

  agregar(){
    delete this.cargo.id_cargo;
    
    this.cargo_servcio.addCargo(this.cargo).subscribe(res=>{
      this.listarCargos();
      this.cargo.nombre=''
    });
    
    

  }

}
