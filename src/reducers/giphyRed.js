

export const giphyRed = (state = {}, actions) => {
    const {type, payload} = actions
    switch(type){
        case("LIST_GIPHY"):
            return payload
        default:
            return state
    }
}