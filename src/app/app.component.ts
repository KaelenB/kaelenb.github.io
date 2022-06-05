import { Component } from "@angular/core";

@Component({
  selector: "app-root",
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
export class AppComponent {
  title = "kaelenb.github.io";
  pdfSrc = "assets/pdf/resume.pdf";
}
