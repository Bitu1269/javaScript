let heading = document.getElementById("demo");
console.log(heading);

let para = document.getElementsByClassName("democlass");
console.log(para);

para[0].style.color = "red";
para[1].style.color = "green";
let btn=document.getElementById("button");
btn.addEventListener("click",()=>{
    heading.innerText="Button Clicked!";
    // heading.style.color="red";
    heading.style.color="blue";
})

document.getElementById("head2").onclick = function(){
    alert("heading is clicked")
}
//Bubling event
document.getElementById("head2").addEventListener('click', function(e){
    alert("click heading again")
    e.stopPropagation()
}, false)
//even capturing
document.getElementById("button").addEventListener('click', function(e){
    alert("once heading again")
    e.preventDefault ()
}, false)

//chai or code settimeout
// setTimeout(()=>{
//     console.log("Bitu kumar");
// },200)

// const sayBitu= function(){
//     console.log("Bitu kumar");
// }
// const changeTest = function(){
//     document.querySelector("h1")
//     .innerHTML="best JS"
// }

// const changeMe =setTimeout(sayBitu, 2000)

// document.querySelector("#stop").addEventListener("click", function(){
//     clearTimeout(changeMe);
//     console.log("STOP")
// })

//start and stop

const sayDate= (function(){
    console.log("Bitu", Date.now());
})
setInterval(sayDate, 1000)