import { SIGNUP, SINGIN } from "../actions/auth.actions";

const initialState={
    token:null,
    userId:null,
    payload:null
}

const AuthReducer = (state = initialState,action) =>{
    switch(action.type){
        case SIGNUP:
            return {...state,
                token:action.token,
                userId:action.userId}
        case SINGIN:
            return{...state,payload:action.payload}
        default:
            return state
    }
    
}

export default AuthReducer