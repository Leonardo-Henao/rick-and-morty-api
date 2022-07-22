'use strict';

export class CharacterModel {

    #idCharacter;
    #nameCharacter;
    #especieCharacter;
    #imageCharacter;
    #clickCharacter;

    constructor() {
        this.#idCharacter = '';
        this.#nameCharacter = '';
        this.#imageCharacter = '';
        this.#especieCharacter = '';
        this.#clickCharacter = '';
    }

    get IdCharacter() { return this.#idCharacter; }
    set IdCharacter(id) { this.#idCharacter = id; }

    get Name() { return this.#nameCharacter; }
    set Name(name) { this.#nameCharacter = name; }

    get Especie() { return this.#especieCharacter; }
    set Especie(especies) { this.#especieCharacter = especies; }

    get Image() { return this.#imageCharacter; }
    set Image(urlImage) { this.#imageCharacter = urlImage; }

    get Click() { return this.#clickCharacter; }
    set Click(url) { this.#clickCharacter = url; }

    toString() {
        return `${this.#nameCharacter} ${this.#especieCharacter} ${this.#imageCharacter}`;
    }
}