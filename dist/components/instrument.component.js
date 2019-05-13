const randomPosition = () => {
    const randomNumber = () => ~~((Math.random() * 10) -5)
        .toString();
    return randomNumber()  + ' ' + 0 + ' ' + randomNumber();
};

AFRAME.registerComponent('instrument', {
    schema: {},
    init: function () {
        this.el.addEventListener('animationcomplete', () => {
            this.el.setAttribute('position', randomPosition());
            switch(this.el.id) {
                case 'guitar':
                    this.el.setAttribute('scale', '0.2 0.2 0.2');
                    break;
                case 'drums':
                    this.el.setAttribute('scale', '1 1 1 1');
                    break;
                case 'keyboard':
                    this.el.setAttribute('scale', '0.02 0.02 0.02')
            }
        });
    }
});

