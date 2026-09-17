function hitDog() {
    Dog.instance().receiveDamage(100);
}

hitButton.onclick = hitDog; 