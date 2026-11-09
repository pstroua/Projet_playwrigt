import {Page} from "@playwright/test"

export class AnnoncePom{

    
 readonly page : Page

constructor(p:Page)
 {
    this.page=p ;

 }

 
 //definier les locators de la page login

 elements = {
   
    
    imagebutton : ()=> this.page.locator("#photo-input-0"),
    suivant : ()=> this.page.locator("#btn-next-step"),
    step : () => this.page.locator("[data-testid= 'step-2-infos-principales']")

 
 }




 
  async clickbuttonImage(s: string)
 {
    await this.elements.imagebutton().setInputFiles(s)

 }

  async clickbuttonSuivant()
 {
    await this.elements.suivant().click() 

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
