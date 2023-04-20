import config from "../storage/config.js";
export default{
    getData(){
        config.dataMyComponent();
        Object.assign(this, JSON.parse(localStorage.getItem("myComponent")))
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
            const dataPokemones = [];
            urlss.forEach((val)=>{
                async function infoPokemon(){
                    try {
                        const response = await fetch(val)
                        const datas = await response.json();
                        return datas
                    } catch (error){
                        console.error(error);
                    }
                    
                }
                infoPokemon().then(datas => dataPokemones.push(datas))
            })
            console.log(dataPokemones);
        });
    },
    /* useData(){
        const ws = new Worker("../storage/wsMyComponent.js", {type:"module"});
        ws.postMessage({module: "showCard", data: })
    } */

}