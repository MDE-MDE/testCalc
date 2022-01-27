export class SearchPage {
    get resultsSearch(){
        return $('#result-stats')
    }

    get historyCalc(){
        return $('[jsname="VkJw6"]')
    }

    get resultCalc(){
        return $('#cwos')
    }

    get equalButton(){
        return $('[jsname="Pt8tGc"]')
    }

    async clickEqualButton(){
        await this.equalButton.click()
    }

    get btnCalc(){
        return $('.ElumCf').$$('.PaQdxb')
    }

}