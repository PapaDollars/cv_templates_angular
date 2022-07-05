import { Component, OnInit, VERSION } from '@angular/core';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from 'ngx-qrcode2';

@Component({
  selector: 'app-aboutUS',
  templateUrl: './aboutUS.component.html',
  styleUrls: ['./aboutUS.component.scss']
})
export class AboutUSComponent implements OnInit {
  title = 'QRcode';
  name = 'Angular' + VERSION.major;
  elementType = NgxQrcodeElementTypes.URL;
  correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
  value = "foubaalain2@gmail.com";
  constructor() { }

  ngOnInit() {
  }

}
