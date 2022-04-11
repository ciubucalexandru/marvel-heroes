import { put, takeEvery } from "redux-saga/effects";
import { FetchCharacterDetailsTriggerAction } from "../actions/CharacterDetailsActions";
import { CharacterDetailsActionTypes } from "../utils/types";

function* fetchCharacterDetails(action: FetchCharacterDetailsTriggerAction) {
    yield setTimeout(() => ({}), 2000);
}

export function* fetchCharacterDetailsWatcher() {
    yield takeEvery(CharacterDetailsActionTypes.FETCH_CHARACTER_DETAILS_TRIGGER, fetchCharacterDetails);
}
