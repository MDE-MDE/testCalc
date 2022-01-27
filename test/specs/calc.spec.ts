import { ButtonCalculator } from "../pages/buttonCalculator"
import { HomePage } from "../pages/home.page"
import { OpenPage } from "../pages/open.page"
import { SearchPage } from "../pages/search.page"

const Open = new OpenPage()
const Home = new HomePage()
const Search = new SearchPage()
const BtnCalc = new ButtonCalculator()

describe('Вычисление в онлайн калькуляторе', function(){
    it('Открытие главной страницы Google',async () => {
        await Open.openPage('https://www.google.ru/')
        await expect(browser).toHaveTitle('Google')
    })

    it('Ввод в строку поиска calculator',async () => {
        await Home.input.setValue('calculator')
        await expect(Home.searchContainer).toBeDisplayed()
    })

    it('Нажать на кнопку "Поиск в Google"',async () => {
        await Home.clickSearchBtn()
        await expect(Search.resultsSearch).toHaveTextContaining('Результатов:')
        console.log('!!!: ' + await Search.resultsSearch.getText())
    })

    it('Вставить выражение " 1 * 2 - 3 + 1 " и вычислить', async () => {
        await BtnCalc.print(' 1 * 2 - 3 + 1 ')
        await Search.clickEqualButton()
    })

    it('Скриншот результата вычисления', async () => {
        await browser.saveScreenshot('resulCalculator.png')
    })
})