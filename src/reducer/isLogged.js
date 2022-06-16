const isLogged =(isLogged='LOGGEDOUT',action)=>{
    switch(action.type){
        case 'LOGGEDIN': return isLogged='LOGGEDIN'
        case 'LOGGEDOUT':return isLogged='LOGGEDOUT'
        default: return isLogged
    }
}
export default isLogged; 