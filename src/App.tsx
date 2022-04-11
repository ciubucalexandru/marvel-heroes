import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./store/store";
import MarvelRoutes from "./routes/Routes";

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <MarvelRoutes />
        </Provider>
    );
};

export default App;
