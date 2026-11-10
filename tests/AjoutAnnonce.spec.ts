import { expect, test } from "@playwright/test";

import { AcceuilPom} from "../page/Acceuil_pom.page";

import { LoginPom} from "../page/Login_pom.page";

import {ConnexionPom } from "../page/connexion_pom.page";

import{NewAnnoncePom} from"../Pages/NewAnnocePom.page";

let lp: LoginPom
let Cp: ConnexionPom
let Ac: AcceuilPom
let NA: NewAnnoncePom

test.beforeEach("setup", async({page})=>{

await page.goto("https://app.thrundrz.com/")
Cp = new ConnexionPom(page);
Ac = new AcceuilPom(page);
lp = new LoginPom(page);
NA = new NewAnnoncePom(page);

await lp.clickbuttonConnection()
await expect(page).toHaveURL("https://app.thrundrz.com/login")


})



test("connection", {tag:"@pom"}, async({page})=>
{

   // saisir le nom complet 
   await Cp.SaisirUsername("rouaibra@gmail.com")
   await Cp.Saisirpassword("rouaibra")
   await Cp.clickbutton()
   await page.waitForTimeout(3000)
   await expect(page).toHaveURL(/\/explorer$/)
   await Ac.clickbutton()
   await page.waitForTimeout(3000)
   await expect(page).toHaveURL(/\/annonces\/new$/)
   
   const color = await NA.getColor();
  expect(color).toBe("rgb(21, 101, 192)");

  await NA.settitre("Beau voilier");
  await NA.setdescription("Très bon état");
  await NA.setcategorie()
  await NA.settypeEmbarcation();
  await NA.setnbrplaces("5");
  await NA.setannéedeconstruction("2020");
  await NA.setsuivantButton();
  await page.waitForTimeout(3000)

})




