import axios from "axios"
export const MatchActionType ={
    GET_MATCH_REQUEST:"GET_MATCH_REQUEST",
    GET_MATCH_SUCCESS:"GET_MATCH_SUCCESS",
    GET_MATCH_FAILURE:"GET_MATCH_FAILURE"
}

export const getmatchRequest =(data)=>{
    return {
        type:MatchActionType.GET_MATCH_REQUEST,
        payload:data
    }
}
export const getmatchSuccess =(data)=>{
    return {
        type:MatchActionType.GET_MATCH_SUCCESS,
        payload:data
    }
}
export const getmatchFailure =(data)=>{
    return {
        type:MatchActionType.GET_MATCH_FAILURE,
        payload:data
    }
}

export const getmatch=(dispatch)=>{
    dispatch(getmatchRequest())
    return axios.get("")
    .then(r=>dispatch(getmatchSuccess(r.data)))
    .catch(err=>dispatch(getmatchFailure()))
}

//https://api.cricapi.com/v1/currentMatches?apikey=0a2a36a2-1233-41b0-9526-288e04435bab&offset=0