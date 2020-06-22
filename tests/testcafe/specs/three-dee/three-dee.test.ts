import {Selector} from 'testcafe';
import looksSame from 'looks-same';

fixture`3D Scene`.page`https://mikerhyssmith.github.io/testing-new-web/#/VR`;

test('Check initial view', async t => {
  await t.wait(15000);

  await t.takeElementScreenshot(Selector('canvas'), './canvas/canvas.png');

  looksSame(
    '/home/mike/Github/BristolJS/Demos/tests/testcafe/screenshots/canvas/expected/canvas.png',
    '/home/mike/Github/BristolJS/Demos/tests/testcafe/screenshots/canvas/canvas.png',
    async (_, result) => {
      await t.expect(result.equal).eql(true);
    }
  );
});
