import { Component, OnInit } from '@angular/core';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-informacion',
  standalone: true,
  templateUrl: './informacion.html',
  styleUrls: ['./informacion.css'],
  imports: [NgForOf]
})
export class InformacionComponent implements OnInit {
  gastos: string[] = [];

  ngOnInit(): void {
    this.gastos = ['Vivienda', 'Salud', 'Educación'];
  }
  mensaje() 
 { 
   alert('Esta es información adicional'); 
 }
 mensaje1(gasto:string) 
 { 
   alert('Esta es información adicional sobre ' + gasto); 
 }
 borrarDeducible(gasto: string) 
 { 
   for(let i=0;i<this.gastos.length;i++) 
   { 
     if(gasto==this.gastos[i]) 
     { 
        this.gastos.splice(i,1); 
     } 
 
   } 
 }

}
