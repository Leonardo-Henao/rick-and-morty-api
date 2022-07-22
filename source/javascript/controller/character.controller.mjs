// CONFIG
import { Config } from "../config.mjs";

// VIEW
import { CharacterView } from "../view/character.view.mjs";

// SERVICE
import { CharacterService } from "../model/services/character.service.mjs";

// MODEL
import { AllInfoCharacter } from "../model/all.info.character.model.mjs";

export class CharacterController {

    #privateURL;
    #privateCharacterView;
    #PrivateCharacterID;

    constructor() {

        let params = new URLSearchParams(location.search);

        this.#privateCharacterView = new CharacterView();
        this.#PrivateCharacterID = params.get('i');
        this.#privateURL = `${Config.RickAndMortyAPI_URL}/character/${this.#PrivateCharacterID}`;
        this.CharacterView = new CharacterView();
    }

    async init() {
        const data = new CharacterService(this.#privateURL).dataCharacters;

        const dataResult = async () => {
            return new Promise(async (resolve, reject) => {

                let tempDataCharacter = await data;
                let tempCharacter = new AllInfoCharacter();
                                
                tempCharacter.Name = tempDataCharacter.name;
                tempCharacter.Image = tempDataCharacter.image;
                tempCharacter.Gender = tempDataCharacter.gender;
                tempCharacter.Especie = tempDataCharacter.species;
                tempCharacter.Status = tempDataCharacter.status;
                tempCharacter.DateCreations = tempDataCharacter.created;
                tempCharacter.Episodes = tempDataCharacter.episode.length;
                tempCharacter.Origin = tempDataCharacter.origin.name
                tempCharacter.Location = tempDataCharacter.location.name
                
                resolve(tempCharacter);
            })
        };
        this.#privateCharacterView.init(await dataResult());
    }
}

export const Character = new CharacterController();
Character.init();