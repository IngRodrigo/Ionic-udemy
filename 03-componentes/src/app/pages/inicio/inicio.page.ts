import { Component, OnInit } from '@angular/core';
interface Componente{
  name: string,
  icon: string,
  redirecto: string
}
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  componentes: Componente[]=[
    {
      icon:"american-football-outline",
      name:"Action sheet",
      redirecto:'/action-sheet'
    },
    {
      icon:"logo-apple-appstore",
      name:"Alert",
      redirecto:'/alert'
    },
    {
      icon:"person-circle-outline",
      name:"Avatar",
      redirecto:'/avatar'
    },
    {
      icon:"radio-button-on-outline",
      name:"Botones",
      redirecto:'/buttons'
    },
    {
      icon:"card-outline",
      name:"Card",
      redirecto:'/card'
    },
    {
      icon:"checkmark-circle-outline",
      name:"Check",
      redirecto:'/check'
    },
    {
      icon:"calendar-outline",
      name:"Date Time",
      redirecto:'/date-time'
    },
    {
      icon:"car-outline",
      name:"Fab",
      redirecto:'/fab'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
