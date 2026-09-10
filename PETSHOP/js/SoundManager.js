class SoundManager {

    static myself;
    
    constructor() {
        if (SoundManager.myself) {
            return SoundManager.myself;
        }
        this.deathAudio = new Audio("./audios/dog-death.mp3");
        this.hitAudio = new Audio("./audios/dog-hit.mp3"); 
        SoundManager.myself = this;
    }
}