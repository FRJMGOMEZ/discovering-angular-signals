import { Component, signal } from '@angular/core';

interface MenuItem {
  title:string,
  route:string
}

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent {

  menuItems = signal<MenuItem[]>([
    { title: 'Contador', route: 'counter' },
    { title: 'Usuario', route: 'user-info' },
    { title: 'Mutaciones', route: 'mutaciones' }
  ])

  /* menuItems:MenuItem[] = [
    {title:'Contador',route:'counter'},
    {title:'Usuario',route:'user-info'},
    {title:'Mutaciones',route:'mutaciones'}
  ]; */

}
