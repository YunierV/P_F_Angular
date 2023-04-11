import { Component,OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { CargoServicioService,Cargo } from 'src/app/SERVICIOS/cargo-servicio.service';

@Component({
  selector: 'app-update-cargo',
  templateUrl: './update-cargo.component.html',
  styleUrls: ['./update-cargo.component.css']
})
export class UpdateCargoComponent implements OnInit {

    cargo:Cargo={
      id_cargo:'',
      nombre:''
    }
    array:any;
    constructor(private router:Router,private servicioCargo:CargoServicioService,private activateRoute:ActivatedRoute ){}

    ngOnInit(): void {
      const id_entrada=<string>this.activateRoute.snapshot.paramMap.get('id');
      
      if(id_entrada){
        this.servicioCargo.getUnCargo(id_entrada).subscribe(res=>{
          this.array=res;
          this.cargo=this.array[0];
        },err=>{console.log(err);
        })
      }

    }

    modificar(){
        let variable=String(this.cargo.id_cargo);
        this.servicioCargo.updateCargo(variable,this.cargo).subscribe();
        this.router.navigate(['/cargo'])
    }


}
