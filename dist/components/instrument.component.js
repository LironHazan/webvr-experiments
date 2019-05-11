AFRAME.registerComponent('instrument', {
    schema: {
    },
    init: function () {
        this.el.addEventListener('mousedown', () => {

          //  this.el.removeAttribute('particle-system');
          //  this.el.setAttribute('particle-system', 'color: #EFAF00,#000000; maxAge: 2; duration: 0.5; particleCount: 200');
        });

        this.el.addEventListener('animationcomplete', () => {
            this.el.setAttribute('scale', '1 1 1');
            this.el.components['random-position'].update();
        })
    }
});

