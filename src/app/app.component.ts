import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `<ul>
      <li><a routerLink="">menu</a></li>
      <li><a routerLink="tetris">tetris</a></li>
    </ul>
    <router-outlet></router-outlet>`,
  styles: [``],
})
export class AppComponent {
  title = "kaelenb.github.io";
}
