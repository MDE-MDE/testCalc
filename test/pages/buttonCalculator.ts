import { SearchPage } from "./search.page";

export class ButtonCalculator extends SearchPage {
    async print(a:string){
        let x = a.replace(/\s+/g, '')
        x = x.replace(/\*+/g, '×')
        x = x.replace(/\-+/g, '−')
        x = x.replace(/\/+/g, '÷')

        for(let i = 0; i < x.length; i ++){
            for(let j = 0; j < await this.btnCalc.length; j++){
                if (x[i] == await this.btnCalc[j].getText()){
                    await this.btnCalc[j].click()
                }
            }
        }
    }
}