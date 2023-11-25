import { BUY_CAKE } from "./cakeTypes"
const initial = {
    cakes: 10
}

const Reducer = (state = initial, action) => {
    console.log('Reducer called with action:', action);
    switch (action.type) {
        case BUY_CAKE:
            console.log('BUY_CAKE action processed');
            return {
                ...state,
                cakes: state.cakes - 1
            }
        default: return state
    }
}
export default Reducer