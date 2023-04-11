import { Token } from '@angular/compiler';
import { Component,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/SERVICIOS/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  user={
    usuario:"emerson",
    password:"2004"
  }

  ngOnInit(): void {
  }

  constructor(private _serviceEmpleado:AuthService,private router:Router){

  }

  login(){
    console.log(this.user);
    this._serviceEmpleado.singin(this.user).subscribe((res:any)=>{
      console.log(res);
    
        localStorage.setItem('token',res.token)
        this.router.navigate(['home']);

    },
    err=>{
      console.log(err);
      
    })
    
  }

}
