import {useState} from 'react'

export const useElement = () => {

    const [elementStates, setElementStates] = useState({});

    const updateElementState = (id, newState) => {
        setElementStates((prevStates) => ({
            ...prevStates,
            [id]: newState,
        }));
        console.log(elementStates)
    };
    return {updateElementState, elementStates}
}

