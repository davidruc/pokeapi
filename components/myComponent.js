export default{
    getData(){
        const ws = new Worker("../storage/wsMyComponent.js", {type:"module"});
        ws.postMessage({action: "showCard"})
        ws.addEventListener("message", (e) => {
            console.log();
            /* document.querySelector(".ppp").innerHTML = data.forEach(val =>{
                val.name;
            }); */
        })

    },
    /* useData(){
        
    } */

}