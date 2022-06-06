import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { COLS, ROWS } from "../known.const";

@Component({
  selector: "app-main-menu",
  template: ` <button (click)="play()" class="play-button">Play</button>`,
  styles: [],
})
export class MainMenuComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  play = () => this.router.navigate(["tetris/game"]);
}
