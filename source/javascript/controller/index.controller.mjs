"use strict";

// Config
import { Config } from "../config.mjs";

// Views
import { IndexView } from "../view/index.view.mjs";

// Models
import { CharacterModel } from "../model/character.model.mjs";

// Services
import { RickAndMortyService } from "../model/services/rick-and-morty.service.mjs";

class IndexController {
    #privateCharacterURL;
    #privateRickAndMortyURL;
    #privateView;

    constructor() {
        this.#privateCharacterURL = Config.CharacterInfoURL;
        this.#privateRickAndMortyURL = Config.RickAndMortyAPI_URL;
        this.#privateView = new IndexView();
    }

    async init() {
        const data = new RickAndMortyService(this.#privateRickAndMortyURL);

        const dataResult = async () => {
            return new Promise(async (resolve, reject) => {
                let tempData = await data.getCharacters();
                var listCharacters = new Array();

                tempData.results.forEach(element => {
                    let tempModel = new CharacterModel();

                    tempModel.Name = element.name;
                    tempModel.Image = element.image;
                    tempModel.Especies = element.species;
                    tempModel.Click = this.#privateCharacterURL + '?i=' + element.id;

                    listCharacters.push(tempModel);
                });
                resolve(listCharacters);
            })
        };
        this.#privateView.init(await dataResult());
    }
}

export const index = new IndexController();
index.init();