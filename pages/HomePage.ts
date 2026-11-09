import {Page} from "@playwright/test"

export class HomePom{
    readonly page:Page;
    constructor(p:Page){
        this.page = p;
    }

   
    elements={
        registerBouton:()=>this.page.getByRole("paragraph").nth(0)
    }

    async registerButton(){
        await this.elements.registerBouton().click()
    }
    





}