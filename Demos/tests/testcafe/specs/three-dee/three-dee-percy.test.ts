import percy from 'percy';
import {Selector} from 'testcafe';

fixture`3D Scene`.page`http://192.168.1.102:3000/#/VR`.before(async t => {});

test('Check initial view (with Percy)', async t => {
  await t.resizeWindow(1920, 1080);

  await t.wait(15000);

  await t.takeElementScreenshot(Selector('canvas'), './canvas/canvas.png');
});
