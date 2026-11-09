import{test, expect} from "@playwright/test"
import { HomePom } from "../Pages/HomePage"

let Hp:HomePom
test.beforeEach("setup",async({page})=>{
    await page.goto("https://app.thrundrz.com/")
    Hp= new HomePom(page)
})

test("Login Pom valide",async({page})=>{
    await Hp.registerButton()
    await expect(page).toHaveURL("https://app.thrundrz.com/newcompte")
})