import { FetchCharacterDetailsAction } from "../actions/CharacterDetailsActions";
import { CharacterDetailsActionTypes, MarvelCharacter } from "../utils/types";

export interface CharacterDetailsState {
    isLoading: boolean;
    error: string | null;
    characterDetails: MarvelCharacter | null;
}

const initialState: CharacterDetailsState = {
    isLoading: false,
    error: null,
    characterDetails: null,
};

export const CharacterDetailsReducer = (
    state: CharacterDetailsState = initialState,
    action: FetchCharacterDetailsAction,
): CharacterDetailsState => {
    switch (action.type) {
        case CharacterDetailsActionTypes.FETCH_CHARACTER_DETAILS_TRIGGER: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case CharacterDetailsActionTypes.FETCH_CHARACTER_DETAILS_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                error: null,
                characterDetails: action.details,
            };
        }
        case CharacterDetailsActionTypes.FETCH_CHARACTER_DETAILS_ERROR: {
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
