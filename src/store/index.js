import { combineReducers, createStore } from "redux";

import categoriesReducer from "./reducers/category.reducer"
import categoryTrainingReducer from "./reducers/categoryTraining.reducer";

const rootReducer=combineReducers({
    categories:categoriesReducer,
    categoryTraining:categoryTrainingReducer
})

export default createStore(rootReducer)