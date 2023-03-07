export const intialstate={
    basket:[],
    searchinput:""
  }
  
  
  export const reducer=(state,action)=>{
  
    const {type,payload}=action;
    switch(type){
      case"add":
      return{
        ...state,
        basket:[...state.basket,payload.pro]
      }
      case"removefromcart":

        const index=state.basket.findIndex((basketitem)=>basketitem.id===payload.remove );

        let newbasket=[...state.basket];

        if(index>=0){
          newbasket.splice(index,1)

        }
        return{
          ...state,
          basket:newbasket
        }
        case "search":
          return{
            ...state,
            searchinput:payload.input
          }
      
      
  default:
    }
  return intialstate;
  }