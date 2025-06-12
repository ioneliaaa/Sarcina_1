# Sarcina 1 – Teste Playwright

Acest repository conține:

- ✅ Codul testelor automate:
  - `anonymous_report.spec.js` – completare raport anonim
  - `verificare_raport.spec.js` – verificare în raportul „Comunități demografice”
- 📸 Captură din interfață: `verificare_demografice.png`
- 📄 Raport HTML generat de Playwright: `index.html`

---

## 🔍 Vizualizare raport

Pentru a vedea rezultatele rulării testelor, deschide fișierul:

➡️ `index.html` (direct din browser)

---

## 🔧 Opțional – rulare locală

Dacă dorești să rulezi testele pe calculatorul propriu:

```bash
npm install
npx playwright test --reporter=html
npx playwright show-report
