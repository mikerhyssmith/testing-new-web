import {Selector} from 'testcafe';

fixture`VR Scene`.page`http://192.168.1.101:3000/VR`;

test('Check initial view (with Percy)', async t => {
  // Need to try this with ngrok
  await t.click('.a-enter-vr-button');
});
