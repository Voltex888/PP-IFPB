class InterfaceManager {

    static #myself;

    constructor() {
        if(InterfaceManager.#myself) {
            return InterfaceManager.#myself;
        }
        this.dogLifeBar = document.getElementById("dogLifeBar");
        this.dogFace = document.getElementById("dogFace");
        InterfaceManager.#myself = this;
    }

    static instance() {
        if(!InterfaceManager.#myself) {
            return new InterfaceManager();
        }
        return InterfaceManager.#myself;
    }

    updateDogLifeBar(life) {
        this.dogLifeBar.style.width = life + "px";
    }

    setHitDogFace() {
        this.dogFace.src = "/images/sad_dog.png";
    }

    setDeadDogFace() {
        this.dogFace.src = "/images/poisoned_dog.png";
    }

    setHappyDogFace() {
        this.dogFace.src = "/images/happy_dog.png";
    }

}