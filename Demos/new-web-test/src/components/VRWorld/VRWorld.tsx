import React, {FunctionComponent, useEffect} from 'react';
import 'aframe';
import {IntersectColourChange} from './IntersectColourChange';
import {EntityGenerator} from './EntityGenerator';
// @ts-nocheck
import './bubble.js';

export const VRWorld: FunctionComponent = () => {
  useEffect(() => {
    window.addEventListener('webxr-pose', e => console.log(e));
    window.addEventListener('webxr-input-pose', e => console.log(e));
    window.addEventListener('webxr-device', e => console.log(e));
    window.addEventListener('webxr-device-init', e => console.log(e));
  });

  useEffect(() => {
    AFRAME.registerShader('bubble-shader', {
      schema: {
        color: {type: 'color', is: 'uniform', default: '#1addff'},
        opacity: {type: 'number', is: 'uniform', default: 0.3},
        emissive: {default: '#000'},
      },
      uniforms: {
        mRefractionRatio: {type: 'f', value: 1.02},
        mFresnelBias: {type: 'f', value: 0.1},
        mFresnelPower: {type: 'f', value: 2.0},
        mFresnelScale: {type: 'f', value: 1.0},
        tCube: {type: 't', value: null},
      },

      vertexShader: [
        'uniform float mRefractionRatio;',
        'uniform float mFresnelBias;',
        'uniform float mFresnelScale;',
        'uniform float mFresnelPower;',

        'varying vec3 vReflect;',
        'varying vec3 vRefract[3];',
        'varying float vReflectionFactor;',

        'void main() {',

        'vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );',
        'vec4 worldPosition = modelMatrix * vec4( position, 1.0 );',

        'vec3 worldNormal = normalize( mat3( modelMatrix[0].xyz, modelMatrix[1].xyz, modelMatrix[2].xyz ) * normal );',

        'vec3 I = worldPosition.xyz - cameraPosition;',

        'vReflect = reflect( I, worldNormal );',
        'vRefract[0] = refract( normalize( I ), worldNormal, mRefractionRatio );',
        'vRefract[1] = refract( normalize( I ), worldNormal, mRefractionRatio * 0.99 );',
        'vRefract[2] = refract( normalize( I ), worldNormal, mRefractionRatio * 0.98 );',
        'vReflectionFactor = mFresnelBias + mFresnelScale * pow( 1.0 + dot( normalize( I ), worldNormal ), mFresnelPower );',

        'gl_Position = projectionMatrix * mvPosition;',

        '}',
      ].join('\n'),

      fragmentShader: [
        'uniform samplerCube tCube;',

        'varying vec3 vReflect;',
        'varying vec3 vRefract[3];',
        'varying float vReflectionFactor;',

        'void main() {',

        'vec4 reflectedColor = textureCube( tCube, vec3( -vReflect.x, vReflect.yz ) );',
        'vec4 refractedColor = vec4( 1.0 );',

        'refractedColor.r = textureCube( tCube, vec3( -vRefract[0].x, vRefract[0].yz ) ).r;',
        'refractedColor.g = textureCube( tCube, vec3( -vRefract[1].x, vRefract[1].yz ) ).g;',
        'refractedColor.b = textureCube( tCube, vec3( -vRefract[2].x, vRefract[2].yz ) ).b;',

        'gl_FragColor = mix( refractedColor, reflectedColor, clamp( vReflectionFactor, 0.0, 1.0 ) );',

        '}',
      ].join('\n'),
    });

    AFRAME.registerComponent('boxes', {
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
            box.setAttribute('position', {x: x * 1, y: y * 1, z: 1.5});
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
        <IntersectColourChange />
        <EntityGenerator />
        <a-entity position="0 1.6 0" camera look-controls wasd-controls></a-entity>
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
            geometry="primitive: sphere"
            radius="1"
            opacity="0.4"
            rotation="0 0 -35"
            scale="0.5 0.5 0.5"
            intersect-color-change
            shadow="cast: true; receive: false"
          ></a-mixin>
          {/* <a-entity boxes></a-entity> */}

          <a-entity bubble id="bubblex"></a-entity>

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
