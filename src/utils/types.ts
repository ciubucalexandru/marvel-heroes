export enum CharactersListActionTypes {
    FETCH_CHARACTERS_LIST_TRIGGER = "FETCH_CHARACTERS_LIST_TRIGGER",
    FETCH_CHARACTERS_LIST_SUCCESS = "FETCH_CHARACTERS_LIST_SUCCESS",
    FETCH_CHARACTERS_LIST_ERROR = "FETCH_CHARACTERS_LIST_ERROR",
}

export enum CharacterDetailsActionTypes {
    FETCH_CHARACTER_DETAILS_TRIGGER = "FETCH_CHARACTER_DETAILS_TRIGGER",
    FETCH_CHARACTER_DETAILS_SUCCESS = "FETCH_CHARACTER_DETAILS_SUCCESS",
    FETCH_CHARACTER_DETAILS_ERROR = "FETCH_CHARACTER_DETAILS_ERROR",
}

export interface MarvelCharacter {
    id: number;
    name: string;
    description: string;
    modified: Date;
    resourceURI: string;
    urls: [
        {
            type: string;
            url: string;
        },
    ];
    thumbnail: {
        path: string;
        extension: string;
    };
    comics: {
        available: number;
        returned: number;
        collectionURI: string;
        items: [
            {
                resourceURI: string;
                name: string;
            },
        ];
    };
    stories: {
        available: number;
        returned: number;
        collectionURI: string;
        items: [
            {
                resourceURI: string;
                name: string;
                type: string;
            },
        ];
    };
    events: {
        available: number;
        returned: number;
        collectionURI: string;
        items: [
            {
                resourceURI: string;
                name: string;
            },
        ];
    };
    series: {
        available: number;
        returned: number;
        collectionURI: string;
        items: [
            {
                resourceURI: string;
                name: string;
            },
        ];
    };
}
