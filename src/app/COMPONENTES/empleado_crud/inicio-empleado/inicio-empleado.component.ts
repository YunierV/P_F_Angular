import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CargoServicioService,Cargo} from 'src/app/SERVICIOS/cargo-servicio.service';
import { Empleado, EmpleadoServicioService } from 'src/app/SERVICIOS/empleado-servicio.service';

@Component({
  selector: 'app-inicio-empleado',
  templateUrl: './inicio-empleado.component.html',
  styleUrls: ['./inicio-empleado.component.css']
})
export class InicioEmpleadoComponent implements OnInit {

  ListarCargos:Cargo[]=[];
  ListarEmpleado:Empleado[]=[];
  empleado:Empleado={
    id_empleado:'',
    nombre_empleado:'',
    apellidos:'',
    correo:'',
    usuario:'',
    password:'',
    telefono:'',
    nombre:undefined

  }

  constructor(private servivioEmpleado:EmpleadoServicioService,private router:Router,private servicio_cargo:CargoServicioService,){
    
  }

  ngOnInit(): void {
    this.listarEmpleado();
    this.listarCargos()
  }

  listarEmpleado(){
    this.servivioEmpleado.getEmpleado().subscribe(res=>{
      this.ListarEmpleado=<any>res;
      console.log( this.ListarEmpleado=<any>res);
      
    },err=>{
      console.log('err : ',err);
      
    })
  }


  listarCargos(){
    this.servicio_cargo.getCargo().subscribe(res=>{
      this.ListarCargos=<any>res;
    },
    err=>{
      console.log('error :',err);
      
    }
    )
  };




  eliminar(idE:any){
    this.servivioEmpleado.deleteEmpleado(idE).subscribe(
      res=>{
        console.log(idE);
          console.log('empledo eliminado');
          this.listarEmpleado();
        })
  }

  modificar(idE:any){
    this.router.navigate(['/empleado/'+idE])
  }

  agregar(){
    delete this.empleado.id_empleado;
    
    

    this.servivioEmpleado.addEmpleado(this.empleado).subscribe(res=>{
      this.listarEmpleado();
      this.empleado.nombre_empleado='';
      this.empleado.apellidos='';
      this.empleado.correo='';
      this.empleado.password='';
      this.empleado.telefono=''
      this.empleado.usuario='';
      

    })
    
  }

}
