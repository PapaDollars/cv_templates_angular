// export default interface IUser{
//     email:string,
//     password:string,
//     nom?:string,
//     prenom?:string,
//     dateNaissance?:Date,
//     site?:string,
//     photo?:string,
//     biographie?:string;
//   };

export class IUsers
{
    email!:string;
	password!:string;
	nom?:string;
	prenom?:string;
	dateNaissance?:Date;
	site?:string;
	photo?:string;
	biographie?:string;
    constructor(email :string,password : string , nom : string ,prenom : string, dateN :Date ,site :string, photo : string ,biographie : string )
    {
        this.email = email;
        this.password = password;
        this.nom = nom;
        this.prenom = prenom;
        this.dateNaissance =dateN;
        this.site = site;
        this.photo = photo;
        this.biographie = biographie;
    }
}