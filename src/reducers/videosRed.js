


export const videos = (state = {}, action) => {
    const {type, payload} = action
    switch (type){
        case("LIST_VIDEO"):
            return {...state, videos: payload} 
        case('LIST_DETAIL'):
            return{...state, vidDet: payload}
        default:
            return state
    }
}