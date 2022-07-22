'use strict';

export class AllInfoCharacter {

    #privateName;
    #privateImage;
    #privateGender;
    #privateEspecie;
    #privateStatus;
    #privateDateCreation;
    #privateEpisodes;
    #privateOrigin;
    #privateLocation

    constructor() {
        this.#privateName = '';
        this.#privateImage = '';
        this.#privateGender = '';
        this.#privateEspecie = '';
        this.#privateStatus = '';
        this.#privateDateCreation = '';
        this.#privateEpisodes = '';
        this.#privateOrigin = '';
        this.#privateLocation = '';
    }


    get Name() { return this.#privateName; }
    set Name(value) { this.#privateName = value; }

    get Image() { return this.#privateImage; }
    set Image(value) { this.#privateImage = value; }

    get Gender() { return this.#privateGender; }
    set Gender(value) { this.#privateGender = value; }

    get Especie() { return this.#privateEspecie; }
    set Especie(value) { this.#privateEspecie = value; }

    get Status() { return this.#privateStatus; }
    set Status(value) { this.#privateStatus = value; }

    get DateCreations() { return this.#privateDateCreation; }
    set DateCreations(value) { this.#privateDateCreation = value; }

    get Episodes() { return this.#privateEpisodes; }
    set Episodes(value) { this.#privateEpisodes = value; }

    get Origin() { return this.#privateOrigin; }
    set Origin(value) { this.#privateOrigin = value; }

    get Location() { return this.#privateLocation; }
    set Location(value) { this.#privateLocation = value; }
    
}