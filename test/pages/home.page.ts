export class HomePage {

    get input(){
        return $('input.gLFyf')
    }

    get searchContainer(){
        return $('[jsname="aajZCb"]')
    }

    get searchBtn(){
        return this.searchContainer.$('input.gNO89b')
    }

    async clickSearchBtn(){
        await this.searchBtn.click()
    }
}