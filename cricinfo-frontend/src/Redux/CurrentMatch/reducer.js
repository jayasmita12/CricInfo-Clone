import { MatchActionType } from "./action";


const initialState ={
    match:[],
    loading:false,
    error:false
}

export const CurrentMatchReducer=(state=initialState,action)=>{
    switch (action.type) {
        case MatchActionType.GET_MATCH_REQUEST:{
            return{
                ...state,
                loading:true,
                error:false
            }
        }
        case MatchActionType.GET_MATCH_SUCCESS:{
            return{
                ...state,
                loading:false,
                error:false,
                match:action.payload
            }
        }
        case MatchActionType.GET_MATCH_FAILURE:{
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