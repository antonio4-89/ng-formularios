import { Component } from '@angular/core';

interface MenuItem {
  title: string;
  route: string;
}



@Component({
  selector: 'app-side-menu',
  standalone: false,
  templateUrl: './side-menu.html',
  styleUrl: './side-menu.css'
})
export class SideMenu {


  public reactiveMenu: MenuItem[] = [
    { title: 'Básicos', route: './reactive/basic' },
    { title: 'Dinámicos', route: './reactive/dynamic' },
    { title: 'Switches', route: './reactive/switches' },
  ];

  public authMenu: MenuItem[] = [
    { title: 'Registro', route: './auth' },
  ];

  anidados: MenuItem[] = [
    {title: 'Anidados', route: './selector'}
  ]
}
