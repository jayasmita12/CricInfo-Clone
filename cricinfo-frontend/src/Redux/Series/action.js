import axios from "axios"
export const seriesActionType ={
    GET_SERIES_REQUEST:"GET_SERIES_REQUEST",
    GET_SERIES_SUCCESS:"GET_SERIES_SUCCESS",
    GET_SERIES_FAILURE:"GET_SERIES_FAILURE",

    
  GET_SINGLE_SERIES_REQUEST: "GET_SINGLE_SERIES_REQUEST",
  GET_SINGLE_SERIES_SUCCESS: "GET_SINGLE_SERIES_SUCCESS",
  GET_SINGLE_SERIES_FAILURE: "GET_SINGLE_SERIES_FAILURE",
}


export const getseriesRequest =(data)=>{
    return {
        type:seriesActionType.GET_SERIES_REQUEST,
        payload:data
    }
}
export const getseriesSuccess =(data)=>{
    return {
        type:seriesActionType.GET_SERIES_SUCCESS,
        payload:data
    }
}
export const getseriesFailure =(data)=>{
    return {
        type:seriesActionType.GET_SERIES_FAILURE,
        payload:data
    }
}

export const getSeries=(dispatch)=>{
    dispatch(getseriesRequest())
    return axios.get("")
    .then((r)=>dispatch(getseriesSuccess(r.data)))
    .catch((err)=>dispatch(getseriesFailure()))
}
// https://api.cricapi.com/v1/series?apikey=0a2a36a2-1233-41b0-9526-288e04435bab&offset=0

export const getsingleseriesRequest =(data)=>{
    return {
        type:seriesActionType.GET_SINGLE_SERIES_REQUEST,
        payload:data
    }
}
export const getsingleseriesSuccess =(data)=>{
    return {
        type:seriesActionType.GET_SINGLE_SERIES_SUCCESS,
        payload:data
    }
}
export const getsingleseriesFailure =(data)=>{
    return {
        type:seriesActionType.GET_SINGLE_SERIES_FAILURE,
        payload:data
    }
}

export const getSingleSeries=(id)=>(dispatch)=>{
    dispatch(getsingleseriesRequest())
    axios.get(``)
    .then((r)=>dispatch(getsingleseriesSuccess(r.data.data)))
    .catch((err)=>dispatch(getsingleseriesFailure()))
}

//https://api.cricapi.com/v1/series_info?apikey=0a2a36a2-1233-41b0-9526-288e04435bab&id=${id}