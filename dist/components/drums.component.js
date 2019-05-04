
AFRAME.registerComponent('drums', {
    schema: {},
    init: function () {
        this.el.setAttribute('gltf-model', './assets/drums/model.gltf');

        this.el.addEventListener('mousedown', () => {
            MyAframeApp.observeStore$.sound = './assets/drums/178_on-a-roll-drums-A.wav';
            MyAframeApp.observeStore$.clicks = MyAframeApp.observeStore$.clicks + 1;
        })
    }
});

