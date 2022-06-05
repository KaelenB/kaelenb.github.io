import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainMenuComponent } from "./main-menu/main-menu.component";
import { BoardComponent } from "./board/board.component";

const routes: Routes = [
  {
    path: "tetris/menu",
    component: MainMenuComponent,
  },
  {
    path: "tetris/game",
    component: BoardComponent,
  },
  {
    path: "tetris",
    redirectTo: "tetris/menu",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
