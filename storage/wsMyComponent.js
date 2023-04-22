let wsMyComponent ={
    showCard(){
        async function getPokemon(){
            try {
                const response = await fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=1281')
                const data = await response.json();
                return data
            }catch (error){
                console.error(error);
            }
        }
        
        getPokemon().then(data => {
            
            const urlss = [];
            let nameUrl = ``;
            data.results.forEach((val,id) => {
              nameUrl = `https://pokeapi.co/api/v2/pokemon/${val.name}`;
              urlss.push(nameUrl);
            });
            console.log(urlss);
            const dataPokemones = [];
            urlss.forEach(val =>{
                
                async function infoPokemon(){
                    try {
                        const response = await fetch(val)
                        const data2 = await response.json();
                        dataPokemones.push(data2)
                        return data2
                    } catch (error){
                        console.error(error);
                    } 
 

                }
                infoPokemon().then(data => {
                    self.postMessage({ dataPokemones: data });
                })
            })
        });
    }
}
self.addEventListener("message", (e)=>{
    if (e.data.action === "showCard") {
        wsMyComponent.showCard();
    }
   /*  postMessage(wsMyComponent[`${e.data.module}`](e.data.data)) */
})