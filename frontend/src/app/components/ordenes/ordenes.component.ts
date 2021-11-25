import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Orden } from 'src/app/models/orden';
import { OrdenService } from '../../services/orden.service';

@Component({
  selector: 'app-ordenes',
  templateUrl: './ordenes.component.html',
  styleUrls: ['./ordenes.component.css'],
  providers:[OrdenService],
})
export class OrdenesComponent implements OnInit {

  constructor(public ordenService: OrdenService) { }

  ngOnInit(): void {
    this.getOrdenes();
  }

  addOrden(form?: NgForm){
    if (form?.value._id) {
      this.ordenService.putOrdenes(form.value).subscribe((res) => {
        this.resetForm(form);
        this.getOrdenes();
      });
    } else {
      this.ordenService.putOrdenes(form?.value).subscribe((res) => {
        this.getOrdenes();
        this.resetForm(form);
      });
    }
  }

  getOrdenes() {
    this.ordenService.getOrdenes().subscribe((res) => {
      this.ordenService.ordenes = res;
    });
  }

  editOrdenes(orden: Orden) {
    this.ordenService.selectedOrden = orden;
  }

  deleteOrdenes(_id: string, form: NgForm) {
    if (confirm("Are you sure you want to delete it?")) {
      this.ordenService.deleteOrdenes(_id).subscribe((res) => {
        this.getOrdenes();
        this.resetForm(form);
      });
    }
  }

  resetForm(form?: NgForm){
    if(form){
      form.reset();
      this.ordenService.selectedOrden = new Orden();
    }
  }


}
