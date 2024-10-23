import {legacy_createStore} from 'redux';

let initial ={
    count:0
}

function countReducer(state=initial,action){
    //console.log(action)
    if(action.type =='INCREMENT'){
        // return{...state,count:state.count+action.value}
        let  count=state.count+action.value
        return {...state,count}
    }
    if(action.type =='DECREMENT'){
        let  count=state.count-action.value
        return {...state,count}
    }
    return state
}

let Countstore = legacy_createStore(countReducer)

export default Countstore