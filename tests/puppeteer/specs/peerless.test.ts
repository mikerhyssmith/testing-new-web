import puppeteer from "puppeteer";
import { v4 as uuid } from "uuid";

describe("Peerless", () => {
  it("should spin up two browser windows", async () => {
    jest.setTimeout(20000);
    const testRoomId = `test${uuid()}`;

    const browserHost = await puppeteer.launch({ headless: false });
    const hostPage = await browserHost.newPage();
    await hostPage.goto(`http://prpc.me/host/${testRoomId}`);

    await hostPage.waitFor(2000);

    await hostPage.click("a[href='/Bubbles']");

    await hostPage.waitFor(2000);

    const browserClient = await puppeteer.launch({ headless: false });
    const browserPage = await browserClient.newPage();
    await browserPage.goto(`http://prpc.me/${testRoomId}`);

    await browserPage.waitFor("button");

    await browserPage.waitFor(2000);

    await browserPage.click("button[style='grid-area: 2 / 2 / auto / auto;']");

    await browserPage.waitFor(2000);

    const bubble = await hostPage.$(
      "div[style='grid-area: 1 / 1 / auto / auto;']"
    );

    await browserPage.waitFor(2000);

    expect(bubble).toBeNull();

    await browserHost.close();
    await browserClient.close();
  });
});
