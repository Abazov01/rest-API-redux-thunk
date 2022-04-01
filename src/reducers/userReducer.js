

export const userReducer = (state = {}, actions) => {
    const {type, payload} = actions
    switch(type){
        case("LIST_USERS"):
            return {...state, users: payload}
        case("LIST_US_DET"):
            return {...state, usersDet: payload}
        default:
            return state
    }
}