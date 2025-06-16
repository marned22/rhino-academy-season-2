export const increment = () => {
    return {
        type: "INCREMENT",
        payload: 3,
    };
}

export const decrement = () => {
    return {
        type: "DECREMENT",
        payload: 3,
    };
}

export const toggle = () => {
    return {
        type: "TOGGLE",
    };
}