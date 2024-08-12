const { chromium, firefox, webkit } = require('playwright');

(async () => {
    // Iniciar o navegador
    const browser = await firefox.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();

    // Navegar para o site do Sauce Labs
    await page.goto('https://www.saucelabs.com/');

    // Esperar pelo carregamento e interagir com a página
    await page.waitForSelector('text=Login');
    await page.click('text=Login');

    // Aguarde o redirecionamento e verifique se o URL está correto
    await page.waitForTimeout(2000); // Ajuste conforme necessário
    console.log(`URL após login: ${page.url()}`);

    // Fechar o navegador
    await browser.close();
})();
