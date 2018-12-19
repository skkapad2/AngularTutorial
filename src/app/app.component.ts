import { Component } from "@angular/core";

@Component({
selector: 'pm-root', //product management & in index.html file it will have tags. Directive is custom element. 
template: `
  <nav class='navbar navbar-expand navar-light bg-light'>
    <a class='navbar-brand'>{{pageTitle}}</a>
    <ul class='nav nav-pills'>
      <li><a class='nav-link' [routerLink]="['/welcome']">Home</a></li>
<li><a class='nav-link'[routerLink]="['/products']">Product List</a></li> 
    </ul>
   </nav>
   <div class='container'>
    <router-outlet></router-outlet>
   </div>
`
// The router link is in addition to the base localhost file
})



export class AppComponent {
  pageTitle: string= 'Acme Product Management';
}