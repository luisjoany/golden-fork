import { Component, OnInit } from '@angular/core';
import { OrdenService } from '../../services/orden.service';

@Component({
  selector: 'app-ordenes',
  templateUrl: './ordenes.component.html',
  styleUrls: ['./ordenes.component.css'],
  providers: [OrdenService]
})
export class OrdenesComponent implements OnInit {

  constructor(private ordenService: OrdenService) { }

  ngOnInit(): void {
  }

  addOrden(){

  }

}
