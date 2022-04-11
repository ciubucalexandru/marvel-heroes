import { CharactersListActionTypes, MarvelCharacter } from "../utils/types";

export class FetchCharactersListTriggerAction {
    public readonly type = CharactersListActionTypes.FETCH_CHARACTERS_LIST_TRIGGER;
}

export class FetchCharactersListSuccessAction {
    public readonly type = CharactersListActionTypes.FETCH_CHARACTERS_LIST_SUCCESS;
    public characters: MarvelCharacter[];

    constructor(characters: MarvelCharacter[]) {
        this.characters = characters;
    }
}

export class FetchCharactersListErrorAction {
    public readonly type = CharactersListActionTypes.FETCH_CHARACTERS_LIST_ERROR;
    public error: string;

    constructor(error: string) {
        this.error = error;
    }
}

export type FetchCharactersListAction =
    | FetchCharactersListTriggerAction
    | FetchCharactersListSuccessAction
    | FetchCharactersListErrorAction;

export const fetchCharactersListTrigger = (): FetchCharactersListTriggerAction => ({
    type: CharactersListActionTypes.FETCH_CHARACTERS_LIST_TRIGGER,
});

export const fetchCharactersListSuccess = (characters: MarvelCharacter[]): FetchCharactersListSuccessAction => ({
    type: CharactersListActionTypes.FETCH_CHARACTERS_LIST_SUCCESS,
    characters: characters,
});

export const fetchCharactersListError = (error: string): FetchCharactersListErrorAction => ({
    type: CharactersListActionTypes.FETCH_CHARACTERS_LIST_ERROR,
    error: error,
});
