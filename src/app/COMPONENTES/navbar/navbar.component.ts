import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  rutas = [
    { rutas: "/home", nombre: "Home", ruraActive: "active" },
    { rutas: "/empleado", nombre: "Empleados", ruraActive: "active" },
    { rutas: "/cargo", nombre: "Cargo", ruraActive: "active" },
    { rutas: "/categoria", nombre: "Categoria", ruraActive: "active" },
  ]

  constructor(private jwHlper:JwtHelperService,private router:Router) {

  }

  ngOnInit(): void {

  }

  deleteToken(){
    const token=localStorage.getItem('token');
    if(!this.jwHlper.isTokenExpired(token) || localStorage.getItem('token')){
      this.router.navigate(['login']);
      return localStorage.removeItem('token')
      
    }

}
}