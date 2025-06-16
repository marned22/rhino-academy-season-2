const initialState = { count: 0, enabled: false };

const counterReducer = (state = initialState, action: { type: string; payload? : any }) => {
    switch (action.type) {
        case "INCREMENT":
            return { ...state, count: state.count + action.payload };
        case "DECREMENT":
            return { ...state, count: state.count - action.payload };
        case "TOGGLE":
            return { ...state, enabled: !state.enabled };
        default:
            return state;
    }
}

export default counterReducer;