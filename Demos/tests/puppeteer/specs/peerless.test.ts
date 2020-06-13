import puppeteer from "puppeteer";

describe("Peerless", () => {
  it("should spin up two browser windows", async () => {
    const browserHost = await puppeteer.launch({ headless: false });
    const page = await browserHost.newPage();
    await page.goto("http://192.168.1.101:3000/network");

    const browserClient = await puppeteer.launch({ headless: false });
  });
});
