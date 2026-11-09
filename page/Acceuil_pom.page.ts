import {Page} from "@playwright/test"

export class AcceuilPom{

 readonly page : Page

constructor(p:Page)
 {
    this.page=p ;

 }

 //definier les locators de la page login

 elements = {
   
   
   ajoutAnnonce: ()=> this.page.getByRole("button", {name: "Ajouter une annonce"})
    // email : ()=> this.page.getByRole("textbox", {name: "votre@email.com"}),
    // password : ()=> this.page.getByRole("textbox", {name: "********"}).nth(0),
    // passwordConf : ()=> this.page.getByRole("textbox", {name: "********"}).nth(1),
    // buttonLogin : ()=> this.page.getByRole("button", {name: "Créer un compte"}), 
    // messageAlert: ()=> this.page.getByRole("alert").nth(0)
    
    
   
      
 }


  async clickbutton()
 {
    await this.elements.ajoutAnnonce().click() 

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
