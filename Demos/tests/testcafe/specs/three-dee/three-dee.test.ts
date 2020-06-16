import {Selector} from 'testcafe';
// @ts-ignore
import percySnapshot from '@percy/testcafe';
import looksSame from 'looks-same';

fixture`3D Scene`.page`http://192.168.1.101:3000/VR`;

test('Check initial view', async t => {
  await t.takeElementScreenshot(Selector('canvas'), './canvas/canvas.png');

  looksSame(
    '/home/mike/Github/BristolJS/Demos/tests/testcafe/screenshots/canvas/expected/canvas.png',
    '/home/mike/Github/BristolJS/Demos/tests/testcafe/screenshots/canvas/canvas.png',
    async (_, result) => {
      await t.expect(result.equal).eql(true);
    }
  );
});

test.skip('Check initial view (with Percy)', async t => {
  // Need to try this with ngrok
  await percySnapshot(t, 'rendered a 3D Scene', {enableJavaScript: true});
});
