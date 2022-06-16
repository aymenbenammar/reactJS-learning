export function increment() {
    return {
        type:'INCREMENT'
    }   
}
export function decrement(){
    return{
        type:'DECREMENT'
    }
}
export function reset(){
    return {
        type :'RESET'
    }
}
export function login(){
    return{
        type:'LOGGEDIN'
    }
}
export function logout(){
    return{
        type:'LOGGEDOUT'
    }
}