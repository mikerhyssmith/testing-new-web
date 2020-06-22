import {Selector} from 'testcafe';

fixture`VR Scene`.page`http://192.168.1.102:3000/#/VR`.clientScripts({path: './XRPolyfill.js'});

//
test('VR Operations', async t => {
  await t.click('.a-enter-vr-button');

  await t.eval(() => window.dispatchEvent(new CustomEvent('webxr-startup', {})));

  await t.wait(100);

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

  await t.wait(100);

  await t.eval(() =>
    window.dispatchEvent(
      new CustomEvent('webxr-input-pose', {
        detail: {
          objectName: 'leftController',
          position: [-0.4765484304032655, 1.5817679517585326, -0.9985388952922977],
          quaternion: [0.22253746257453721, 0, 0, 0.9749241394851637],
        },
      })
    )
  );

  await t.eval(() =>
    window.dispatchEvent(
      new CustomEvent('webxr-input-pose', {
        detail: {
          objectName: 'leftController',
          position: [-0.4765484304032655, 1.5817679517585326, -0.9985388952922977],
          quaternion: [
            0.22235033245943145,
            0.03997281928489417,
            0.009124248149510761,
            0.9741043329486344,
          ],
        },
      })
    )
  );

  await t.wait(100);

  await t.eval(() =>
    window.dispatchEvent(
      new CustomEvent('webxr-input-pose', {
        detail: {
          objectName: 'leftController',
          position: [-0.4765484304032655, 1.5817679517585326, -0.9985388952922977],
          quaternion: [
            0.22141713324505227,
            0.0977034328096352,
            0.022301913699418544,
            0.9700160395416665,
          ],
        },
      })
    )
  );

  await t.wait(100);

  await t.eval(() =>
    window.dispatchEvent(
      new CustomEvent('webxr-input-pose', {
        detail: {
          objectName: 'leftController',
          position: [-0.4765484304032655, 1.5817679517585326, -0.9985388952922977],
          quaternion: [
            0.21910697605217708,
            0.1705225952442864,
            0.03892371121031805,
            0.9598953704764077,
          ],
        },
      })
    )
  );

  await t.wait(100);

  await t.eval(() =>
    window.dispatchEvent(
      new CustomEvent('webxr-input-pose', {
        detail: {
          objectName: 'leftController',
          position: [-0.4765484304032655, 1.5817679517585326, -0.9985388952922977],
          quaternion: [
            0.21441377595653777,
            0.2610121717015515,
            0.059578980598640335,
            0.9393347241396575,
          ],
        },
      })
    )
  );

  await t.wait(100);

  await t.eval(() =>
    window.dispatchEvent(
      new CustomEvent('webxr-input-pose', {
        detail: {
          objectName: 'leftController',
          position: [-0.4765484304032655, 1.5817679517585326, -0.9985388952922977],
          quaternion: [
            0.23339169006922278,
            0.3075200610371413,
            0.06249095637106884,
            0.920355698324389,
          ],
        },
      })
    )
  );

  await t.wait(100);

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

  await t.wait(100);

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

  await t.wait(100);

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

  await t.wait(100);
});

// Turn Stereo mode off
// Select vr viewer with controllers
// Move viewport
// Move both controllers
// Screenshot it
