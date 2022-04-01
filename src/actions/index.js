import { GET_VIDEO_BY_ID, GET_INFO_COCKTAIL_BY_ID, VID, GET_ALL_COCKTAILS, SEARCH_COCKTAIL_BY_NAME, Giphy, RandUs } from './../congig';
import axios from 'axios';

export const getAllVido = () => async(dispatch)=>{
    const res = await axios.get(VID + 'redux')
    dispatch({
        type: "LIST_VIDEO",
        payload: res.data.items
    })
}

export const searchVideo = (value) => async(dispatch) =>{
    const res = await axios.get(VID+value)
    dispatch({
        type: "LIST_VIDEO",
        payload: res.data.items
    })
}

export const getVideoById = (id) => async(dispatch)=>{
    const req = await fetch(GET_VIDEO_BY_ID+id)
    const res = await req.json()
    dispatch({type:'LIST_DETAIL', payload:res})
} 
//==================================================COCKTAILS==========================================
export const searchCocktail = (name) => async(dispatch)=>{
    const res = await axios.get(SEARCH_COCKTAIL_BY_NAME + name)
    dispatch({type:'LIST_COCKTAIL', payload: res.data.drinks})
}
export const getAllCocktails = ()=> async(dispatch)=>{
    const req = await axios.get(GET_ALL_COCKTAILS)
    dispatch({type:'LIST_COCKTAIL', payload: req.data.drinks})
}

export const searchCocktailsById = (id)=> async(dispatch) =>{
    const req = await axios.get(GET_INFO_COCKTAIL_BY_ID + id)
    dispatch({type: "LIST_DET_COCK", payload: req.data.drinks})
}


//========================================================GIPHY============================================
export const getAllGiphy = ()=> async(dispatch) =>{
    const res = await axios.get(Giphy + '12&q=barcelona')
    dispatch({type:"LIST_GIPHY", payload:res.data.data})
}

export const searchGiphyByName = (name)=> async(dispatch) => {
    const  res = await axios.get(Giphy + '12&q=' + name)
    dispatch({type:"LIST_GIPHY", payload: res.data.data})
}



//+++++++++++++++++++++++++++++++++++++++++++++++++++++Users++++++++++++++++++++++++++++++++++++++++++++++++++
export const getUsersByCount = (count)=>async(dispatch)=>{
    const res = await axios.get(RandUs + count)
    dispatch({type:"LIST_USERS", payload: res.data.results})
}