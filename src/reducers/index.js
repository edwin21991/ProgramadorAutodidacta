const reducer = (state, action) =>{
  switch (action.type){
    case'SET_FAVORITE':
      
      const exist = state.Favorite.find(item => item.id === action.payload.id)
      if (exist) return {...state}

      return{
        ...state,
        Favorite:[...state.Favorite, action.payload]
      }
    case'DELETE_FAVORITE':
      return{
        ...state,
        Favorite: state.Favorite.filter(items => items.id !== action.payload)
      }
    default:
      return state
  }
}

export default reducer