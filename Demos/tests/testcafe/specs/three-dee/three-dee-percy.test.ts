// @ts-ignore
import percySnapshot from '@percy/testcafe';

fixture`3D Scene`.page`http://192.168.1.101:3000/VR`;

test('Check initial view (with Percy)', async t => {
  // Need to try this with ngrok
  await percySnapshot(t, 'rendered a 3D Scene', {enableJavaScript: true});
});
