import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/firebase.service';

@Component({
  selector: 'app-leisure',
  templateUrl: './leisure.component.html',
  styleUrls: ['./leisure.component.scss']
})
export class LeisureComponent implements OnInit {

  constructor(public cruds : FirebaseService) { }

  LeisureADD: boolean = false;
  LeisureEDIT: boolean = false;

  LeisureADDfunction() {
    this.LeisureADD = true;
  }
  idloise !: any;
  noms !: any;
  mail !: any;
  LeisureEDITfunction(loisirs : any){
    this.LeisureEDIT = true;
    this.idloise = loisirs.id;

    this.noms = loisirs.nom;
    alert(this.noms)
    this.mail = loisirs.mail;
  }
  loisir !: any[];
  ngOnInit() {

    this.cruds.get_loisirs().subscribe(data =>{
      this.loisir = data;
      console.log(data);
   })
  }


  setloisir(nom : any)
  {
    let Record = {
      'nom' : nom,
      'mail' : ''
    }
    this.cruds.create_loisirs(Record).then(res =>{
      console.log(res);
      alert("Loisir ajouter ");
    }).catch(error =>{
      console.log(error);
    });
  }

  Deleteloisir( loisir : any)
  {
    this.cruds.deleteLoisir(loisir.id);
  }

  updateloisir(nom : string)
  {
    let Record = {
      'id' : this.idloise,
      'nom' : nom,
      'mail' : this.mail
    }
    this.cruds.updateloisir(Record);
  }
}
