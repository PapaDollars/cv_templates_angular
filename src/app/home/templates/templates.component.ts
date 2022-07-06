import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { jsPDF } from "jspdf";
import { FirebaseService } from 'src/app/firebase.service';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.scss']
})
export class TemplatesComponent implements OnInit {

  constructor(public cruds : FirebaseService) { }

  // function download template 1 in PDF
  @ViewChild('content1', { static: false }) element1!: ElementRef;
  Template1_PDF() {
    const getDisplay: any = document.querySelector("#template1");

    if (getDisplay.classList != null) {
      getDisplay.style.display = "block";

      let pdf = new jsPDF('p', 'pt', 'a1');
      pdf.html(this.element1.nativeElement, {
        callback: (pdf) => {
          pdf.save("generateCV_Template_1.pdf");
          getDisplay.style.display = "none";
        }
      });
    }
  }
  // function download template 2 in PDF
  @ViewChild('content2', { static: false }) element2!: ElementRef;
  Template2_PDF() {
    const getDisplay: any = document.querySelector("#template2");

    if (getDisplay.classList != null) {
      getDisplay.style.display = "block";

      let pdf = new jsPDF('p', 'pt', 'a3');
      pdf.html(this.element2.nativeElement, {
        callback: (pdf) => {
          pdf.save("generateCV_Template_2.pdf");
          getDisplay.style.display = "none";
        }
      });
    }
  }
    // function download template 3 in PDF
    @ViewChild('content3', { static: false }) element3!: ElementRef;
    Template3_PDF() {
      const getDisplay: any = document.querySelector("#template3");

      if (getDisplay.classList != null) {
        getDisplay.style.display = "block";

        let pdf = new jsPDF('p', 'pt', 'a3');
        pdf.html(this.element3.nativeElement, {
          callback: (pdf) => {
            pdf.save("generateCV_Template_3.pdf");
            getDisplay.style.display = "none";
          }
        });
      }
    }
    // function download template 4 in PDF
    @ViewChild('content4', { static: false }) element4!: ElementRef;
    Template4_PDF() {
      const getDisplay: any = document.querySelector("#template4");

      if (getDisplay.classList != null) {
        getDisplay.style.display = "block";

        let pdf = new jsPDF('p', 'pt', 'a3');
        pdf.html(this.element4.nativeElement, {
          callback: (pdf) => {
            pdf.save("generateCV_Template_4.pdf");
            getDisplay.style.display = "none";
          }
        });
      }
    }
    // function download template 5 in PDF
    @ViewChild('content5', { static: false }) element5!: ElementRef;
    Template5_PDF() {
      const getDisplay: any = document.querySelector("#template5");

      if (getDisplay.classList != null) {
        getDisplay.style.display = "block";

        let pdf = new jsPDF('p', 'pt', 'a3');
        pdf.html(this.element5.nativeElement, {
          callback: (pdf) => {
            pdf.save("generateCV_Template_5.pdf");
            getDisplay.style.display = "none";
          }
        });
      }
    }
    // function download template 6 in PDF
    @ViewChild('content6', { static: false }) element6!: ElementRef;
    Template6_PDF() {
      const getDisplay: any = document.querySelector("#template6");

      if (getDisplay.classList != null) {
        getDisplay.style.display = "block";

        let pdf = new jsPDF('p', 'pt', 'a3');
        pdf.html(this.element6.nativeElement, {
          callback: (pdf) => {
            pdf.save("generateCV_Template_6.pdf");
            getDisplay.style.display = "none";
          }
        });
      }
    }
    info!: any[];
  ngOnInit() {
    this.cruds.get_user().subscribe(data  =>{
      // console.log(data[0].mail);
      this.info =data;
      console.log(data) ;
    })
  }

}
