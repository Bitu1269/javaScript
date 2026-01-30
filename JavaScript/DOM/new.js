// const { act } = require("react");

// // Heading click
// document.getElementById("head").addEventListener("click", function () {
//     alert("HEADING is clicked");
// });

// // Select all divs with class "box"
// let boxes = document.getElementsByClassName("box");

// // Add click event to each box
// for (let i = 0; i < boxes.length; i++) {
//     boxes[i].addEventListener("click", function () {
//         this.classList.toggle("Highlight");
//     });
// }

// document.getElementsByClassName("btnclass").addEventListener("click", ()=>{
//     window.location.reload()
// });

// document.getElementsByClassName("parent").addEventListener("click", ()=>{
//     alert("alert parent side");
// })

// document.getElementsByClassName("child").addEventListener("click", (e)=>{
//     alert("alert child click");
//     e.stopPropagation()
// })
// //form input submit button
// let form =document.getElementById("myform");
// let input =document.getElementById("inputtext");
// let output =document.getElementById("output");

// form.addEventListener("submit", (e)=> {
//     e.preventDefault();
//     output.innerText="submit output"+input.value;
// });
// input.addEventListener("input",()=> {
//     console.log("typing: ",input.value);
// });


// let btn = document.getElementById("toggleBtn");

// btn.addEventListener("click", function () {
//     document.body.classList.toggle("dark");
// });


// document.getElementById("parent").addEventListener("click",(e)=>{
//     if(e.target.tagname == "Button"){
//         console.log(e.target.innerText +"was clicked");
//         // event.target.style.bacgroundcolor()
//     }
// })


// function newfun(name){
//     console.log("hello"+ name);
// }

// function greet(){
//     let name="Bitu";
//     useCallback(name);
// }
// processUser(newfun);

// setTimeout(function(){
//     console.log("Execute after 2 seconds");
// },2000);

// function add(a,b){
//     return a+b;
// }

// function fun2(action){
//     action();
//     action();
// }
// fun2(add);

// function calculate(a,b, operation){
//     return operation(a,b);
// }
// console.log(calculate(5,2,add));

// function outer(){
//     return function inner(){
//         console.log("Hello");
//     }
// }

// let arr =[2,4,6,8,9];
// arr.forEach(num, ()=>{
//     console.log(num);
// })

//Map in js

// let map =arr.map((num)=>{
//     return num * 3;
// })

// console.log(map);


//filter in array in js
// let ages = [32, 33, 16, 40];
// let result = ages.filter(checkAdult);

// function checkAdult(age) {
//   return age >= 18;
// }
// console.log(result);  


//reduce() in js

// const numbers = [175, 50, 25];

// document.getElementById("demo").innerHTML = numbers.reduce(myFunc);

// function myFunc(total, num) {
//   return total - num;
// }

// console.log("a");
// console.log("b");
// console.log("c");
// console.log("d");

//task that take.but don't block the program.
//fetch is function which return promises

// function callBack(callback){
//     setTimeout(function(){
//         console.log("User fetched");
//         callBack();
//     },2000);
// }

// function getPosts(callback){
//     setTimeout(()=>{
//         console.log("commnet fetched");
//         callback();
//     },1000);
// }

// function getComments(callback){
//     setTimeout(()=>{
//         console.log("commnet fetched");
//         callback();
//     },1000);
// }


////Promise one
// const promisesOne = new Promise(function(myResolve, myReject){
//     setTimeout(()=>{
//         console.log("async task is created.");
//         myResolve({name: "Bitu", city: "Ranchi"});
//     },2000);
// });

// promisesOne.then((user)=>{
//     console.log("user");
// });

////Promise two
const promiseTwo = new Promise(function(resolve, reject){
    setTimeout(()=>{
        let error = false;
        if(!error){
            resolve({username:"Aman", age: 20});
        }else{
            reject("Error is Occur here");
        }
    });
},2000);

promiseTwo
    .then((user)=>{
        console.log(user);
        return user.username;
    })
    .then((age)=>{
        console.log(username);
    })
    .catch((err)=>{
        console.log(err);
    });

//callback and                       promises
// nested
// code readability is not Good 
// hard error handling 
// masive code    

// promises
// chaning Process
// claen structure 
// for error handling use .then 


//Fetch 

function fetch(url){
    return new Promise((resolve, reject)=>{
        //1 browser starts HTTP request in background (web API)
        //2 When response comes
        resolve(responseObject);
        // or if network fails.
        reject(error);
    });
}

fetch("https://jsonplaceholder.typicode.com/users").then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data);
});
