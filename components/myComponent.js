export default{
    getData(){
        const ws = new Worker("../storage/wsMyComponent.js", {type:"module"});
        ws.postMessage({action: "showCard"})
        ws.addEventListener("message", (e) => {
            /* console.log(e.data.dataPokemones.sprites.versions['generation-v']['black-white'].animated.front_default); */

            let doc = new DOMParser().parseFromString(`
            <div class="card">
                <div class="content">
                    <div class="back">
                    <div class="back-content">
                        <svg stroke="#ffffff" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" height="50px" width="50px" fill="#ffffff">

                        <g stroke-width="0" id="SVGRepo_bgCarrier"></g>

                        <g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g>

                        <g id="SVGRepo_iconCarrier">

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
                            <svg fill-rule="nonzero" height="15px" width="15px" viewBox="0,0,256,256" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"><g style="mix-blend-mode: normal" text-anchor="none" font-size="none" font-weight="none" font-family="none" stroke-dashoffset="0" stroke-dasharray="" stroke-miterlimit="10" stroke-linejoin="miter" stroke-linecap="butt" stroke-width="1" stroke="none" fill-rule="nonzero" fill="#20c997"><g transform="scale(8,8)"><path d="M25,27l-9,-6.75l-9,6.75v-23h18z"></path></g></g></svg>
                        </div>
                        <p class="card-footer">
                        height : ${e.data.dataPokemones.height} m &nbsp; | &nbsp; weight : ${e.data.dataPokemones.weight} kg
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>



            
            `, "text/html");
            if (e.data.dataPokemones.sprites.versions['generation-v']['black-white'].animated.front_default != null) {
                document.querySelector(".ppp").append(...doc.body.children)
            }
        })
       
    },
    /* useData(){
        
    } */

}