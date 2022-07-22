'use strict';

import { CreateElementForView } from "./create.elements.view.mjs";

/**
 * Encargado de general todas las vistas de index.html
 */
export class IndexView {
    #privateBody;
    #privateSection;
    #privateCreationViews;

    constructor() {

        this.#privateCreationViews = new CreateElementForView();

        document.title = "Rick And Morty Personajes";
        this.#privateBody = document.querySelector('body');
        this.#privateSection = this.#privateCreationViews.create('section', null);
        
        let h1Title = this.#privateCreationViews.create('h1', null);
        h1Title.textContent = "Personajes de Rick & Morty";
        
        this.#privateBody.append(h1Title, this.#privateSection);
    }

    init(data) {

        data.forEach(element => {

            let contenedorCharacters =  this.#privateCreationViews.create('div', 'character');
            contenedorCharacters.addEventListener('click', () => location.href = element.Click)

            let nameCharacters = this.#privateCreationViews.create('span', 'character-name');
            nameCharacters.textContent = element.Name;

            let especieCharacter = this.#privateCreationViews.create('span', 'character-especie');
            especieCharacter.textContent = element.Especies;

            let imageCharacters = this.#privateCreationViews.create('img', 'character-image');
            imageCharacters.setAttribute('loading', 'lazy');
            imageCharacters.src = element.Image;

            contenedorCharacters.append(imageCharacters, nameCharacters, especieCharacter);
            this.#privateSection.append(contenedorCharacters);
        });
    }
}