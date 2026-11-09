import {Page} from "@playwright/test"

export class RegistrePom{

 readonly page : Page

constructor(p:Page)
 {
    this.page=p ;

 }

 //definier les locators de la page login

 elements = {
   
   
    nomComplet: ()=> this.page.getByRole("textbox", {name: "Votre nom complet"}),
    email : ()=> this.page.getByRole("textbox", {name: "votre@email.com"}),
    password : ()=> this.page.getByRole("textbox", {name: "********"}).nth(0),
    passwordConf : ()=> this.page.getByRole("textbox", {name: "********"}).nth(1),
    buttonLogin : ()=> this.page.getByRole("button", {name: "Créer un compte"}), 
    messageAlert: ()=> this.page.getByRole("alert").nth(0)
    
    
   
      
 }



  async SaisirnomComplet(identifiant : string)
 {
    await this.elements.nomComplet().fill(identifiant) 

 }

   async Saisiremail(identifiant : string)
 {
    await this.elements.email().fill(identifiant) 

 }

   async SaisirPassword(identifiant : string)
 {
    await this.elements.password().fill(identifiant) 

 }

    async SaisirPasswordConf(identifiant : string)
 {
    await this.elements.passwordConf().fill(identifiant) 

 }
  async clickbutton()
 {
    await this.elements.buttonLogin().click() 

 }

 
   getvisibilityemessage()
 {
   return this.elements.messageAlert()

 }
 // Definier les methodes associés

//  async SaisirUsername(identifiant : string)
//  {
//     await this.elements.username().fill(identifiant) 

//  }

// async Saisirpassword(mot_de_pass : string)
//  {
//     await this.elements.password().fill(mot_de_pass) 

//  }

//  async clickbutton()
//  {
//     await this.elements.loginButton().click() 

//  }

//   async verifiemessage(): Promise <string |null >
//  {
//    return await this.elements.msgerror().textContent()

//  }

//  getverifiemessage()
//  {
//    return  this.elements.msgerror()

//  }


//   async visibilityemessage()
//  {
//    return await this.elements.msgerror().isVisible()

//  }


//   async LogintoApp(u:string, p:string)
//  {
//     await this.SaisirUsername(u)
//     await this.Saisirpassword(p)
//     await this.clickbutton()


//  }


}
