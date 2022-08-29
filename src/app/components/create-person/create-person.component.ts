import { Component, OnInit } from '@angular/core';
import { CombosService } from 'src/app/combos.service';
import { Persona } from 'src/app/Models/Persona';
import { PersonasService } from 'src/app/personas.service';
import swal from'sweetalert2';

@Component({
  selector: 'app-create-person',
  templateUrl: './create-person.component.html',
  styleUrls: ['./create-person.component.css']
})
export class CreatePersonComponent implements OnInit {
   list_pesona: any;
   list_genero: any;
   nombres!: string;
   apellidos!: string;
   email!: string;
   doc!: string;
   FechN!: string;
   pers!: string;
   gen!: string;
   dir!: string;
   telfijo!: string;
   telMovil!: string; 
  
  constructor(private com: CombosService,
              private per: PersonasService) { }

  ngOnInit(): void {
    this.listarPersona();
    this.listarGenero();
   
  }
 
  listarPersona(){
     this.com.getPersona().subscribe(data =>{
      this.list_pesona = data.result;

     })
  }
  listarGenero(){
    this.com.getGenero().subscribe(data =>{
     this.list_genero = data.result;
    })
 }
 guardarInfo(){
  
  if(this.nombres === undefined){
    swal.fire('Información importante!','El campo nombres no puede ser vacío','error');
    return ;
  }
  if(this.apellidos === undefined){
    swal.fire('Información importante!','El campo apellidos no puede ser vacío','error');
    return ;
  }
  if(this.email === undefined){
    swal.fire('Información importante!','El campo email no puede ser vacío','error');
    return ;
  }
  if(this.doc === undefined){
    swal.fire('Información importante!','El campo Documento no puede ser vacío','error');
    return ;
  }
  if(this.FechN === undefined){
    swal.fire('Información importante!','El campo Fecha nacimiento no puede ser vacío','error');
    return ;
  }
  if(this.gen === undefined){
    swal.fire('Información importante!','El campo Genero no puede ser vacío','error');
    return ;
  }
  if(this.telfijo === undefined){
    swal.fire('Información importante!','El campo telfono fijo no puede ser vacío','error');
    return ;
  }
  if(this.telMovil === undefined){
    swal.fire('Información importante!','El campo telfono fijo no puede ser vacío','error');
    return ;
  }

  let perso = new Persona();
  perso.Dsnombres = this.nombres;
  perso.Dsapellidos = this.apellidos;
  perso.Dsemail = this.email;
  perso.Cddocumento = this.doc;
  perso.Cdtipo = this.pers;
  perso.Fenacimiento = this.FechN;
  perso.Cdgenero = this.gen;
  perso.Dsdireccion = this.dir;
  perso.CdtelefonoMovil = this.telMovil.toString();
  perso.CdtelfonoFijo = this.telfijo.toString();
  this.per.createpersonas(perso).subscribe(data =>{
    swal.fire('Información importante!',data.result,'info');
    this.nombres = "";
    this.apellidos = "";
    this.email = "";
    this.doc = "";
    this.pers= "";
    this.FechN = "";
    this.gen = "";
    this.dir = "";
    this.telMovil = "";
    this.telfijo = "";
  });
 }

}
