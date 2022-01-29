import  {HomeData } from './Data/HomeData'

export const initialState = {
    data: HomeData,

}

const reducer = (state, action) => {

    switch (action.type) {
        
        case "ADD_PRODUCT":
            return {
              ...state,
              product: [...state.product, action.item],
            };
               
            
        
             default:
                 return state;
                }

    


}


export default reducer;