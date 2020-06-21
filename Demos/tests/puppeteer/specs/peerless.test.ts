import puppeteer from "puppeteer";
import { v4 as uuid } from "uuid";

describe("Peerless", () => {
  it("should spin up two browser windows", async () => {
    const testRoomId = `test${uuid()}`;

    const browserHost = await puppeteer.launch({ headless: false });
    const hostPage = await browserHost.newPage();
    await hostPage.goto(`http://prpc.me/host/${testRoomId}`);

    await hostPage.click("a[href='/Bubbles']");

    const browserClient = await puppeteer.launch({ headless: false });
    const browserPage = await browserClient.newPage();
    await browserPage.goto(`http://prpc.me/${testRoomId}`);

    await browserPage.waitFor("button");

    await browserPage.click("button[style='grid-area: 2 / 2 / auto / auto;']");

    const bubble = await hostPage.$(
      "div[style='grid-area: 1 / 1 / auto / auto;']"
    );

    expect(bubble).toBeNull();

    await browserHost.close();
    await browserClient.close();
  });
});
