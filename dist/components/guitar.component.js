
AFRAME.registerComponent('guitar', {
    schema: {},
    init: function () {
        this.el.setAttribute('gltf-model', './assets/guitar/ElectricGuitar.gltf');

        this.el.addEventListener('mousedown', () => {
            MyAframeApp.observeStore$.sound = './assets/guitar/disco-guitar-notes-2.wav';
            MyAframeApp.observeStore$.clicks = MyAframeApp.observeStore$.clicks + 1;
        })
    }
});

