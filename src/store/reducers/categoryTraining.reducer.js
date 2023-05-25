import { FILTERED_CATEGORYTRAINING, SELECTED_CATEGORIES } from "../actions/categoryTraining.actions";

import {CategoryTraining} from "../../data/CategoryTraining";

const initialState={
    categoryTraining:CategoryTraining,
    categoryFilter:[],
    selected:null
}

const categoryTrainingReducer=(state=initialState,action)=>{
    switch(action.type){
        case SELECTED_CATEGORIES:
            return{
                ...state,selected:state.categoryTraining.find(
                    category=>category.id === action.trainingId
                )
            }
        
        case FILTERED_CATEGORYTRAINING:
          return{
            ...state,categoryFilter:state.categoryTraining.filter(
                catFilter=>catFilter.Category === action.categoryId
            )
          }  


        
    }
}

export default categoryTrainingReducer