import { seriesActionType } from "./action";


const initialState ={
    series:[],
    loading:false,
    error:false,
    singleSeries:{}
}

export const SeriesReducer=(state=initialState,action)=>{
    switch (action.type) {
        case seriesActionType.GET_SERIES_REQUEST:{
            return{
                ...state,
                loading:true,
                error:false
            }
        }
        case seriesActionType.GET_SERIES_SUCCESS:{
            return{
                ...state,
                loading:false,
                error:false,
                series:action.payload
            }
        }
        case seriesActionType.GET_SERIES_FAILURE:{
            return{
                ...state,
                loading:false,
                error:true
            }
        }

        case seriesActionType.GET_SINGLE_SERIES_REQUEST:{
            return{
                ...state,
                loading:true,
                error:false
            }
        }
        case seriesActionType.GET_SINGLE_SERIES_SUCCESS:{
            return{
                ...state,
                loading:false,
                error:false,
                singleSeries:action.payload
            }
        }
        case seriesActionType.GET_SINGLE_SERIES_FAILURE:{
            return{
                ...state,
                loading:false,
                error:true
            }
        }
            
           
    
        default:
           return {
            ...state
           }
    }
}