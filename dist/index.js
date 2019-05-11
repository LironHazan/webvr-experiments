function MyAframeApp () {}


MyAframeApp.soundEntity = document.querySelector('#sound');
MyAframeApp.textScoreEntity = document.querySelector('#score');

MyAframeApp.store = {clicks: 0, sound: null};
MyAframeApp.handler = {
    set (target, key, value) {
        if (key in target) {
            target[key] = value;
            MyAframeApp.onChange();
        }
        return target;
    }
};
MyAframeApp.observeStore$ = new Proxy(MyAframeApp.store, MyAframeApp.handler);

MyAframeApp.playSound = (soundEntity) => {
    soundEntity.setAttribute('src', MyAframeApp.store.sound);
    return soundEntity.play();
};

MyAframeApp.updateText = (entity, text) => entity.setAttribute('text', text);

MyAframeApp.onChange = async () => {
    MyAframeApp.updateText(MyAframeApp.textScoreEntity,
        `value: Your Score: ${MyAframeApp.store.clicks}`);
    return MyAframeApp.playSound(MyAframeApp.soundEntity);
};


MyAframeApp();
