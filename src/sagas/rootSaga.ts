import { fetchCharacterDetailsWatcher } from "./characterDetailsSaga";
import { fetchCharactersListWatcher } from "./charactersListSaga";
import { all } from "redux-saga/effects";

export default function* rootSaga() {
    yield all([fetchCharactersListWatcher(), fetchCharacterDetailsWatcher()]);
}
