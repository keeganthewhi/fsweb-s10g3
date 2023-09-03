import {favoriteActions} from './../actions/favActions';

const initialState = [];

const favoriteReducer = (state = initialState,action) => {

    switch(action.type){
        case favoriteActions.ADD :
            if(state.length === 0){
                return [...state , action.payload ];
                }
            else {
                if(state.filter((favItem) => favItem.id === action.payload.id).length > 0){
                    alert ('zaten Fav Listesinde :( ');
                    return state;
                }
                else return [...state , action.payload ];
                }

        case favoriteActions.REMOVE:
            return [...state.filter((favItem) => favItem.id !== action.payload)];
        
        case favoriteActions.RESET:
            return initialState;
        default:
            return initialState;
    }

}

export default favoriteReducer;