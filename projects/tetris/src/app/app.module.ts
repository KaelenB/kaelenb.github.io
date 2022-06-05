import { ModuleWithProviders, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MainMenuComponent } from "./main-menu/main-menu.component";
import { BoardComponent } from "./board/board.component";

const providers: never[] = [];

@NgModule({
  declarations: [AppComponent, MainMenuComponent, BoardComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

@NgModule({})
export class tetrisSharedModule {
  static forRoot(): ModuleWithProviders<AppModule> {
    return {
      ngModule: AppModule,
      providers: providers,
    };
  }
}
