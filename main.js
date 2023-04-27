import myComponent from "./components/myComponent.js";
myComponent.getData();
myComponent.botonesPokemones();

const showAll = document.querySelector("#showAll");
showAll.addEventListener("click", (e)=>{
    location.reload();
})

