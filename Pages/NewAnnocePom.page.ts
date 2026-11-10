import {Page} from "@playwright/test"

export class NewAnnoncePom{
    readonly page:Page;
    constructor(p:Page){
        this.page = p;
    }

    elements={
      step: (n: number) => this.page.getByTestId(`step-circle-${n}`),

        titre:()=>this.page.locator("#titre"),
        description:()=>this.page.locator("#description"),
        typeEmbarcation: () => this.page.locator('[id^="chip-type-embarcation"]'),
        categorie :()=>this.page.locator('[id^="chip-categorie"]'),
        nbrplaces:()=>this.page.locator("#nombre_places"),
        annéedeconstruction:()=>this.page.locator("#annee_construction"),
        suivantButton:()=>this.page.locator("#btn-next-step"),
        precedentButton:()=>this.page.locator("#btn-prev-step"),
        longueur:()=>this.page.locator("#longueur"),
        largeur:()=>this.page.locator("#largeur"),
        carburant :()=>this.page.locator('[id^="chip-carburant"]'),
        consommation:()=>this.page.locator("#consommation"),
        motorisation:()=>this.page.locator("#motorisation"),
        créneau :()=>this.page.locator('[id^="chip-creneau-"]'),
        permisRequisOui: () => this.page.locator("#toggle-permis-requis-oui"),
        permisRequisNon: () => this.page.locator("#toggle-permis-requis-non"),
        Equipement: () => this.page.locator('[id^="chip-equipement"]'),
        prixJour:()=>this.page.locator("#prix_jour"),
        prixDemijour:()=>this.page.locator("#prix_demi_jour"), 
        prixheure:()=>this.page.locator("#prix_heure"),
        caution:()=>this.page.locator("#caution"),
        moyendep:()=>this.page.locator("#moyens_paiement")
        
    
       
    }

    async getColor(numero: number) {
  return await this.elements.step(numero).evaluate(
    (el) => getComputedStyle(el).backgroundColor
  );
}
    async settitre(u:string){
        await this.elements.titre().fill(u)
    };
  
     async setdescription(u:string){
        await this.elements.description().fill(u)
    };

  async settypeEmbarcation(texte: string){
         await this.elements.typeEmbarcation().filter({ hasText: texte }).click()
    };

      async settypeEquiment(texte: string){
         await this.elements.Equipement().filter({ hasText: texte }).click()
    };
  async setcategorie(texte: string){
       await this.elements.categorie().filter({ hasText: texte }).click()
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

    async setlongueur(u: string) {
        await this.elements.longueur().fill(u)
    };

    async setlargeur(u: string) {
        await this.elements.largeur().fill(u)
    };

    async setcarburant(texte: string) {
        await this.elements.carburant().filter({ hasText: texte }).click()
    };

    async setconsommation(u: string) {
        await this.elements.consommation().fill(u)
    };

    async setmotorisation(u: string) {
        await this.elements.motorisation().fill(u)
    };

    async setcréneau(texte: string) {
        await this.elements.créneau().filter({ hasText: texte }).click()
    };

    async setpermisRequis(oui: boolean) {
        if (oui) {
            await this.elements.permisRequisOui().click()
        } else {
            await this.elements.permisRequisNon().click()
        }
    };
   

    async setprixJour(u:string){
        await this.elements.prixJour().fill(u)
    };

  async setdemiJour(u:string){
        await this.elements.prixDemijour().fill(u)
    };

  async setprixheure(u:string){
        await this.elements.prixheure().fill(u)
    };

 async caution(u:string){
        await this.elements.caution().fill(u)
    };

async moyendeP(u:string){
        await this.elements.moyendep().fill(u)
    };
    


}
