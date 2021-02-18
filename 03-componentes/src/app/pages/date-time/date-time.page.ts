import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {
fechaNaci = new Date
  constructor() { }

  ngOnInit() {
  }
  seCambioFecha(evento){
    console.log(evento);
    console.log(new Date(evento.details.value));
  }
}
