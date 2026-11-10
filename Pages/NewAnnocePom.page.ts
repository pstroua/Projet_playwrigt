import {Page} from "@playwright/test"

export class NewAnnoncePom{
    readonly page:Page;
    constructor(p:Page){
        this.page = p;
    }

    elements={
       numero1: () => this.page.getByTestId("step-circle-1"),
        titre:()=>this.page.locator("#titre"),
        description:()=>this.page.locator("#description"),
        typeEmbarcation: () => this.page.locator('[id^="chip-type-embarcation"]'),
        categorie :()=>this.page.locator('[id^="chip-categorie"]'),
        nbrplaces:()=>this.page.locator("#nombre_places"),
        annéedeconstruction:()=>this.page.locator("#annee_construction"),
        suivantButton:()=>this.page.locator("#btn-next-step"),
        precedentButton:()=>this.page.locator("#btn-prev-step")
    }

    async getColor(){
    return await this.elements.numero1().evaluate(
      (el) => getComputedStyle(el).backgroundColor
    );
    
  }
    async settitre(u:string){
        await this.elements.titre().fill(u)
    };
  
     async setdescription(u:string){
        await this.elements.description().fill(u)
    };

  async settypeEmbarcation(){
        await this.elements.typeEmbarcation().click()
    };
  async setcategorie(){
        await this.elements.categorie().click()
    };
     async setnbrplaces(u:string){
        await this.elements.nbrplaces().fill(u)
    };
     async setannéedeconstruction(u:string){
        await this.elements.annéedeconstruction().fill(u)
    };

    async setsuivantButton(){
        await this.elements.suivantButton().click()
    };
    async setprecedentButton(){
        await this.elements.precedentButton().click()
    };
   


}
