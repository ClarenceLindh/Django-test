import { GET_PRODUCTS } from "../types";

const initialState = {
  products: [],
  loading:true
}

export default function(state = initialState, action: { type: any; payload: any; }){
  switch(action.type){
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        loading: false
      }
    default:
      return state
  }
}
