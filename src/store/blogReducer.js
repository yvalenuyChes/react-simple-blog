const initialState = {
   PopupWindowState: false,
}

export default function appReducer(state = initialState, action){
   switch(action.type){
      case 'OPEN_POPUP':
         return{
            ...state,
            PopupWindowState:true
         }
      
         case 'CLOSE_POPUP':
            return{
            ...state,
            PopupWindowState:false
         }
       default: return state
   }
}