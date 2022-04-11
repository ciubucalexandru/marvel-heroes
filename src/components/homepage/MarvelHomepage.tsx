import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCharactersListTrigger } from "../../actions/CharactersListActions";

const MarvelHomepage: React.FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCharactersListTrigger());
    }, []);

    return <div>Aici ii pagina principala!</div>;
};

export default MarvelHomepage;
