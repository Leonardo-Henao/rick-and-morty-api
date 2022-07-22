export class CharacterService {
    #privateUrl;

    constructor(url) {
        this.#privateUrl = url;
    }

    get dataCharacters() { return fetch(this.#privateUrl).then(Response => Response.json()) };

}