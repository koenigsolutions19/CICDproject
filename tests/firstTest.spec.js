const {test, expect} = require('@playwright/test');
test('Debugging using pause method', async({page})=>{
        //page.on('console', msg => console.log('PAGE LOG:', msg.text()));
        await page.goto("https://register.rediff.com/register/register.php?FormName=user_details");
        await page.locator('[placeholder="Enter your full name"]').fill("Satish Gangwani");
        await page.locator('[placeholder="Enter Rediffmail ID"]').fill("sati1234");
        await page.locator('[placeholder="Enter password"]').fill("P@$$w0rd");
        await page.locator('[placeholder="Retype password"]').fill("P@$$w0rd123");
        await page.locator('[class="day"]').selectOption("19");
        await page.locator('[class="middle month"]').selectOption("FEB");
        await page.locator('[class="year"]').selectOption("1995");
        //await page.pause();
        await page.locator('[value="f"]').check();
        await page.locator('[id="country"]').selectOption("Australia");
        await page.locator('[placeholder="Enter recovery email"]').fill("satishgangwani19@rediffmail.com");
        await page.locator('[id="mobno"]').fill("8149888888");
        await page.locator('[title="Rediff Home"]').click();
        await page.waitForTimeout(2000);

        await page.locator('[class="signin"]').click();
        await page.waitForTimeout(2000);

        await page.getByText('Forgot password?').click();
        await page.waitForTimeout(4000);

});
