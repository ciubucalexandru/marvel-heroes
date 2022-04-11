import { CharacterDetailsActionTypes, MarvelCharacter } from "../utils/types";

export class FetchCharacterDetailsTriggerAction {
    public readonly type = CharacterDetailsActionTypes.FETCH_CHARACTER_DETAILS_TRIGGER;
    public characterId: number;

    constructor(id: number) {
        this.characterId = id;
    }
}

export class FetchCharacterDetailsSuccessAction {
    public readonly type = CharacterDetailsActionTypes.FETCH_CHARACTER_DETAILS_SUCCESS;
    public details: MarvelCharacter;

    constructor(details: MarvelCharacter) {
        this.details = details;
    }
}

export class FetchCharacterDetailsErrorAction {
    public readonly type = CharacterDetailsActionTypes.FETCH_CHARACTER_DETAILS_ERROR;
    public error: string;

    constructor(error: string) {
        this.error = error;
    }
}

export type FetchCharacterDetailsAction =
    | FetchCharacterDetailsTriggerAction
    | FetchCharacterDetailsSuccessAction
    | FetchCharacterDetailsErrorAction;

export const fetchCharacterDetailsTrigger = (id: number): FetchCharacterDetailsTriggerAction => ({
    type: CharacterDetailsActionTypes.FETCH_CHARACTER_DETAILS_TRIGGER,
    characterId: id,
});

export const fetchCharacterDetailsSuccess = (details: MarvelCharacter): FetchCharacterDetailsSuccessAction => ({
    type: CharacterDetailsActionTypes.FETCH_CHARACTER_DETAILS_SUCCESS,
    details: details,
});

export const fetchCharacterDetailsError = (error: string): FetchCharacterDetailsErrorAction => ({
    type: CharacterDetailsActionTypes.FETCH_CHARACTER_DETAILS_ERROR,
    error: error,
});
