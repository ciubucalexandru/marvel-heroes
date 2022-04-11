import { put, takeEvery } from "redux-saga/effects";
import { fetchCharactersListError, fetchCharactersListSuccess } from "../actions/CharactersListActions";
import { MARVEL_BASE_URL, MARVEL_CHARACTERS_ENDPOINT } from "../utils/constants";
import md5 from "blueimp-md5";
import { CharactersListActionTypes } from "../utils/types";

type Params = {
    ts: string;
    apikey: string;
    hash: any;
};

function* fetchCharactersList(): any {
    const timestamp = new Date().getTime().toString();
    const params: Params = {
        ts: timestamp,
        apikey: process.env.REACT_APP_MARVEL_API_KEY_PUBLIC?.toString() || "",
        hash: md5(
            timestamp + process.env.REACT_APP_MARVEL_API_KEY_PRIVATE + process.env.REACT_APP_MARVEL_API_KEY_PUBLIC,
        ),
    };

    const charactersListUrl = `${MARVEL_BASE_URL}${MARVEL_CHARACTERS_ENDPOINT}?${Object.keys(params)
        .map((key: any) => `${key}=${params[key as keyof Params]}`)
        .join("&")}`;

    try {
        const response = yield fetch(charactersListUrl, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        const responseData = yield response.json();

        console.log({ response });
        console.log({ responseData });

        if (response.status >= 200 && response.status < 300) {
            yield put(fetchCharactersListSuccess(responseData.data.results));
        } else {
            yield put(fetchCharactersListError(response.statusText));
        }
    } catch (error) {
        console.log("There was an error: ", error);
        yield put(fetchCharactersListError((error as any).toString()));
    }
}

export function* fetchCharactersListWatcher() {
    yield takeEvery(CharactersListActionTypes.FETCH_CHARACTERS_LIST_TRIGGER, fetchCharactersList);
}
