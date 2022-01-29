import  {HomeData } from './Data/HomeData'

export const initialState = {
    data: HomeData,
    basket: [],

}

const reducer = (state, action) => {
    console.log('soy el addtobasket', action);
    switch (action.type) {
        
        case "ADD_TO_BASKET":
            return {
              ...state,
              basket: [...state.basket, action.item],
            };
               
            
        
             default:
                 return state;
                }

    


}


export default reducer;