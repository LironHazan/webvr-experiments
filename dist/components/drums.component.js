
AFRAME.registerComponent('drums', {
    schema: {},
    init: function () {
        this.el.setAttribute('gltf-model', './assets/drums/model.gltf');

        this.el.addEventListener('mousedown', () => {
            if( MyAframeApp.observeStore$.clicks > 10 ){
                this.el.removeAttribute('particle-system');
                this.el.setAttribute('particle-system', 'color: #EFAF00,#000000; maxAge: 2; duration: 0.5; particleCount: 200');
            }
            MyAframeApp.observeStore$.sound = './assets/drums/178_on-a-roll-drums-A.wav';
            MyAframeApp.observeStore$.clicks = MyAframeApp.observeStore$.clicks + 1;
        })
    }
});

