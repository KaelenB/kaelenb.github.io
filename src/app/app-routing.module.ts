import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ResumeComponent } from "./resume/resume.component";
import { tetrisSharedModule } from "../../projects/tetris/src/app/app.module";

const routes: Routes = [
  {
    path: "resume",
    component: ResumeComponent,
  },
  {
    path: "tetris",
    loadChildren: () =>
      import("../../projects/tetris/src/app/app.module").then(
        (m) => m.tetrisSharedModule
      ),
  },
  {
    path: "**",
    redirectTo: "resume",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), tetrisSharedModule.forRoot()],
  exports: [RouterModule],
})
export class AppRoutingModule {}
