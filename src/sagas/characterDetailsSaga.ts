import md5 from "blueimp-md5";
import { put, takeEvery } from "redux-saga/effects";
import {
    fetchCharacterDetailsError,
    fetchCharacterDetailsSuccess,
    FetchCharacterDetailsTriggerAction,
} from "../actions/CharacterDetailsActions";
import { MARVEL_BASE_URL, MARVEL_CHARACTERS_ENDPOINT } from "../utils/constants";
import { CharacterDetailsActionTypes } from "../utils/types";

type Params = {
    ts: string;
    apikey: string;
    hash: any;
};

function* fetchCharacterDetails(action: FetchCharacterDetailsTriggerAction): any {
    const timestamp = new Date().getTime().toString();
    const params: Params = {
        ts: timestamp,
        apikey: process.env.REACT_APP_MARVEL_API_KEY_PUBLIC?.toString() || "",
        hash: md5(
            timestamp + process.env.REACT_APP_MARVEL_API_KEY_PRIVATE + process.env.REACT_APP_MARVEL_API_KEY_PUBLIC,
        ),
    };

    const characterDetailsUrl = `${MARVEL_BASE_URL}${MARVEL_CHARACTERS_ENDPOINT}/${action.characterId}?${Object.keys(
        params,
    )
        .map((key: any) => `${key}=${params[key as keyof Params]}`)
        .join("&")}`;

    try {
        const response = yield fetch(characterDetailsUrl, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        const responseData = yield response.json();

        if (response.status >= 200 && response.status < 300) {
            yield put(fetchCharacterDetailsSuccess(responseData.data.results[0]));
        } else {
            yield put(fetchCharacterDetailsError(response.statusText));
        }
    } catch (error) {
        console.log("There was an error: ", error);
        yield put(fetchCharacterDetailsError((error as any).toString()));
    }
}

export function* fetchCharacterDetailsWatcher() {
    yield takeEvery(CharacterDetailsActionTypes.FETCH_CHARACTER_DETAILS_TRIGGER, fetchCharacterDetails);
}
