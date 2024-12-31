self.addEventListener("install",(evt)=>{
    console.log('service has already been installed')
})




self.addEventListener("activate", (evt) => {
    console.log('service worker has been activated')
})