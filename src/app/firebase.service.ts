import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Item } from 'firebase/analytics';
import { map, window } from 'rxjs';
import { Observable } from 'rxjs';
import { Action } from 'rxjs/internal/scheduler/Action';
import { ThisReceiver } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  [x: string]: any;
  isloggedIn = false;
  
  constructor(public firebaseAuth : AngularFireAuth,public firestoreservice : AngularFirestore) {
   
   }
  Items! : Observable<any[]> 
  async signin(email:string,password :string){
    await this.firebaseAuth.signInWithEmailAndPassword(email,password)
    .then(res=>{
      this.isloggedIn =true
      localStorage.setItem("user",JSON.stringify(res.user))
          document.location.reload();
    })
  }

  async signup(email:string,password :string){
    await this.firebaseAuth.createUserWithEmailAndPassword(email,password)
    .then(res=>{
      this.isloggedIn =true
      localStorage.setItem("user",JSON.stringify(res.user))
      document.location.reload();
    })

    

  }

  logout()
  {
    this.firebaseAuth.signOut();
    localStorage.removeItem('user');
    document.location.reload();
    }
  
    create_information(information : any)
    {
      return this.firestoreservice.collection('information').add(information);
    }

    create_formation(Reccord : any)
    {
      let mail = <string><unknown>localStorage.getItem('user');
      let mails = JSON.parse(mail);
      Reccord['mail'] = mails.email;
      return this.firestoreservice.collection('formation').add(Reccord);
    }

    create_user(Reccord : any)
    {
      // let mail = <string><unknown>localStorage.getItem('user');
      // let mails = JSON.parse(mail);
      // Reccord['mail'] = mails.email;

      return this.firestoreservice.collection('user').add(Reccord);
    }
      
    
    create_competence(Reccord : any)
    {
      let mail = <string><unknown>localStorage.getItem('user');
      let mails = JSON.parse(mail);
      Reccord['mail'] = mails.email;
      return this.firestoreservice.collection('competence').add(Reccord);
    }
    

    create_experience(experience : any)
    {
      let mail = <string><unknown>localStorage.getItem('user');
      let mails = JSON.parse(mail);
      experience['mail'] = mails.email;
      return this.firestoreservice.collection('experience').add(experience);
    }

    create_langue(Record : any)
    {
      let mail = <string><unknown>localStorage.getItem('user');
      let mails = JSON.parse(mail);
      Record['mail'] = mails.email;
      return this.firestoreservice.collection('langue').add(Record);
    }

    create_loisirs(Record :any)
    {
      let mail = <string><unknown>localStorage.getItem('user');
      let mails = JSON.parse(mail);
      Record['mail'] = mails.email;
      return this.firestoreservice.collection('loisirs').add(Record);
    }

    create_Contact(Record : any)
    {
      let mail = <string><unknown>localStorage.getItem('user');
      let mails = JSON.parse(mail);
      Record['mail'] = mails.email;
      return this.firestoreservice.collection('contact').add(Record);
    }

    create_Mial(Record : any)
    {
      let mail = <string><unknown>localStorage.getItem('user');
      let mails = JSON.parse(mail);
      Record['mail'] = mails.email;
      return this.firestoreservice.collection('email').add(Record);
    }

    create_Compte(Record : any)
    {
      let mail = <string><unknown>localStorage.getItem('user');
      let mails = JSON.parse(mail);
      Record['mail'] = mails.email;
      return this.firestoreservice.collection('compte').add(Record);
    }

    create_certification( Record : any)
    {
      let mail = <string><unknown>localStorage.getItem('user');
      let mails = JSON.parse(mail);
      Record['mail'] = mails.email;
      return this.firestoreservice.collection('certification').add(Record);
    }


   
    get_certification()
    {
      let mail = <string><unknown>localStorage.getItem('user');
      let mails = JSON.parse(mail);
      mails = mails.email;
      return this.firestoreservice.collection('certification',ref =>ref.where('mail','==',mails)).snapshotChanges().pipe(map(chamges =>{
        return chamges.map(a =>{
          const data = a.payload.doc.data() as Item;
          data.id = a.payload.doc.id;
          return data;
        })
      }))
    } 

    get_compte()
    {
      let mail = <string><unknown>localStorage.getItem('user');
      let mails = JSON.parse(mail);
      mails = mails.email;
      return this.firestoreservice.collection('compte',ref =>ref.where('mail','==',mails)).snapshotChanges().pipe(map(chamges =>{
        return chamges.map(a =>{
          const data = a.payload.doc.data() as Item;
          data.id = a.payload.doc.id;
          return data;
        })
      }))
    } 



    get_user()
    {
      let mail = <string><unknown>localStorage.getItem('user');
      let mails = JSON.parse(mail);
      mails = mails.email;
      return this.firestoreservice.collection('user',ref =>ref.where('email','==',mails)).snapshotChanges().pipe(map(chamges =>{
        return chamges.map(a =>{
          const data = a.payload.doc.data() as Item;
          data.id = a.payload.doc.id;
          return data;
        })
      }))
    } 

    get_AddresseMail()
    {
      let mail = <string><unknown>localStorage.getItem('user');
      let mails = JSON.parse(mail);
      mails = mails.email;
      return this.firestoreservice.collection('email',ref =>ref.where('mail','==',mails)).snapshotChanges().pipe(map(chamges =>{
        return chamges.map(a =>{
          const data = a.payload.doc.data() as Item;
          data.id = a.payload.doc.id;
          return data;
        })
      }))
    }
  
    get_Contact()
    {
      let mail = <string><unknown>localStorage.getItem('user');
      let mails = JSON.parse(mail);
      mails = mails.email;
      return this.firestoreservice.collection('contact',ref =>ref.where('mail','==',mails)).snapshotChanges().pipe(map(chamges =>{
        return chamges.map(a =>{
          const data = a.payload.doc.data() as Item;
          data.id = a.payload.doc.id;
          return data;
        })
      }))
    }
    
    // get_info()
    // {
    //   let mail = <string><unknown>localStorage.getItem('user');
    //   let mails = JSON.parse(mail);
    //   mails = mails.email;
    //   return this.firestoreservice.collection('information',ref =>ref.where('mail','==',mails)).snapshotChanges().pipe(map(chamges =>{
    //     return chamges.map(a =>{
    //       const data = a.payload.doc.data() as Item;
    //       data.id = a.payload.doc.id;
    //       return data;
    //     })
    //   }))
    // }
    get_formation()
    {
      let mail = <string><unknown>localStorage.getItem('user');
      let mails = JSON.parse(mail);
      mails = mails.email;
      return this.firestoreservice.collection('formation',ref =>ref.where('mail','==',mails)).snapshotChanges().pipe(map(chamges =>{
        return chamges.map(a =>{
          const data = a.payload.doc.data() as Item;
          data.id = a.payload.doc.id;
          return data;
        })
      }))
      

           
      }
 

    

    // ,ref =>ref.where('mail','==',mail)
    

    get_experience()
    {
      let mail = <string><unknown>localStorage.getItem('user');
      let mails = JSON.parse(mail);
      mails = mails.email;
      return  this.firestoreservice.collection('experience',ref =>ref.where('mail','==',mails)).snapshotChanges().pipe(map(chamges =>{
        return chamges.map(a =>{
          const data = a.payload.doc.data() as Item;
          data.id = a.payload.doc.id;
          return data;
        })
      }))
    }

    get_competence()
    {
      let mail = <string><unknown>localStorage.getItem('user');
      let mails = JSON.parse(mail);
      mails = mails.email;
      return  this.firestoreservice.collection('competence',ref =>ref.where('mail','==',mails)).snapshotChanges().pipe(map(chamges =>{
        return chamges.map(a =>{
          const data = a.payload.doc.data() as Item;
          data.id = a.payload.doc.id;
          return data;
        })
      }))
    }

    get_lamgues()
    {
      let mail = <string><unknown>localStorage.getItem('user');
      let mails = JSON.parse(mail);
      mails = mails.email;
      return  this.firestoreservice.collection('langue',ref =>ref.where('mail','==',mails)).snapshotChanges().pipe(map(chamges =>{
        return chamges.map(a =>{
          const data = a.payload.doc.data() as Item;
          data.id = a.payload.doc.id;
          return data;
        })
      }))

        }
     
    get_loisirs()
    {
      let mail = <string><unknown>localStorage.getItem('user');
      let mails = JSON.parse(mail);
      mails = mails.email;
      return  this.firestoreservice.collection('loisirs',ref =>ref.where('mail','==',mails)).snapshotChanges().pipe(map(chamges =>{
        return chamges.map(a =>{
          const data = a.payload.doc.data() as Item;
          data.id = a.payload.doc.id;
          return data;
        })
      }))

    }
  Itemdoc !: AngularFirestoreDocument<Item>
    deletediplome(diploma : Item)
    {

      this.Itemdoc = this.firestoreservice.doc('diplome/'+ diploma);
      this.Itemdoc.delete();
    }

    deletecertification(certification : Item)
    {
      this.Itemdoc = this.firestoreservice.doc("certification/"+certification);
      this.Itemdoc.delete();
    }

    deleteexperience(experience : Item)
    {
      this.Itemdoc = this.firestoreservice.doc('experience/'+ experience);
      this.Itemdoc.delete();
    }

    deleteeCompetence(competenceid : Item)
    {
      this.Itemdoc = this.firestoreservice.doc('competence/'+competenceid);
      this.Itemdoc.delete();
    }

    deleteLangues(langueid : Item)
    {
      this.Itemdoc = this.firestoreservice.doc('langue/'+langueid);
      this.Itemdoc.delete();
    }

    deleteLoisir(Loisirid : Item)
    {
      this.Itemdoc = this.firestoreservice.doc('loisirs/'+Loisirid);
      this.Itemdoc.delete();
    }

    deleteConctact(conctacts : Item)
    {
      this.Itemdoc = this.firestoreservice.doc('contact/'+conctacts);
      this.Itemdoc.delete();
      console.log("Contact Supprimer !"+conctacts)
    }

    deleteAddresseMail(mail : Item)
    {
      this.Itemdoc = this.firestoreservice.doc('email/'+mail);
      this.Itemdoc.delete();
      console.log("email Supprimer !"+mail)
    }

    deletecompte(compte : Item)
    {
      this.Itemdoc = this.firestoreservice.doc('compte/'+compte);
      this.Itemdoc.delete();
      console.log("compte Supprimer !"+compte)
    }

    deleteformation(formation : Item)
    {
      this.Itemdoc = this.firestoreservice.doc('formation/'+formation);
      this.Itemdoc.delete();
      console.log("formation Supprimer !"+formation);
    }

    updateCompetence(competence : Item)
    {
      this.Itemdoc = this.firestoreservice.doc('competence/'+competence.id);
      this.Itemdoc.update(competence);
      console.log('ajour');
    }

    updateExperience(experience : Item)
    {
      this.Itemdoc = this.firestoreservice.doc('experience/'+experience.id);
      this.Itemdoc.update(experience);
      console.log('ajour');
    }


    updatecontact(conctacts : Item)
    {
      this.Itemdoc = this.firestoreservice.doc('contact/'+conctacts.id);
      this.Itemdoc.update(conctacts);
      console.log('ajour !')
    }
 
    updatecertifcatiom( certification : Item)
    {
      this.Itemdoc = this.firestoreservice.doc("certification/"+certification.id);
      this.Itemdoc.update(certification);
    }

    updateFormation(formation : Item)
    {
      this.Itemdoc = this.firestoreservice.doc('formation/'+formation.id);
      this.Itemdoc.update(formation);
      console.log('ajour !')
    }

    updatecompte(compte : Item)
    {
      this.Itemdoc = this.firestoreservice.doc('compte/'+compte.id);
      this.Itemdoc.update(compte);
      console.log('ajour !')
    }

    updateLangue(langue : Item)
    {
      this.Itemdoc = this.firestoreservice.doc('langue/'+langue.id);
      this.Itemdoc.update(langue);
      console.log('ajour !')
    }

    updateAddresseMail(mail : Item)
    {
      this.Itemdoc = this.firestoreservice.doc('email/'+mail.id);
      this.Itemdoc.update(mail);
      console.log('ajour !')
    }


    updateinfo(info : Item){
      this.Itemdoc = this.firestoreservice.doc('user/'+info.id);
      this.Itemdoc.update(info);
      console.log('ajour !')
    }

    updateBio(bioo : Item)
    {
      this.Itemdoc = this.firestoreservice.doc('user/'+bioo.id);
      this.Itemdoc.update(bioo);
      console.log('ajour !')
    }
    updateloisir(loisir : Item)
    {
      this.Itemdoc = this.firestoreservice.doc('loisirs/'+loisir.id);
      this.Itemdoc.update(loisir);
      console.log('ajour !')
    }

    updatedelete(info : Item){
      this.Itemdoc = this.firestoreservice.doc('contact/'+info.id);
      this.Itemdoc.update(info);
      console.log('Conctact ajour !')
    }

    updateDwnloadUrl(Record : Item)
    {
      this.Itemdoc = this.firestoreservice.doc('information/'+Record.id);
      this.Itemdoc.update(Record);
    }

    

} 
