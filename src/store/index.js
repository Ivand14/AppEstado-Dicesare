import { applyMiddleware, combineReducers, createStore } from "redux";

import AuthReducer from "./reducers/auth.reducer";
import ReservationReducer from "./reducers/reservation.reducer";
import categoriesReducer from "./reducers/category.reducer"
import categoryTrainingReducer from "./reducers/categoryTraining.reducer";
import createWodReducer from "./reducers/createWodReducer.reducer"
import thunk from "redux-thunk";

const rootReducer=combineReducers({
    categories:categoriesReducer,
    categoryTraining:categoryTrainingReducer,
    CreateWod:createWodReducer,
    Reservation:ReservationReducer,
    Auth:AuthReducer
})

export default createStore(rootReducer,applyMiddleware(thunk))