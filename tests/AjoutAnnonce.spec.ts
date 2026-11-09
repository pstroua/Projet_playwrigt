import { expect, test } from "@playwright/test";

import { AcceuilPom} from "../page/Acceuil_pom.page";

import { LoginPom} from "../page/Login_pom.page";

import {ConnexionPom } from "../page/connexion_pom.page";

let lp: LoginPom
let Cp: ConnexionPom
let Ac: AcceuilPom

test.beforeEach("setup", async({page})=>{

await page.goto("https://app.thrundrz.com/")
Cp = new ConnexionPom(page);
Ac = new AcceuilPom(page);
lp = new LoginPom(page);
await lp.clickbuttonConnection()
await expect(page).toHaveURL("https://app.thrundrz.com/login")

})



test("connection", {tag:"@pom"}, async({page})=>
{

   // saisir le nom complet 
   await Cp.SaisirUsername("rouaibra@gmail.com")
   await Cp.Saisirpassword("rouaibra")
   await Cp.clickbutton()
   await expect(page).toHaveURL(/\/explorer$/)
   await Ac.clickbutton()
   await expect(page).toHaveURL(/\/annonces\/new$/)


   
   
})


