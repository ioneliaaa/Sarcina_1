const { test, expect } = require('@playwright/test');

test('Creare raport anonim și verificare', async ({ page }) => {
  // 1. Deschidem pagina principală
  await page.goto('https://app.qsystemsglobal.com/VST/MDA/WebApp');

  // 2. Apăsăm pe butonul mare "LOGIN"
  await page.getByRole('link', { name: 'Login' }).click();

  // 3. Completăm email și parolă
  await page.getByLabel('User Name').fill('maria.ivanova8492@samplemail.net');
  await page.locator('input#Password').first().fill('N024374');

  // 4. Apăsăm pe butonul Login real
await page.getByRole('button', { name: 'Login' }).click();

// 5. Așteptăm să apară un element din dashboard (nu doar networkidle!)
await page.getByText('Home', { timeout: 10000 });

// 6. Navigăm spre pagina raportului anonim
await page.goto('https://app.qsystemsglobal.com/VST/MDA/WebApp/identbarriers/casereportinganonymous');
console.log('Current URL:', await page.url());

  // 7. Apăsăm pe "Add"
  await page.getByRole('button', { name: 'Add' }).click();

  // 8. Selectăm primul chestionar
  await page.getByRole('button', { name: /DREPTUL LA VIAȚA/i }).click();

  // 9. Completăm formularul
  await page.getByRole('combobox', { name: 'Age group' }).click();
  await page.getByText('19 - 24 years').click();

  await page.getByRole('combobox', { name: 'Gender' }).click();
  await page.getByText('Female').click();

// 10. Completam campul pt studii
  //await page.getByRole('combobox', { name: 'Studies level' }).click();
  //await page.getByText('Universitare', {exact:true}).click();
  await page.getByRole('combobox', { name: 'Studies level' }).click();
await page.waitForSelector('.dx-overlay-wrapper >> text=Universitare', { state: 'visible' });
await page.locator('.dx-overlay-wrapper >> text=Universitare').first().click();

//11. Completăm câmpul pentru nr de telefon
  await page.getByRole('textbox', { name: 'Phone' }).fill('0751234567');

  //12. Completăm campul pt identifacrea 
  await page.getByRole('combobox', { name: 'I identify myself as...' }).click();
  await page.getByText('Nici una din cele menționate').click();

  // 13. Completăm câmpul pentru "Location Type"

  await page.getByRole('combobox', { name: 'Location Type' }).click();
  await page.getByText('City').click();

  // 14.Deschide dropdown-ul "Type of User"
await page.locator('.dx-dropdowneditor-input-wrapper').nth(6).click();
await page.locator('.dx-overlay-wrapper >> text=Medical worker').click();


  // 15. Salvam raportul anonim
   await page.getByRole('button', { name: 'Save' }).click();

 
});
