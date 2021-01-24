
const DATA_USER = {
    initialized_chat: false,
    dark: false,
};
 
const App = (state = DATA_USER, action) => {
       
    switch (action.type) {
        case "INIT_CHAT":
            return { ...state, initialized_chat: true };
        break;
        case "CHANGE_MODIFY":
            return { ...state, dark: !state.dark };
        break;
        default: return state;
        break;
    }
   
};
   
export default App;
   