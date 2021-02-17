import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  mensajes:any[]=[];//definimos un arreglo de tipo any vacio
  //inyectar el servicio que creamos al constructor de la clase
  constructor(private dataservices: DataService) {}

  ngOnInit(): void {
    this.dataservices.getPosts().subscribe((posts:any) => {
      console.log(posts);
      this.mensajes=posts;
    });
  }

  escucharClick(event:any){
    console.log(`Click en: ${event}`);
  }
}
