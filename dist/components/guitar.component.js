
AFRAME.registerComponent('guitar', {
    init: function () {
        console.log('register guitar component!');
        this.el.setAttribute('gltf-model', './assets/ElectricGuitar.gltf');
        this.el.setAttribute('position', '0 1.5 -7" scale="0.2 0.2 0.2');
    }
});
