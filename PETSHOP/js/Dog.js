class Dog {

    static myself;
    
    constructor() {
        if (Dog.myself) {
            return Dog.myself;
        }
        this.name = "Bruce Twist";
        this.life = 500;
        this.isDead = false;
        Dog.myself = this;
    }

    static instance() {
        if (!this.myself) {
            this.myself = new Dog();
        }
        return this.myself;
    }

    receiveDamage(damage) {
        this.life -= damage;
        this.life = Math.max(this.life, 0);
        this.isDead = this.life == 0;
    }

}