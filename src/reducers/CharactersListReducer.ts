import { FetchCharactersListAction } from "../actions/CharactersListActions";
import { CharactersListActionTypes, MarvelCharacter } from "../utils/types";

export interface CharactersListState {
    isLoading: boolean;
    characters: MarvelCharacter[];
    error: string | null;
    total: number;
}

const initialState: CharactersListState = {
    isLoading: false,
    characters: [],
    error: null,
    total: 0,
};

export const CharactersListReducer = (
    state: CharactersListState = initialState,
    action: FetchCharactersListAction,
): CharactersListState => {
    switch (action.type) {
        case CharactersListActionTypes.FETCH_CHARACTERS_LIST_TRIGGER: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case CharactersListActionTypes.FETCH_CHARACTERS_LIST_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                characters: action.characters,
                error: null,
                total: action.total,
            };
        }
        case CharactersListActionTypes.FETCH_CHARACTERS_LIST_ERROR: {
            return {
                ...state,
                isLoading: false,
                error: action.error,
            };
        }
        default: {
            return state;
        }
    }
};
