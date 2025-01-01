import { authtcation } from "./auth/auth.conttroller.js";


let auth = new authtcation()


 if('serviceWorker' in navigator){
     navigator.serviceWorker.register('/sw.js')
      .then((res)=> console.log('serviceWorker worker registered',res))
       .catch(err => console.log('serviceWorker registration failed', err))
 }



