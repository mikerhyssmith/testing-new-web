import React, {FunctionComponent, useEffect, useState} from 'react';
import 'aframe';
import 'aframe-text-geometry-component';
import {IntersectColourChange} from './IntersectColourChange';
import {EntityGenerator} from './EntityGenerator';

export const VRWorld: FunctionComponent = () => {
  const [inVR, setInVR] = useState(false);

  useEffect(() => {
    window.addEventListener('webxr-pose', e => console.log(e));
    window.addEventListener('webxr-input-pose', e => console.log(e));
    window.addEventListener('webxr-device', e => console.log(e));
    window.addEventListener('webxr-device-init', e => console.log(e));

    document.querySelector('a-scene').addEventListener('enter-vr', function () {
      setInVR(true);
    });

    document.querySelector('a-scene').addEventListener('enter-vr', function () {
      setInVR(false);
    });
  });

  useEffect(() => {
    AFRAME.registerComponent('bubbles', {
      init: function () {
        var box;
        var columns = 10;
        var el = this.el;
        var rows = 7;

        if (el.sceneEl?.isMobile) {
          columns = 10;
          rows = 5;
        }

        for (let x = columns / -2; x < columns / 2; x++) {
          for (let y = 0.5; y < rows; y++) {
            box = document.createElement('a-entity');
            box.setAttribute('mixin', 'bubble');
            box.setAttribute('shader', 'bubble-shader');
            console.log(x, y);
            box.setAttribute('position', {x: x * 1.1, y: y * 1.1, z: 1.5});
            el.appendChild(box);
          }
        }
      },
    });

    AFRAME.registerComponent('shadow-if-mobile', {
      init: function () {
        if (!this.el.sceneEl?.isMobile) {
          this.el.setAttribute('light', {
            castShadow: true,
            shadowMapWidth: 2048,
            shadowMapHeight: 1024,
          });
        }
      },
    });
  }, []);

  return (
    <div style={{position: 'absolute', height: '100%', width: '100%'}}>
      <a-scene
        device-orientation-permission-ui="enabled: false"
        embedded
        background="color: #212"
        antialias="true"
        webxr="referenceSpaceType: local"
      >
        <a-assets>
          <img alt="font-assets" id="pink" src="font-color.jpg" crossOrigin="anonymous" />
          <a-asset-item id="font" src="font.json"></a-asset-item>
        </a-assets>
        <IntersectColourChange />
        <EntityGenerator />

        <a-entity
          position="-3.5 6 -6"
          text-geometry="value: Bubblerappr; font: #font; bevelEnabled: true; bevelSize: 0.05; bevelThickness: 0.05; curveSegments: 12; size: 1; height: 0;"
          material="color:lavenderblush; metalness:1; roughness: 0; sphericalEnvMap: #pink;"
        ></a-entity>

        <a-entity position="0 1.6 0" look-controls wasd-controls></a-entity>
        <a-camera position="0 3 0">
          <a-cursor mouseCursorStylesEnabled={!inVR}></a-cursor>
        </a-camera>
        <a-entity
          id="leftHand"
          laser-controls="hand: left"
          raycaster="objects: [mixin='bubble']"
        ></a-entity>
        <a-entity
          id="rightHand"
          laser-controls="hand: right"
          raycaster="objects: [mixin='bubble']"
          line="color: #118A7E"
        ></a-entity>

        <a-light position="0 0.5 1" intensity="0.75"></a-light>

        <a-entity position="0 -1.6 -10">
          <a-mixin
            id="bubble"
            material="side: double; color: #1addff; transparent: true; opacity: 0.4; metalness:0.1;"
            geometry="primitive:sphere;radius:0.5"
            radius="0.5"
            intersect-color-change
          ></a-mixin>
          <a-entity bubbles></a-entity>

          <a-circle
            rotation="-90 0 0"
            radius="20"
            color="#666"
            position="0 -0.1 0"
            shadow="receive: true"
            roughness="1"
          ></a-circle>

          <a-light type="point" position="0 10 -30" intensity="0.85" shadow-if-mobile></a-light>

          <a-torus
            radius="20"
            arc="190"
            rotation="0 90 0"
            animation="property: rotation; to: 0 450 0; loop: true; dur: 16000; easing: linear"
          ></a-torus>
          <a-torus
            radius="20"
            arc="190"
            rotation="0 45 0"
            animation="property: rotation; to: 0 405 0; loop: true; dur: 16000; easing: linear"
          ></a-torus>
          <a-torus
            radius="20"
            arc="190"
            rotation="0 135 0"
            animation="property: rotation; to: 0 495 0; dir: reverse; loop: true; dur: 16000; easing: linear"
          ></a-torus>
          <a-torus radius="20" arc="360" rotation="-90 0 0"></a-torus>
        </a-entity>
      </a-scene>
    </div>
  );
};
