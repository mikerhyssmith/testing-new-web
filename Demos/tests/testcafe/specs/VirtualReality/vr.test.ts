import {Selector} from 'testcafe';

fixture`VR Scene`.page`http://192.168.1.101:3000/VR`.clientScripts({path: './XRPolyfill.js'});

//
test.only('VR Operations', async t => {
  // Need to try this with ngrok
  await t.click('.a-enter-vr-button');
  await t.eval(() =>
    window.dispatchEvent(
      new CustomEvent('webxr-pose', {detail: {position: [0.0], quaternion: [0, 20]}})
    )
  );
});
