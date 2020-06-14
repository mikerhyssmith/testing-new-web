import {Selector} from 'testcafe';

fixture`VR Scene`.page`http://192.168.1.101:3000/VR`.clientScripts({path: './XRPolyfill.js'});

//
test.only('VR Operations', async t => {
  await t.click('.a-enter-vr-button');

  await t.eval(() => window.dispatchEvent(new CustomEvent('webxr-startup', {})));

  await t.wait(1);

  // Move headset to nice position
  await t.eval(() =>
    window.dispatchEvent(
      new CustomEvent('webxr-pose', {
        detail: {
          position: [0, 2.9209601609299263, -0.035540310942602016],
          quaternion: [0, 0, 0, 1],
        },
      })
    )
  );

  await t.wait(1);

  await t.eval(() =>
    window.dispatchEvent(
      new CustomEvent('webxr-input-pose', {
        detail: {
          objectName: 'leftController',
          position: [-0.5, 2.010985123446669, -1],
          quaternion: [0, 0, 0, 1],
        },
      })
    )
  );

  await t.wait(1);

  await t.eval(() =>
    window.dispatchEvent(
      new CustomEvent('webxr-input-pose', {
        detail: {
          objectName: 'leftController',
          position: [-0.5, 2.010985123446669, -1],
          quaternion: [0.32434351430869257, 0, 0, 0.9459393663052019],
        },
      })
    )
  );

  await t.wait(1);

  await t.eval(() =>
    window.dispatchEvent(
      new CustomEvent('webxr-input-pose', {
        detail: {
          objectName: 'rightController',
          position: [0.9233343253187379, 1.5, -0.9941428844741962],
          quaternion: [0, 0, 0, 1],
        },
      })
    )
  );

  await t.wait(1);

  await t.eval(() =>
    window.dispatchEvent(
      new CustomEvent('webxr-input-pose', {
        detail: {
          objectName: 'rightController',
          position: [0.9233343253187379, 1.5, -0.9941428844741962],
          quaternion: [0.46344459196425486, 0, 0, 0.8861258997338275],
        },
      })
    )
  );
});

// Turn Stereo mode off
// Select vr viewer with controllers
// Move viewport
// Move both controllers
// Screenshot it
