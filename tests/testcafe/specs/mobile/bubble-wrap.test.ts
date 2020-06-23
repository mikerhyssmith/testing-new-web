import {Selector} from 'testcafe';

fixture`Bubble Pop`.page`https://mikerhyssmith.github.io/testing-new-web/#/bubbles`;

test('Check popping bubbles', async t => {
  await t.expect(Selector('.Bubble').count).eql(99);
  await t.expect(Selector('.Bubble.popped').count).eql(0);

  await t.click(Selector('.Bubble').nth(0));

  await t.click(Selector('.Bubble').nth(10));

  await t.click(Selector('.Bubble').nth(30));

  await t.click(Selector('.Bubble').nth(54));

  await t.click(Selector('.Bubble').nth(37));

  await t.expect(Selector('.Bubble.popped').count).eql(5);
});
