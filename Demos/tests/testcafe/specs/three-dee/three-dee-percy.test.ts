// @ts-ignore
import percySnapshot from '@percy/testcafe';

fixture`3D Scene`.page`http://192.168.1.102:3000/VR`;

test('Check initial view (with Percy)', async t => {
  await t.wait(20000);

  await t.click('.a-enter-vr-button');
  // Need to try this with ngrok
  console.log('snapshot');
  await percySnapshot(t, 'rendered a 3D Scene', {enableJavaScript: true});
});
