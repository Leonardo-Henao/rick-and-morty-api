'use strict';

import { CreateElementForView } from "./create.elements.view.mjs";

/**
 * Encargado de generar todas las vistas del archivo character.html
 */
export class CharacterView {

    #privateCreationViews;
    #privateSection;
    #privateBody;

    constructor() {
        this.#privateCreationViews = new CreateElementForView();
        this.#privateBody = document.querySelector('body');
        this.#privateSection = this.#privateCreationViews.create('section', null)
    }

    init(data) {

        this.#privateBody.append(this.#privateSection);
        document.title = 'Personaje ' + data.Name;

        let imgCharacter = this.#privateCreationViews.create('img', 'img-character')
        imgCharacter.src = data.Image;
        imgCharacter.setAttribute('loading', 'lazy');

        let contentCharacters = this.#privateCreationViews.create('div', 'content-character');
        let groupDataCharacter = this.#privateCreationViews.create('div', 'data-character');

        let nameCharacter = this.#privateCreationViews.create('span', 'data-character-name');
        nameCharacter.textContent = data.Name;

        let genderCharacter = this.#privateCreationViews.create('span', null);
        genderCharacter.textContent = `Gender: ${data.Gender}`;

        let especieCharacter = this.#privateCreationViews.create('span', null);
        especieCharacter.textContent = `Especie: ${data.Especie}`;

        let statusCharacter = this.#privateCreationViews.create('span', null);
        statusCharacter.textContent = `Status: ${data.Status}`;

        let datecreationCharacter = this.#privateCreationViews.create('span', 'data-character-created');
        datecreationCharacter.textContent = `Created: ${data.DateCreations}`;

        let episodesCharacter = this.#privateCreationViews.create('span', null);
        episodesCharacter.textContent = `Episodes: ${data.Episodes}`;

        let originCharacter = this.#privateCreationViews.create('span', null);
        originCharacter.textContent = `Origin: ${data.Origin}`;

        let locationCharacter = this.#privateCreationViews.create('span', null);
        locationCharacter.textContent = `Last Location: ${data.Location}`;

        groupDataCharacter.append(nameCharacter, genderCharacter,
            especieCharacter, statusCharacter, episodesCharacter,
            originCharacter, locationCharacter, datecreationCharacter);

        contentCharacters.append(imgCharacter, groupDataCharacter);
        this.#privateSection.append(contentCharacters);
    }
}