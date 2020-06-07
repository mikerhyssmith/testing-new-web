import { Selector } from "testcafe";

fixture`Getting Started`.page`http://192.168.1.101:3000`;

test("My first test", async (t) => {
  await t.click(Selector("button"));
});
