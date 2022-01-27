import  {HomeData } from './Data/HomeData'

export const initialState = {
    data: HomeData,
}

const reducer = (state, action) => {


    switch (action.type) {
        
          
                case "CHARGE_DATA":
                    return{
                        ...state,
                        data: [...state.data, action]
                    }
            
        
             default:
                 return state;
                }

    


}


export default reducer;