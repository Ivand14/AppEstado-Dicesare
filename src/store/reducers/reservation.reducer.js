import { ADD_RESERVATION, CANCEL_RESERVATION } from "../actions/reservation.actions"

const initialState={
    UserName:[]
}

const ReservationReducer=(state=initialState,action)=>{
    switch(action.type){
        case ADD_RESERVATION:
            return{...state,UserName:[...state.UserName,action.UserName]}

        case CANCEL_RESERVATION:
            return{...state,UserName:[...state.UserName.filter(user=>user.id !== action.userId)]}
        default:
            return state
    }
}

export default ReservationReducer