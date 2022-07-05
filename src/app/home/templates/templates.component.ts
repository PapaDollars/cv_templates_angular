import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { jsPDF } from "jspdf";

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.scss']
})
export class TemplatesComponent implements OnInit {

  constructor() { }

  // function download template 1 in PDF
  @ViewChild('content1', { static: false }) element1!: ElementRef;

  Template1_PDF() {
    const getDisplay: any = document.querySelector("#template1");

    if (getDisplay.classList != null) {
      getDisplay.style.display = "block";

      let pdf = new jsPDF('p', 'pt', 'a3');
      pdf.html(this.element1.nativeElement, {
        callback: (pdf) => {
          pdf.save("generateCV_Template_1.pdf");
          getDisplay.style.display = "none";
        }
      });
    }
  }

  ngOnInit() {
  }

}
