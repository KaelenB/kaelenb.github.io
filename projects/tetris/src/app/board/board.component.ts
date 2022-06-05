import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { COLS, BLOCK_SIZE, ROWS } from "../known.const";

@Component({
  selector: "app-board",
  template: `
    <div style="display:flex;" fxLayout="row">
      <canvas #board class="game-board"></canvas>
      <div fxFill>
        <div>
          <h1>TETRIS</h1>
          <p>Score: {{ points }}</p>
          <p>Lines: {{ lines }}</p>
          <p>Level: {{ level }}</p>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      :host,
      h1 {
        font-family: "Press Start 2P", cursive;
      }
    `,
  ],
})
export class BoardComponent implements OnInit {
  @ViewChild("board", { static: true })
  private canvas!: ElementRef<HTMLCanvasElement>;
  private ctx!: CanvasRenderingContext2D;
  public points: number = 0;
  public lines: number = 0;
  public level: number = 0;

  constructor() {}
  ngOnInit(): void {
    this.initBoard();
  }

  initBoard() {
    this.ctx = this.canvas.nativeElement.getContext(
      "2d"
    ) as CanvasRenderingContext2D;

    this.ctx.canvas.width = COLS * BLOCK_SIZE;
    this.ctx.canvas.height = ROWS * BLOCK_SIZE;
  }

  play() {}
}
