import { ADD_RESERVATION, CANCEL_RESERVATION } from "../actions/reservation.actions"

const initialState={
    UserName:[]
}

const ReservationReducer=(state=initialState,action)=>{
    switch(type.action){
        case ADD_RESERVATION:
            return{state}

        case CANCEL_RESERVATION:
            const deleteUser= [...state.UserName].filter(user=>user.id !== action.userId)
            return {...state,UserName:deleteUser}
    }
}