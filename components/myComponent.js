export default{
    
    getData(){
        const ws = new Worker("../storage/wsMyComponent.js", {type:"module"});
        ws.postMessage({action: "showCard"})
        ws.addEventListener("message", (e) => {
            let doc = new DOMParser().parseFromString(`
            <div class="card">
                <div class="content">
                    <div class="back">
                    <div class="back-content">
                        <svg stroke="#ffffff" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" height="50px" width="50px" fill="#ffffff">

                        <g stroke-width="0" id="SVGRepo_bgCarrier"></g>

                        <g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g>

                        <g id="SVGRepo_iconCarrier">
                        <h1 class="ids">#${e.data.dataPokemones.id}</h1>
                        <img src="${e.data.dataPokemones.sprites.versions['generation-v']['black-white'].animated.front_default}" class="card-img-top" alt="...">
                        </g>

                        </svg>
                        <strong>${e.data.dataPokemones.name}</strong>
                    </div>
                    </div>
                    <div class="front">
                    
                    <div class="img">
                        <div class="circle">
                        </div>
                        <div class="circle" id="right">
                        </div>
                        <div class="circle" id="bottom">
                        </div>
                    </div>

                    <div class="front-content">
                        <small class="badge">type: ${e.data.dataPokemones.types['0'].type.name}</small>
                        <div class="description">
                        <div class="title">
                            <p class="title">
                            <strong>experience: ${e.data.dataPokemones.base_experience}</strong>
                            </p>
                            <svg fill-rule="nonzero" height="15px" width="15px" viewBox="0,0,256,256" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"><g style="mix-blend-mode: normal"  font-family="none" stroke-dashoffset="0"  stroke-miterlimit="10" stroke-linejoin="miter" stroke-linecap="butt" stroke-width="1" stroke="none" fill-rule="nonzero" fill="#20c997"><g transform="scale(8,8)"><path d="M25,27l-9,-6.75l-9,6.75v-23h18z"></path></g></g></svg>
                        </div>
                        <p class="card-footer">
                        height : ${e.data.dataPokemones.height/10} m &nbsp; | &nbsp; weight : ${e.data.dataPokemones.weight/10} kg
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            `, "text/html");
            let doc2 = new DOMParser().parseFromString(`
            <div class="card">
                <div class="content">
                    <div class="back">
                    <div class="back-content">
                        <svg stroke="#ffffff" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" height="50px" width="50px" fill="#ffffff">

                        <g stroke-width="0" id="SVGRepo_bgCarrier"></g>

                        <g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g>

                        <g id="SVGRepo_iconCarrier">
                        <h1 class="ids">#${e.data.dataPokemones.id}</h1>
                        <img src="${e.data.dataPokemones.sprites.front_default}" class="card-img-top" alt="...">
                        </g>

                        </svg>
                        <strong>${e.data.dataPokemones.name}</strong>
                    </div>
                    </div>
                    <div class="front">
                    
                    <div class="img">
                        <div class="circle">
                        </div>
                        <div class="circle" id="right">
                        </div>
                        <div class="circle" id="bottom">
                        </div>
                    </div>

                    <div class="front-content">
                        <small class="badge">type: ${e.data.dataPokemones.types['0'].type.name}</small>
                        <div class="description">
                        <div class="title">
                            <p class="title">
                            <strong>experience: ${e.data.dataPokemones.base_experience}</strong>
                            </p>
                            <svg fill-rule="nonzero" height="15px" width="15px" viewBox="0,0,256,256" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"><g style="mix-blend-mode: normal" font-family="none" stroke-dashoffset="0" stroke-miterlimit="10" stroke-linejoin="miter" stroke-linecap="butt" stroke-width="1" stroke="none" fill-rule="nonzero" fill="#20c997"><g transform="scale(8,8)"><path d="M25,27l-9,-6.75l-9,6.75v-23h18z"></path></g></g></svg>
                        </div>
                        <p class="card-footer">
                        height : ${e.data.dataPokemones.height/10} m &nbsp; | &nbsp; weight : ${e.data.dataPokemones.weight/10} kg
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            `, "text/html"

            )
           
            if (e.data.dataPokemones.sprites.versions['generation-v']['black-white'].animated.front_default != null){
                document.querySelector(".ppp").append(...doc.body.children)
            } else if (e.data.dataPokemones.sprites.front_default != null){
                document.querySelector(".ppp").append(...doc2.body.children)    
            }

        })
        const tipo = document.querySelectorAll(".botones");
        tipo.forEach((buton)=>{
            buton.addEventListener("click",(e)=>{
                console.log("hey");
                
            })
        })
    },
    botonesPokemones(){
        
        const tipo = document.querySelectorAll(".botones");
        let html = [];
        let variable = '';
    
        tipo.forEach((buton)=>{
            buton.addEventListener("click",(e)=>{
                
                const data2 = e.target.getAttribute("data-type");
         
                async function tiposPokenes(){
                    try {
                        const response = await fetch(`https://pokeapi.co/api/v2/type/${data2}/`);
                        const data3 = await response.json();
                        return data3;
                    }catch (error){
                        console.error(error);
                    }
                }
                tiposPokenes().then(data3 => {
                    data3.pokemon.forEach(elemt => {
                     
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
                    
                        
                        
                            variable = `
                <div class="card">
                    <div class="content">
                        <div class="back">
                        <div class="back-content">
                            <svg stroke="#ffffff" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" height="50px" width="50px" fill="#ffffff">
    
                            <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
    
                            <g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g>
    
                            <g id="SVGRepo_iconCarrier">
                            <h1 class="ids">#</h1>
                            <img src="" class="card-img-top" alt="...">
                            </g>
    
                            </svg>
                            <strong>${data4.name}</strong>
                        </div>
                        </div>
                        <div class="front">
                        
                        <div class="img">
                            <div class="circle">
                            </div>
                            <div class="circle" id="right">
                            </div>
                            <div class="circle" id="bottom">
                            </div>
                        </div>
    
                        <div class="front-content">
                            <small class="badge">type: </small>
                            <div class="description">
                            <div class="title">
                                <p class="title">
                                <strong>experience: </strong>
                                </p>
                                <svg fill-rule="nonzero" height="15px" width="15px" viewBox="0,0,256,256" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"><g style="mix-blend-mode: normal" font-family="none" stroke-dashoffset="0" stroke-miterlimit="10" stroke-linejoin="miter" stroke-linecap="butt" stroke-width="1" stroke="none" fill-rule="nonzero" fill="#20c997"><g transform="scale(8,8)"><path d="M25,27l-9,-6.75l-9,6.75v-23h18z"></path></g></g></svg>
                            </div>
                            <p class="card-footer">
                            height :  m &nbsp; | &nbsp; weight :  kg
                            </p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                `, "text/html"
            
                html.push(variable)    
                     
                
                
                
                
            });
            
            /* 
            */
        })
        /* document.querySelector(".ppp").innerHTML = val; */
        
    })
    console.log(html);
    html.map((val)=>{
        console.log(val);
    })
        })
    });
}
}