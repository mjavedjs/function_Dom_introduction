// let heading=document.querySelector("#head");
// heading.innerHTML="javed_Chohan";
// console.log(heading);

// function self( number1 , number2)
// {
//     return number1 - number2
// }
// let total=self(22,11);
// console.log(total);

// function percentage(sub1,sub2,sub3){
//     let total=300;
//     let obtained=sub1+sub2+sub3;
//     let percentage = obtained/total*100;
//     return percentage +" % ";
// }
// let studetn1=percentage(50,80,90);
// let studetn2=percentage(65,100,90);
// let studetn3=percentage(50,100,90);
// console.log(studetn1);
// console.log(studetn2);
// console.log(studetn3);
let paragragh=document.querySelector(".para");
let main_div=document.querySelector("div");
let head=document.querySelector("#head")

// function 1
function heading(){
paragragh.innerHTML="DOM CHala ra hia";
 paragragh=innerHTML=""

}
// function 2
function hello(){
    main_div.innerHTML="<h1>These are function </h1> <br/><ul><li>Home</li> <li>about</li><li>sevies</li><li>blog  </li></ul>"

    main_div="";
}

function valueChange(){
 if(head.innerHTML==="On"){
    head.innerHTML="off"
 }
 else{
    head.innerHTML="On"
 }
}