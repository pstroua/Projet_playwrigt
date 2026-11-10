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
   await page.waitForTimeout(3000)
   await expect(page).toHaveURL(/\/explorer$/)
   await Ac.clickbutton()
   await page.waitForTimeout(3000)
   await expect(page).toHaveURL(/\/annonces\/new$/)
   //await Ap.clickbuttonImage("C:\Users\bough\Desktop\FormationLogwire\Projet_Playwright\assets\Alimentaire.jpg")
   await Ap.clickbuttonImage("C:\\Users\\bough\\Desktop\\FormationLogwire\\Projet_Playwright\\assets\\Alimentaire.jpg")
   await Ap.clickbuttonSuivant()
  expect(Ap.elements.step()).toBeVisible()

   await page.waitForTimeout(3000)

   const color2 = await NA.getColor(2);
  expect(color2).toBe("rgb(21, 101, 192)");

  await NA.settitre("Beau voilier");
  await NA.setdescription("Très bon état");
  await NA.setcategorie('Yacht');
  await NA.settypeEmbarcation('Voilier');
  await NA.setnbrplaces("5");
  await NA.setannéedeconstruction("2020");
  await NA.setsuivantButton();
  await page.waitForTimeout(3000)

   const color3 = await NA.getColor(3);
  expect(color3).toBe("rgb(21, 101, 192)");

await NA.setlongueur("12");
await NA.setlargeur("4");
await NA.setcarburant("Diesel");
await NA.setconsommation("20");
await NA.setmotorisation("150 cv");
await NA.setcréneau("Journée complète");
await NA.setpermisRequis(true);
await NA.setsuivantButton();
await page.waitForTimeout(3000)

const color4 = await NA.getColor(4);
expect(color4).toBe("rgb(21, 101, 192)");

})




