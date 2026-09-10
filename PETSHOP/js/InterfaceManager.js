class InterfaceManager {

    constructor() {
        this.dogLifeBar = document.getElementById("dogLifeBar");
        this.dogFace = document.getElementById("dogFace");
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