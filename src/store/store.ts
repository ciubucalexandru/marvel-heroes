import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { CharacterDetailsReducer } from "../reducers/CharacterDetailsReducer";
import { CharactersListReducer, CharactersListState } from "../reducers/CharactersListReducer";
import rootSaga from "../sagas/rootSaga";

const rootReducer = combineReducers({
    charactersList: CharactersListReducer,
    characterDetails: CharacterDetailsReducer,
});

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

export interface AppState {
    charactersList: CharactersListState;
    characteDetails: any;
}
