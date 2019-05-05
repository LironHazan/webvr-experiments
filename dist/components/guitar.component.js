
AFRAME.registerComponent('guitar', {
    schema: {},
    init: function () {
        this.el.setAttribute('gltf-model', './assets/guitar/ElectricGuitar.gltf');

        this.el.addEventListener('mousedown', () => {
            this.el.removeAttribute('particle-system');
            this.el.setAttribute('particle-system', 'color: #EFAF00,#000000; maxAge: 2; duration: 0.5; particleCount: 200');
            MyAframeApp.observeStore$.sound = './assets/guitar/disco-guitar-notes-2.wav';
            MyAframeApp.observeStore$.clicks = MyAframeApp.observeStore$.clicks + 1;
        })
    }
});

