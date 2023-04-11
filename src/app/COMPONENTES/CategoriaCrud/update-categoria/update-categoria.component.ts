import { Component,OnInit} from '@angular/core';
import { Router,ActivatedRoute} from '@angular/router';
import { CategoriaService ,Categorias} from 'src/app/SERVICIOS/categoria.service';

@Component({
  selector: 'app-update-categoria',
  templateUrl: './update-categoria.component.html',
  styleUrls: ['./update-categoria.component.css']
})
export class UpdateCategoriaComponent implements OnInit {

  categoria:Categorias={
    id_categoria:'',
    nombre:''
  }
  array:any;
  constructor(private router:Router,private servicios_categoria:CategoriaService, private activite:ActivatedRoute){}
  
ngOnInit(): void {
  const idEntrada=<string>this.activite.snapshot.paramMap.get('id');
  if(idEntrada){
    this.servicios_categoria.getUnCategoria(idEntrada).subscribe(
      res=>{
        this.array=res;
        this.categoria=this.array[0];
      }
    )
  }
}

modificar(){
  let variableId=String(this.categoria.id_categoria);
  this.servicios_categoria.updateCategoria(variableId,this.categoria).subscribe();
  this.router.navigate(['/categoria']);
}

}
