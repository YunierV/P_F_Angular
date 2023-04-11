import { Component,OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CargoServicioService,Cargo} from 'src/app/SERVICIOS/cargo-servicio.service';
import { EmpleadoServicioService,Empleado } from 'src/app/SERVICIOS/empleado-servicio.service';

@Component({
  selector: 'app-update-empleado',
  templateUrl: './update-empleado.component.html',
  styleUrls: ['./update-empleado.component.css']
})
export class UpdateEmpleadoComponent implements OnInit {
  empleado:Empleado={
    id_empleado:'',
    nombre_empleado:'',
    apellidos:'',
    correo:'',
    usuario:'',
    password:'',
    telefono:'',
    nombre:''

  }

  array:any;

  ListarCargos:Cargo[]=[];

  constructor(private servivioEmpleado:EmpleadoServicioService,private router:Router,private servicio_cargo:CargoServicioService
    ,private activateRoute:ActivatedRoute){

  }


  ngOnInit(): void {
    this.listarCargos();

    const id_entrada=<string>this.activateRoute.snapshot.paramMap.get('id');
      
      if(id_entrada){
        this.servivioEmpleado.getUnEmpleado(id_entrada).subscribe(res=>{
          this.array=res;
          this.empleado=this.array[0];
        },err=>{console.log(err);
        })
      }

  }


  actualizar(){
    let variable=String(this.empleado.id_empleado);
    this.servivioEmpleado.updateEmpleado(variable,this.empleado).subscribe();
    this.router.navigate(['/empleado'])
    
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


}
