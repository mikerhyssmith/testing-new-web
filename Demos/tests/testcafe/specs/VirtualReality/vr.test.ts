import {Selector} from 'testcafe';

fixture`VR Scene`.page`http://192.168.1.101:3000/VR`.clientScripts({path: './XRPolyfill.js'});

//
test('VR Operations', async t => {
  await t.click('.a-enter-vr-button');

  await t.eval(() => window.dispatchEvent(new CustomEvent('webxr-startup', {})));

  await t.wait(5);

  // Move headset to nice position
  await t.eval(() =>
    window.dispatchEvent(
      new CustomEvent('webxr-pose', {
        detail: {
          position: [0, 1.6, 0],
          quaternion: [0.0591070585079188, 0, 0, 0.9982516494524524],
        },
      })
    )
  );

  await t.wait(5);

  await t.eval(() =>
    window.dispatchEvent(
      new CustomEvent('webxr-input-pose', {
        detail: {
          objectName: 'leftController',
          position: [-0.35426010291138066, 2.181907487836397, -0.9347428044842365],
          quaternion: [0, 0, 0, 1],
        },
      })
    )
  );

  await t.eval(() =>
    window.dispatchEvent(
      new CustomEvent('webxr-input-pose', {
        detail: {
          objectName: 'leftController',
          position: [-0.35426010291138066, 2.181907487836397, -0.9347428044842365],
          quaternion: [0.13277635009760216, 0, 0, 0.9911460239817135],
        },
      })
    )
  );

  await t.wait(5);

  await t.eval(() =>
    window.dispatchEvent(
      new CustomEvent('webxr-input-pose', {
        detail: {
          objectName: 'leftController',
          position: [-0.35426010291138066, 2.181907487836397, -0.9347428044842365],
          quaternion: [
            0.1321495386271847,
            0.09619391148856207,
            0.012886372098586677,
            0.9864670152860103,
          ],
        },
      })
    )
  );

  await t.wait(5);

  await t.eval(() =>
    window.dispatchEvent(
      new CustomEvent('webxr-input-pose', {
        detail: {
          objectName: 'leftController',
          position: [-0.35426010291138066, 2.181907487836397, -0.9347428044842365],
          quaternion: [-0.35426010291138066, 2.181907487836397, -0.9347428044842365],
        },
      })
    )
  );

  await t.wait(5);

  await t.eval(() =>
    window.dispatchEvent(
      new CustomEvent('webxr-input-pose', {
        detail: {
          objectName: 'rightController',
          position: [0.5, 1.5, -1],
          quaternion: [
            0.11105880792389793,
            -0.23805757063635516,
            0.016797565049588317,
            0.9647343551743375,
          ],
        },
      })
    )
  );

  await t.wait(5);

  await t.eval(() =>
    window.dispatchEvent(
      new CustomEvent('webxr-input-pose', {
        detail: {
          objectName: 'rightController',
          position: [0.5, 1.5, -1],
          quaternion: [
            0.16540414967398728,
            -0.23672775300380347,
            0.030224759496951675,
            0.9569158281383723,
          ],
        },
      })
    )
  );

  await t.wait(5);

  await t.eval(() =>
    window.dispatchEvent(
      new CustomEvent('webxr-input-pose', {
        detail: {
          objectName: 'rightController',
          position: [0.5, 1.5, -1],
          quaternion: [
            0.33974595426807347,
            -0.22703636581731948,
            0.07353947052666791,
            0.9097357426360679,
          ],
        },
      })
    )
  );

  await t.wait(5);
});

// Turn Stereo mode off
// Select vr viewer with controllers
// Move viewport
// Move both controllers
// Screenshot it
