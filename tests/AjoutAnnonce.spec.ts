import { expect, test } from "@playwright/test";

import { AcceuilPom} from "../page/Acceuil_pom.page";

import { LoginPom} from "../page/Login_pom.page";

import {ConnexionPom } from "../page/connexion_pom.page";

import {AnnoncePom } from "../page/ajout_annonce.page";

import{NewAnnoncePom} from"../Pages/NewAnnocePom.page";

let lp: LoginPom
let Cp: ConnexionPom
let Ac: AcceuilPom
let Ap: AnnoncePom
let NA: NewAnnoncePom

test.beforeEach("setup", async({page})=>{

await page.goto("https://app.thrundrz.com/")
Cp = new ConnexionPom(page);
Ac = new AcceuilPom(page);
lp = new LoginPom(page);
Ap = new AnnoncePom(page);
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
   await expect(page).toHaveURL(/\/explorer$/)
   await Ac.clickbutton()
   await expect(page).toHaveURL(/\/annonces\/new$/)
   await Ap.clickbuttonImage("/Users/ibrahimasorydiallo/Documents/Projet_playwrigt/assets/Alimentaire.jpg")
   await Ap.clickbuttonSuivant()
  expect(Ap.elements.step()).toBeVisible()


  
   
   
   const color = await NA.getColor();
  expect(color).toBe("rgb(21, 101, 192)");
})




