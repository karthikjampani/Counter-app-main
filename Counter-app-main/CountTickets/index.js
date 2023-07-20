
let lap1 = 0
let lap2 = 1


let countec = document.getElementById("counti")

function addi(){
   
    let k = lap1 + lap2
   lap1 = k
   countec.innerText = lap1
   

}





function noi(){
    lap1 = lap1 - 1

   countec.innerText = lap1
}



function savee(){
    let spv = document.getElementById("pv")
    spv.textContent =spv.textContent +  lap1 + ", "
    lap1 = 0
    countec.innerText = lap1
    
}

function res(){
    lap1 = 0
    countec.innerText = lap1

}