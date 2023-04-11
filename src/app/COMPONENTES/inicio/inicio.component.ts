import { Component } from '@angular/core';
import  decone from 'jwt-decode'

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  token=<string>localStorage.getItem('token');
  decodeToken:any=decone(this.token);
}
