class Dog {

    static #myself;

    constructor() {
        if(Dog.#myself) {
            return Dog.#myself;
        }
        this.name = "Bruce Twist";
        this.life = 500;
        this.isDead = false;
        this.screamed = false;
        Dog.#myself = this;
    }

    static instance() {
		if(!Dog.#myself) {
			return new Dog();
		}
		return Dog.#myself;
	}

    receiveDamage(damage) {
        this.life -= damage;
        this.life = Math.max(this.life, 0);
        this.isDead = this.life == 0;
        InterfaceManager.instance().updateDogLifeBar(this.life);
        if(this.isDead) {
            if(!this.screamed) {
                SoundManager.instance().deathAudio.play();
                this.screamed = true;
            }
            InterfaceManager.instance().setDeadDogFace();
        }
        else {
            SoundManager.instance().hitAudio.play();
            InterfaceManager.instance().setHitDogFace();
            setTimeout(this.#backDogFaceToNormal, 250);
        }
    }

    #backDogFaceToNormal() {
        InterfaceManager.instance().setHappyDogFace();
    }

}