import {Page} from "@playwright/test"

export class LoginPom{
    readonly page:Page;
    constructor(p:Page){
        this.page = p;
    }

    
    elements={
        username:()=>this.page.getByRole("textbox",{ name:"Votre nom complet"}),
        email:()=>this.page.getByRole("textbox",{ name:"Votre@email.com"}),
        motdepass:()=>this.page.getByRole("textbox",{ name:"********"}).nth(0),
        Confirmpass:()=>this.page.getByRole("textbox",{ name:"********"}).nth(1),
        registerrbutton:()=>this.page.getByRole("button",{ name:"Créer un compte"}),
        notif:()=>this.page.locator("[role='alert']")
    }


    async setUsername(u:string){
        await this.elements.username().fill(u)
    }
    async setemail(p:string){
        await this.elements.motdepass().fill(p)
    }
    async setmotdepass(m:string){
        await this.elements.motdepass().fill(m)
    }
    async setconfirmpass(p:string){
        await this.elements.Confirmpass().fill(p)
    }
    async registerrbutton(){
        await this.elements.registerrbutton().click()
    }
    async getErrorMessageText():Promise<string|null>{
        return await this.elements.notif().textContent()
    }
    getMessageError(){
        return this.elements.notif()
    }
    async VisibiliteOfMessage(){
        return await this.elements.notif().isVisible()
    }
    async registerToApp(u:string,p:string,m:string){
        await this.setUsername(u)
        await this.setemail(p)
        await this.setmotdepass(m)
        await this.setconfirmpass(p)
        await this.registerrbutton()
    }

}