export const SELECTED_CATEGORYTRAINING='SELECTED_CATEGORYTRAINING'
export const FILTERED_CATEGORYTRAINING='FILTERED_CATEGORYTRAINING'

export const selectedCategoryTraining=id=>({
    type:SELECTED_CATEGORYTRAINING,
    trainingId:id
})

export const filteredCategoryTraining=id=>({
    type:FILTERED_CATEGORYTRAINING,
    categoryId:id
})