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
    },
    searchType(url){
            async function tiposPokenes(){
                try {
                    const response = await fetch(url);
                    const data3 = await response.json();
                    return data3;
                }catch (error){
                    console.error(error);
                }
            }tiposPokenes().then(data3 => {
                data3.pokemon.map(elemt => {
                    async function infoTipos(){
                        try {
                            const response = await fetch(elemt.pokemon.url)
                            const data4 = await response.json();
                            return data4
                        } catch (error){
                            console.error(error);
                        } 
                    }   
                infoTipos().then(data4 => {
                    
                    self.postMessage({data : data4})
                })
            })
        })
    }
}
self.addEventListener("message", (e)=>{
    postMessage(wsMyComponent[`${e.data.action}`](e.data.url))
})