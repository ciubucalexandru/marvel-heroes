import { CharactersListActionTypes, MarvelCharacter } from "../utils/types";

export class FetchCharactersListTriggerAction {
    public readonly type = CharactersListActionTypes.FETCH_CHARACTERS_LIST_TRIGGER;
    public page: number;

    constructor(page: number) {
        this.page = page;
    }
}

export class FetchCharactersListSuccessAction {
    public readonly type = CharactersListActionTypes.FETCH_CHARACTERS_LIST_SUCCESS;
    public characters: MarvelCharacter[];
    public total: number;

    constructor(characters: MarvelCharacter[], total: number) {
        this.characters = characters;
        this.total = total;
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

export const fetchCharactersListTrigger = (page: number): FetchCharactersListTriggerAction => ({
    type: CharactersListActionTypes.FETCH_CHARACTERS_LIST_TRIGGER,
    page: page,
});

export const fetchCharactersListSuccess = (
    characters: MarvelCharacter[],
    total: number,
): FetchCharactersListSuccessAction => ({
    type: CharactersListActionTypes.FETCH_CHARACTERS_LIST_SUCCESS,
    characters: characters,
    total: total,
});

export const fetchCharactersListError = (error: string): FetchCharactersListErrorAction => ({
    type: CharactersListActionTypes.FETCH_CHARACTERS_LIST_ERROR,
    error: error,
});
