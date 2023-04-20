let wsMyComponent ={
    showCard(p1){

    }
}
self.addEventListener("message", (e)=>{
    postMessage(wsMyComponent[`${e.data.module}`](e.data.data))
})