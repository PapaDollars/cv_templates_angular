import { Component, OnInit } from '@angular/core';
import { Item } from 'firebase/analytics';
import { FirebaseService } from 'src/app/firebase.service';
@Component({
  selector: 'app-Certificate',
  templateUrl: './Certificate.component.html',
  styleUrls: ['./Certificate.component.scss']
})
export class CertificateComponent implements OnInit {


  constructor(public crud : FirebaseService) { }

  CertificateADD: boolean = false;
  CertificateEDIT: boolean = false;

  CertificateADDfunction() {
    this.CertificateADD = true;
  }
  idcert !: string;
  titres !: string;
  organismes !: string;
  categos !: string
  CertificateEDITfunction(cert : any) {
    this.CertificateEDIT = true;
    this.idcert = <string><any>cert.id;
    this.titres = cert.titre;
    this.organismes = cert.organisme;
    this.categos = cert.categorie;

  }

   certifcation !: any ;
  ngOnInit() {

    this.crud.get_certification().subscribe(data  =>{
      this.certifcation =data;
      console.log(data) ;
    })

  }

  setcert(titre : string, organisme : string ,catego : string)
  {
    let Record = {
      'titre': titre,
	'organisme': organisme,
	'categorie': catego
    }

    this.crud.create_certification(Record).then(res =>{
      console.log(res);
      console.log("certification ajouter ");
    }).catch(error =>{
      console.log(error);
    });
  }

  DeleteCert(Certificates : any)
  {
    this.crud.deletecertification(Certificates);
  }

  updatecerticate(titre : string, organisme : string ,catego : string)
  {
    let Record = {
      'id': this.idcert,
      'titre': titre,
	'organisme': organisme,
	'categorie': catego
    }
    this.crud.updatecertifcatiom(Record);
  }

}
