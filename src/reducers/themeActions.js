
const initialState={
    darkMode: false
}

const themeActions = (state = initialState, action) => {
    switch(action.type){
        case "SET_DARKMODE":
            return {
                ...state,
                darkMode: !state.darkMode,
            }
        default:
            return state
    }
}

export default themeActions;