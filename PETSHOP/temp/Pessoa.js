class Pessoa {
    static myself;
    constructor() {
        if (Pessoa.myself) {
            return Pessoa.myself;
        }
        this.nome = "Matheus Kevyn";
        Pessoa.myself = this;
    }
    static instance() {
        if (!this.myself) {
            this.myself = new Pessoa();
        }
        return this.myself;
    }
}

let pessoa = new Pessoa();
console.log(pessoa.nome);