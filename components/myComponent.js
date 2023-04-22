export default{
    getData(){
        const ws = new Worker("../storage/wsMyComponent.js", {type:"module"});
        ws.postMessage({action: "showCard"})
        ws.addEventListener("message", (e) => {
            console.log();
            let doc = new DOMParser().parseFromString(`<h1>${e.data.dataPokemones.name}</h1><br><img src="${e.data.dataPokemones.sprites.front_default}" alt="">`, "text/html");
            document.querySelector(".ppp").append(...doc.body.children)
             
        })
       
    },
    /* useData(){
        
    } */

}