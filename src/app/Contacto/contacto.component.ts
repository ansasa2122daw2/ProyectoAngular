import { Component } from '@angular/core';
import { NgxIndexedDBService, IndexDetails } from 'ngx-indexed-db';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css'],
})
export class ContactoComponent {
  title = 'indexeddb-app';
  returnMsg: string;
  submitted: boolean = false;
  fileData: any;
  constructor(private dbService: NgxIndexedDBService) {
    this.returnMsg = '';
  }

  ngOnInit(): void {}

  submitData(form: { value: any }) {
    const data = form.value;

    this.submitted = true;

    if (
      data.nombre &&
      data.apellido &&
      data.telefono &&
      data.email &&
      data.comentario
    ) {
      this.dbService
        .add('Contacto', {
          nombre: data.nombre,
          apellido: data.apellido,
          telefono: data.telefono,
          email: data.email,
          comentario: data.comentario,
        })
        .subscribe((key) => {
          this.returnMsg = 'Data added successfully';
          console.log('key: ', key);
        });
    } else {
      this.returnMsg = 'Enter all form values';
    }
  }
}
