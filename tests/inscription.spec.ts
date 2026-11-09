import { expect, test } from "@playwright/test";

import { LoginPom } from "../page/Login_pom.page";

import { RegistrePom } from "../page/register_pom.page";

let lp: LoginPom
let rp: RegistrePom

test.beforeEach("setup", async({page})=>{

await page.goto("https://app.thrundrz.com/")
lp = new LoginPom(page);
rp = new RegistrePom(page);
await lp.clickbutton()
await expect(page).toHaveURL("https://app.thrundrz.com/newcompte")


})



test("Inscription valide ", {tag:"@pom"}, async({page})=>
{
   // saisir le nom complet 
   await rp.SaisirnomComplet("ibrahima")
   // Random pour l'email
   const random = Math.floor(Math.random()*100980)
   // saisir l'email
   await rp.Saisiremail("dibrahima583i"+random+ "@gmail.com")
   // Saisir le password
   await rp.SaisirPassword("ibrahima")
   // confirmer le mot de pass
   await rp.SaisirPasswordConf("ibrahima")
   // Cliquer le bouton
   await rp.clickbutton()
   // verifier le message 
   await expect( rp.getvisibilityemessage()).toBeVisible()
   // verifier l'url
   await expect(page).toHaveURL("https://app.thrundrz.com/EspaceClient/explorer")

   
})


