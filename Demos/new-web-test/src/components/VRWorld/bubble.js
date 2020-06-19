// // @ts-ignore
// /* eslint-disable */
// AFRAME.registerComponent('bubble', {
//   schema: {
//     enabled: {default: true},
//   },
//   init: function () {
//     var scene = this.el.sceneEl.object3D;

//     // Create refraction camera
//     this.refractCamera = new THREE.CubeCamera(0.1, 5000, 512);
//     scene.add(this.refractCamera);

//     // Setup shader
//     var fShader = THREE.FresnelShader;
//     var fresnelUniforms = {
//       mRefractionRatio: {type: 'f', value: 1.02},
//       mFresnelBias: {type: 'f', value: 0.1},
//       mFresnelPower: {type: 'f', value: 2.0},
//       mFresnelScale: {type: 'f', value: 1.0},
//       tCube: {type: 't', value: this.refractCamera.renderTarget.texture}, //  textureCube }
//     };

//     // Create custom material for the shader
//     this.refractMaterial = new THREE.ShaderMaterial({
//       uniforms: fresnelUniforms,
//       vertexShader: fShader.vertexShader,
//       fragmentShader: fShader.fragmentShader,
//     });

//     // this.originalMaterial = this.el.object3DMap.mesh.material;
//   },
//   update: function () {
//     if (this.data.enabled) {
//       this.el.object3DMap.mesh.material = this.refractMaterial;
//       this.refractCamera.position = this.position;
//     } else {
//       // this.el.object3DMap.mesh.material = this.originalMaterial;
//     }
//   },
//   tick: function () {
//     if (!this.refractCamera) {
//       return;
//     }
//     this.refractCamera.updateCubeMap(this.el.sceneEl.renderer, this.el.sceneEl.object3D);
//   },
//   remove: function () {
//     if (!this.refractCamera) {
//       return;
//     }
//     var scene = this.el.sceneEl.object3D;
//     scene.remove(this.refractCamera);
//     this.refractCamera = null;
//     // this.el.object3DMap.mesh.material = this.originalMaterial;
//   },
//   pause: function () {},
//   play: function () {},
// });
