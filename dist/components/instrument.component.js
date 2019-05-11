AFRAME.registerComponent('instrument', {
    schema: {},
    init: function () {
        const soundEntity = document.querySelector('#sound');

        switch (this.el.id) {
            case 'guitar':  {
                this.el.addEventListener('mousedown', () => {
                    this.el.removeAttribute('particle-system');
                    this.el.setAttribute('particle-system', 'color: #EFAF00,#000000; maxAge: 2; duration: 0.5; particleCount: 200');
                    soundEntity.setAttribute('src', './assets/guitar/disco-guitar-notes-2.wav');
                    soundEntity.play();
                })
            } break;
            case 'drums':  {
                this.el.addEventListener('mousedown', () => {
                    soundEntity.setAttribute('src', './assets/drums/178_on-a-roll-drums-A.wav');
                    soundEntity.play();
                })
            } break;
            case 'keyboard':  {
                this.el.addEventListener('mousedown', () => {
                    soundEntity.setAttribute('src', './assets/keyboard/noisy-akai-organ-chord.wav');
                    soundEntity.play();
                })
            }
        }
    }
});

