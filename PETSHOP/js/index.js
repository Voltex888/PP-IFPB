let interfaceManager = new InterfaceManager();

function hitDog() {
    let dog = new Dog();
    let soundManager = new SoundManager();
    dog.receiveDamage(100);

    interfaceManager.updateDogLifeBar(dog.life);
    
    if(dog.isDead) {
        soundManager.deathAudio.play();
        interfaceManager.setDeadDogFace();
    }
    else {
        soundManager.hitAudio.play();
        interfaceManager.setHitDogFace();
        setTimeout(backDogFaceToNormal, 250);
    }
}

function backDogFaceToNormal() {
    interfaceManager.setHappyDogFace();
}

hitButton.onclick = hitDog; 