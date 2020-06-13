import {Selector, RequestLogger} from 'testcafe';

const networkTestLogger = RequestLogger('http://eu.httpbin.org/stream-bytes/50000000');

fixture`Network Speed`.page`http://192.168.1.101:3000/network`
  .requestHooks(networkTestLogger)
  .beforeEach(async t => {
    return t.resizeWindow(393, 823);
  });

test('Check internet speed', async t => {
  await t.click(Selector('button').withAttribute('title', 'Test My Network'));

  await t.expect(networkTestLogger.count(() => true)).eql(1);

  await t.expect(Selector('table').exists).eql(true);

  await t.click(Selector('button').withAttribute('title', 'Refresh'));

  await t.expect(networkTestLogger.count(() => true)).eql(2);
});
