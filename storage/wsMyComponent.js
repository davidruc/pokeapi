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
            console.log(data.results);
            const urlss = [];
            let nameUrl = ``;
            data.results.forEach((val,id) => {
              nameUrl = `https://pokeapi.co/api/v2/pokemon/${val.name}`;
              urlss.push(nameUrl);
            });
            console.log(urlss);
            const dataPokemones = [];
            urlss.forEach((val)=>{
                async function infoPokemon(){
                    try {
                        const response = await fetch(val)
                        const data = await response.json();
                        dataPokemones.push(data)
                        return data
                    } catch (error){
                        console.error(error);
                    } 
 

                }
                infoPokemon().then(data => {
                    dataPokemones.forEach(val =>{
                        console.log(val.name); 
                        const nombres = val.name;
                    });
                    self.postMessage({ pokemones: data });
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