const Red=(state="blue",action)=>{

if(action.type==='1'){
        state=action.value;
}

    return state;
}

export default Red;