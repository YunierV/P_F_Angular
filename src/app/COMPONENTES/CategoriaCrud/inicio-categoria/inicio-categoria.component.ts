import { Component,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { CategoriaService,Categorias} from 'src/app/SERVICIOS/categoria.service';

@Component({
  selector: 'app-inicio-categoria',
  templateUrl: './inicio-categoria.component.html',
  styleUrls: ['./inicio-categoria.component.css']
})

export class InicioCategoriaComponent implements OnInit{

  ListarCategoria:Categorias[]=[];
  categoria:Categorias={
    id_categoria:'',
    nombre:''
  }

  
  constructor(private router:Router,private servivio_categoria:CategoriaService){}

  ngOnInit(): void {
  this.listarCategoria();
}

  listarCategoria(){
      this.servivio_categoria.getCategoria().subscribe(
        res=>{
          console.log(res);
          
            this.ListarCategoria=<any>res;
        }
        
      );
  }
  eliminar(id:any){
    this.servivio_categoria.deleteCategoria(id).subscribe(
      res=>{
        this.listarCategoria();
        console.log();
        
      }
    )
  }
  modificar(id:any){
    this.router.navigate(['/categoriaEdit/'+id]);
  }

  agregar(){
    delete this.categoria.id_categoria;
    this.servivio_categoria.addCategoria(this.categoria).subscribe(
      res=>{
        this.listarCategoria();
        
      }
    )
  }


}
