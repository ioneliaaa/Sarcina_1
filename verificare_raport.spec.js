const { test, expect } = require('@playwright/test');

test('Verificare existență în raportul „Comunități demografice” după completare', async ({ page }) => {
  // 1. Login
  await page.goto('https://app.qsystemsglobal.com/VST/MDA/WebApp');
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByLabel('User Name').fill('maria.ivanova8492@samplemail.net');
  await page.locator('input#Password').first().fill('N024374');
  await page.getByRole('button', { name: 'Login' }).click();

  // 2. Așteaptăm să apară un element din dashboard
  await page.getByText('Home', { timeout: 10000 });

  // 3. Navighează spre raportul demografic
  await page.goto('https://app.qsystemsglobal.com/VST/MDA/WebApp/reports/communitydemographics');

  // 4. Așteaptă încărcarea
  await page.waitForLoadState('networkidle');

  // 5. Caută textul „Female” în tabel 
  const record = page.locator('text=Female');

  const found = await record.first().isVisible().catch(() => false);

  expect(found).toBeTruthy(); // test va eșua dacă nu e găsit

  // 6. Captură pentru evidență
  await page.screenshot({ path: 'verificare_demografice.png' });
});
