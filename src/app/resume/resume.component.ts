import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-resume",
  template: `
    <div class="pdf-container">
      <pdf-viewer [src]="pdfSrc" [original-size]="true" style="height: 100vh;">
      </pdf-viewer>
    </div>
  `,
  styles: [
    `
      .pdf-container {
        height: 100vh;
      }
    `,
  ],
})
export class ResumeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  pdfSrc = "assets/pdf/resume.pdf";
}
