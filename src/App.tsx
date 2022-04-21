import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./store/store";
import MarvelRoutes from "./routes/Routes";
import { COLORS } from "./utils/constants";

const appStyles = {
    root: {
        width: "100%",
        height: "100%",
        backgroundColor: COLORS.DARK_GRAY,
    },
};

const App: React.FC = () => {
    return (
        <div style={appStyles.root}>
            <Provider store={store}>
                <MarvelRoutes />
            </Provider>
        </div>
    );
};

export default App;
