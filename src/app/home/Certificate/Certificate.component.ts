import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Certificate',
  templateUrl: './Certificate.component.html',
  styleUrls: ['./Certificate.component.scss']
})
export class CertificateComponent implements OnInit {


  constructor() { }

  CertificateADD: boolean = false;
  CertificateEDIT: boolean = false;

  CertificateADDfunction() {
    this.CertificateADD = true;
  }
  CertificateEDITfunction() {
    this.CertificateEDIT = true;
  }


  ngOnInit() {

  }

}
