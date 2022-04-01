export const RandUs = 'https://randomuser.me/api/?results=';

//----------------------------------------------------------------------------------------

export const Giphy='https://api.giphy.com/v1/gifs/search?api_key=WSqWCUpmqr5YsO9X1hzEhUYifimn35je&limit='



//---------------------------------------------------------------------

const cocktail = 'https://www.thecocktaildb.com/api/json/v1/1/'

export const GET_ALL_COCKTAILS = cocktail + 'filter.php?c=Cocktail'
export const SEARCH_COCKTAIL_BY_NAME = cocktail + 'search.php?s='
export const FILTER_COCKTAIL_BY_ALCO = cocktail + 'filter.php?a='
export const GET_INFO_COCKTAIL_BY_ID = cocktail + 'lookup.php?i='
export const GET_INGREDIENT_BY_NAME = cocktail + 'search.php?i='



//---------------------------------------------------------------------------------YOUTUBE



export const KEY = 'AIzaSyDM7CrKbGF_EPHsi4oAn0XboEi8asoK0v0'
        const RESULTS = 12
export const VID = 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=' + RESULTS + '&key=' + KEY + '&q='
export const GET_VIDEO_BY_ID = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=' + KEY + '&id='


