const logo3d = document.getElementById("logo");

const heigh = logo3d.clientHeight;
const width = logo3d.clientWidth;

logo3d.addEventListener("mousemove", (evt)=>{


    const {layerX, layerY} = evt
    const yRotation = (
        (layerX - width /2) / width
    ) *40
    const xRotation = (
        (layerY - heigh /2) / heigh
    ) *40
    

    logo3d.style.transform = `perspective(900px) scale(1.1) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
})
logo3d.addEventListener("mouseout", ()=>{
    logo3d.style.transform = ` 
    perspective(900px) 
    scale(1)
    rotateX(0deg)
    rotateT(0deg)`
})