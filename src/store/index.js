import { combineReducers, createStore } from "redux";

import categoriesReducer from "./reducers/category.reducer"
import categoryTrainingReducer from "./reducers/categoryTraining.reducer";
import createWodReducer from "./reducers/createWodReducer.reducer"
import thunk from "redux-thunk";

const rootReducer=combineReducers({
    categories:categoriesReducer,
    categoryTraining:categoryTrainingReducer,
    CreateWod:createWodReducer
})

export default createStore(rootReducer)