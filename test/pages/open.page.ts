export class OpenPage {
    async openPage(page: string){
        await browser.url(page)
    }
}