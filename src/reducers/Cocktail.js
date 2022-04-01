



export const cocktailsReducer = (state = {}, actions)=>{
    const {type, payload} = actions
    switch(type){
        case('LIST_COCKTAIL'):
           return {...state, coctails:payload}
        case("LIST_DET_COCK"):
            return {...state, cockDet: payload}
        default:
            return state
    }

}