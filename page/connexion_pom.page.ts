import {Page} from "@playwright/test"

export class ConnexionPom{

 readonly page : Page

constructor(p:Page)
 {
    this.page=p ;

 }

 
 //definier les locators de la page login

 elements = {
   
    username : ()=> this.page.getByRole("textbox",{name:"Email"}),
    password : ()=> this.page.getByRole("textbox",{name:"Mot de passe"}),
    loginButton : ()=> this.page.getByRole("button",{name:"Se Connecter"})

     
 }




 
  async clickbutton()
 {
    await this.elements.loginButton().click() 

 }

  async SaisirUsername(identifiant : string)
 {
    await this.elements.username().fill(identifiant) 

 }
   async Saisirpassword(identifiant : string)
 {
    await this.elements.password().fill(identifiant) 

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
