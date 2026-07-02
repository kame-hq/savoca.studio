// Mobile audit: real-render screenshots of every tab at iPhone viewport.
import puppeteer from "puppeteer-core";

const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const TABS = [["", "m-home"], ["systems", "m-systems"], ["pricing", "m-pricing"], ["work", "m-work"], ["about", "m-about"]];

const browser = await puppeteer.launch({ executablePath: CHROME, headless: "new" });
const page = await browser.newPage();
await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
await page.emulateMediaFeatures([{ name: "prefers-reduced-motion", value: "reduce" }]);

for (const [hash, name] of TABS) {
  const url = hash ? `http://localhost:3000/#${hash}` : "http://localhost:3000/";
  await page.goto(url, { waitUntil: "networkidle2", timeout: 30000 });
  if (hash) { // hash nav on same page doesn't refire; force via reload already done by goto
    await page.evaluate((h) => { window.location.hash = h; window.dispatchEvent(new HashChangeEvent("hashchange")); }, hash);
  }
  await new Promise((r) => setTimeout(r, 1800));
  // full-page for tall tabs
  await page.screenshot({ path: `/tmp/${name}.png`, fullPage: hash !== "" });
  console.log(name, "ok");
}
await browser.close();
