import { Component, OnInit } from '@angular/core';
import { MatDialog,  MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PersonasService } from 'src/app/personas.service';
import { EditPersonComponent } from '../edit-person/edit-person.component';

@Component({
  selector: 'app-list-person',
  templateUrl: './list-person.component.html',
  styleUrls: ['./list-person.component.css']
})
export class ListPersonComponent implements OnInit {
  list_dataPersona: any;
  constructor(private per: PersonasService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getPersonas();
  }
  getPersonas(){
    this.per.getpersonas().subscribe(data =>{
      this.list_dataPersona = data.result;
     })
  }
  editar(item: any){
    const dialogRef = this.dialog.open(EditPersonComponent, {
      height: '500px',
      width: '1000px',
      hasBackdrop: true,
      data: { val: item }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result.event == 'OK') {
        
        this.getPersonas();
    }});
  }

}
