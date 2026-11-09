import {Page} from "@playwright/test"

export class NewAnnoncePom{
    readonly page:Page;
    constructor(p:Page){
        this.page = p;
    }

    elements={
       numero1: () => this.page.getByTestId("step-circle-1"),
    }

    async getColor(){
    return await this.elements.numero1().evaluate(
      (el) => getComputedStyle(el).backgroundColor
    );
  }

}
