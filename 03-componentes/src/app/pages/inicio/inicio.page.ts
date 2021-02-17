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
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
