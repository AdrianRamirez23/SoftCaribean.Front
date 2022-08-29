import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CombosService } from 'src/app/combos.service';
import { Persona } from 'src/app/Models/Persona';
import { PersonasService } from 'src/app/personas.service';
import swal from'sweetalert2';

@Component({
  selector: 'app-edit-person',
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.css']
})
export class EditPersonComponent implements OnInit {
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
  list_pesona: any;
  list_genero: any;
  item: any;
  constructor( @Inject(MAT_DIALOG_DATA) public data: any,
  private com: CombosService,
  private per: PersonasService,
  public dialogRef: MatDialogRef<EditPersonComponent>  ) { }

  ngOnInit(): void {
    this.item = this.data.val;
    console.log(this.item);
    this.listarGenero();
    this.listarPersona();
    this.cargarDatos();
    
  }
  cargarDatos(){
    this.nombres = this.item.dsnombres;
    this.apellidos = this.item.dsapellidos;
    this.email = this.item.dsemail;
    this.doc = this.item.cddocumento;
    this.FechN = this.item.fenacimiento;
    this.pers = this.item.cdtipo;
    this.gen = this.item.cdgenero;
    this.dir = this.item.dsdireccion;
    this.telfijo = this.item.cdtelfonoFijo;
    this.telMovil = this.item.cdtelefonoMovil;
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
editarDatos(){
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
  this.per.updatepersonas(perso).subscribe(data =>{
    swal.fire('Información importante!',data.result,'info');
    this.dialogRef.close({event:'OK', data: true });
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
  }, err => {
    swal.fire('Información importante!',err,'error');
  });
}

}
