import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { IUsers } from './appJSON';
import { FirebaseService } from 'src/app/firebase.service';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/compat/storage';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AnyMxRecord } from 'dns';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss'],
  providers: [MessageService]
})
export class InformationComponent implements OnInit {


  constructor(private messageService: MessageService,public cruds : FirebaseService,public crudStorage : AngularFireStorage,public firestoreservice : AngularFirestore) { }

  // Start PopPup Dialog
  InformationEDIT: boolean = false;
  OccupationADD: boolean = false;
  OccupationEDIT: boolean = false;
  ContactADD: boolean = false;
  ContactEDIT: boolean = false;
  EmailADD: boolean = false;
  EmailEDIT: boolean = false;
  DescriptionADD: boolean = false;
  DescriptionEDIT: boolean = false;
  // end PopPup Dialog

  // Button plus
  TooltipIformation!: MenuItem[];
  TooltipDescription!: MenuItem[];
  task !: AngularFireUploadTask;
  ref ! : AngularFireStorageReference;
  updateImage(event : any)
  {
   
     const id = Math.random().toString(36).substring(2)
     this.ref=this.crudStorage.ref(id)
     this.task=this.ref.put(event.target.files[0])
     this.task.then((data )=>{
      data.ref.getDownloadURL().then(url=>{
        this.firestoreservice.collection('user').doc(this.info[0].id).update({photo:url});
      })
     })
  } 

  setcontact(contact : string)
  {

    let Record ={
      'contact' :'',
      'mail':''
    };
     Record['contact']=contact;

    this.cruds.create_Contact(Record).then(res =>{
      console.log(res);
      alert("Contact ajouter ");
    }).catch(error =>{
      console.log(error);
    });
  }

  updateinfo(prenom : string , nom : string ,dateN : string ,LiueN : string)
{
  let Record = this.info[0];
  Record.nom = nom;
  Record.prenom = prenom;
  Record.dateNaissance = <Date><unknown>dateN;
  Record.site = LiueN;
  this.cruds.updateinfo(Record);
}
  // start Occupation Button plus
  OccupationADDfunction() {
    this.OccupationADD = true;
  }
  OccupationEDITfunction() {
    this.OccupationEDIT = true;
  }

  // start Contact Button plus
  ContactADDfunction() {
    this.ContactADD = true;
  }
  cont !: any [];
  num !: any;
  idcontact !: any; 
  mailcontact !: any;
  ContactEDITfunction(num : any) {
    this.ContactEDIT = true;
    this.num =<any><unknown>num.contact;
    this.idcontact = num.id;
    this.mailcontact = num.mail;
    alert(num.contact);
  }

  // start Email Button plus
  EmailADDfunction() {
    this.EmailADD = true;
  }
  idemail !: any;
  mails !: any;
  emaill !: any;
  EmailEDITfunction(mail : any) {
    this.EmailEDIT = true;
    this.idemail = mail.id;
    this.mails = mail.email;
    this.emaill = mail.mail;
  }

  info !:any[];
  conctacts !:any[];
  emails !: any[];
  ngOnInit() {
    
    this.cruds.get_user().subscribe(data  =>{
      // console.log(data[0].mail);
      this.info =data;
      console.log(data) ;
    })
    // start information Button plus
    this.TooltipIformation = [
      {
        tooltipOptions: {
          tooltipLabel: "Edit",
          tooltipPosition: "left",
        },
        icon: 'pi pi-pencil',
        command: () => {
          this.messageService.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
          this.InformationEDIT = true;
        }
      }
    ];
    // end information Button plus

    // start Description Button plus
    this.TooltipDescription = [
      {
        tooltipOptions: {
          tooltipLabel: "Edit",
          tooltipPosition: "left",
        },
        icon: 'pi pi-pencil',
        command: () => {
          this.messageService.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
          this.DescriptionEDIT = true;
        }
      },
      {
        tooltipOptions: {
          tooltipLabel: "Add",
          tooltipPosition: "left",
        },
        icon: 'pi pi-plus',
        command: () => {
          this.messageService.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
          this.DescriptionADD = true;
        }
      }
    ];
    // end DescriptionADD Button plus

    this.cruds.get_Contact().subscribe(data  =>{
      // console.log(data[0].mail);
      this.conctacts =data;
      console.log(data) ;
    })

    this.cruds.get_AddresseMail().subscribe(data =>{
       this.emails = data;
       console.log(data);
    })

  }

  DeleteContact(num : any)
  {
    this.cruds.deleteConctact(num.id);
  }

  DeleteMail(mail : any)
  {
    this.cruds.deleteAddresseMail(mail.id);
  }

  updatecontact(cont : any)
  {
    let Record = {
      "id" : this.idcontact,
      "contact" : cont,
      "mail" : this.mailcontact
    }
    this.cruds.updatecontact(Record);
  }

  updatemail(emailset : any)
  {
    let Record = {
      "id" : this.idemail,
      "email" : emailset,
      "mail" : this.emaill
    }
    this.cruds.updateAddresseMail(Record);
  }

  setmail(email : any)
  {
    let Record = {
      'email' : email,
      'mail' : ''
    }
     this.cruds.create_Mial(Record)
  }

  updatedescription(biogr : any)
  {
     let Reccord ={
      'id' : this.info[0].id,
       'biographie' : biogr
     }
     this.cruds.updateBio(Reccord);
  }



 
  

}
