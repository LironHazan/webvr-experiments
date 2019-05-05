
AFRAME.registerComponent('keyboard', {
    schema: {},
    init: function () {
        this.el.setAttribute('gltf-model', './assets/guitar/voxel_midi_controller.gltf');

        this.el.addEventListener('mousedown', () => {

            if( MyAframeApp.observeStore$.clicks.length > 10 ){
                this.el.removeAttribute('particle-system');
                this.el.setAttribute('particle-system', 'color: #EFAF00,#000000; maxAge: 2; duration: 0.5; particleCount: 200');
            }
            MyAframeApp.observeStore$.sound = './assets/keyboard/noisy-akai-organ-chord.wav';
            MyAframeApp.observeStore$.clicks = MyAframeApp.observeStore$.clicks + 1;
        })
    }
});

