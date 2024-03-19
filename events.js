// let btn=document.querySelector("#btn1");
// btn.onclick=(evt)=>{
//     console.log(`you clicked the button`);
//     console.log(evt.type);
// };

// let btn=document.querySelector("#btn1");
// btn.addEventListener("click",() => {
//     console.log("you clicked the button");
//     console.log();
// });

// const handler2=() => {
//     console.log("you clicked the button again!!");
// };

// btn.addEventListener("click",handler2);

// btn.addEventListener("click",() => {
//     console.log("you clicked the button again!!!!!");
// });

// btn.removeEventListener("click",handler2);

let btn=document.querySelector(".mode");
let currmode="light";
btn.addEventListener("click",()=> {
     if(currmode==="light"){
        currmode="dark";
        document.querySelector("body").style.backgroundColor="white";
     }
     else{
        currmode="light";
        document.querySelector("body").style.backgroundColor="black";
     }
     console.log(currmode);
});