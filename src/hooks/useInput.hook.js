import { useState } from "react";

const useInput = () => {
    const [inputState, setInputState] = useState({});

    const handleInput = (event) => {
        const { value, name } = event.target;
        setInputState({ ...inputState, [name]: value });
    };

    return { handleInput, inputState, setInputState };
};

export default useInput;
