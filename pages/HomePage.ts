import { Page } from "@playwright/test"
export class HomePage {
    readonly page: Page
    constructor(p: Page) {
        this.page = p
    }
    elements = {
        btnInscription: () => this.page.getByRole("paragraph").nth(0)
    }
    async CLickBtnInscription() {
        await this.elements.btnInscription().click()
    }

}