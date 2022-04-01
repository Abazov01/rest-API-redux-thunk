import { combineReducers } from "redux"
import { videos } from './videosRed';
import { cocktailsReducer } from './Cocktail';
import { giphyRed } from './giphyRed';
import { userReducer } from './userReducer';

export const rootReducer = combineReducers({
    videos,
    cocktailsReducer,
    giphyRed,
    userReducer
})