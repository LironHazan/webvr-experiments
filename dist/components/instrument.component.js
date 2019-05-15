const randomPosition = () => {
    const randomNumber = (num) => Math.floor((Math.random() * 10) + num);
    return { x: randomNumber(-5),  y:  0, z: -randomNumber(5) };
};

var globalScore = 0;

AFRAME.registerComponent('instrument', {
    schema: {},
    init: function () {
        const { x, y, z } = this.el.getAttribute('scale');
        this.el.addEventListener('animationcomplete', () => {
            this.el.setAttribute('scale',  { x, y, z });
            this.el.setAttribute('position',  randomPosition());
            globalScore++;
            document.querySelector('#text').setAttribute('value', globalScore);
        });
    }
});
