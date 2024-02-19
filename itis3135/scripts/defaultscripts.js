document.getElementById("welcome").innerHTML = "Today is: " + Date();
function myFunction() {

let x = document.getElementById("name").value;
let y= document.getElementById("feel").value;

let text= `The Yummy Salmon welcomes you, ${x} !
We're glad you are doing ${y}!`;
document.getElementById("welcome").innerHTML = text;
}
function getPolygon(){
let x = document.getElementById("numb").value;
// If x is Not a Number or less than one or greater than 10
let text;
if (isNaN(x) || x < -10 || x > 10||x===0) {
text = "Input not valid";
} else {
if(x<0){
    x=Math.abs(x);
}
text = "Input OK";
x=Math.round(x);
switch(x){
case 1:
   alert("henagon");
   break;
case 2:
    alert("digon"); 
    break;
case 3:
    alert("trigon"); 
    break;
case 4:
    alert("tetragon"); 
    break;
case 5:
    alert("pentagon"); 
    break;
case 6:
    alert("hexagon"); 
    break;
case 7:
    alert("heptagon"); 
    break;
case 8:
    alert("octogon"); 
    break;
case 9:
    alert("enneagon"); 
    break;
case 10:
    alert("decagon"); 
    break;
}
}
document.getElementById("validate").innerHTML = text; 
}
function getFunny(){
let x = document.getElementById("funny").value;
document.getElementById("laugh").innerHTML=`HAHAHAH I think ${x} is funny too!`;
}
function getSalmon(){
let x = document.getElementById("enjoy").value;
x=x.toLowerCase();
if(x=="y"){
    document.getElementById("order").innerHTML="LOAD THOSE FRYERS BOYS!! WE GOT AN ORDER OF FRESH SALMON ON THE HOUSE FOR THE LOVELY CUSTOMER!!!"
}else if(x=="n"){
    document.getElementById("order").innerHTML="So thats a no go on the Salmon Plate? BOYSSS turn off the oven the customer \"isnt in the mood for salmon\" uhhh.";
}else{
    document.getElementById("order").innerHTML="Not a valid answer";
}
}
function getAge(){
let x = document.getElementById("age").value;
if(x==NaN){
    document.getElementById("wisdom").innerHTML="please input a number";
}
else if(x<=0){
    document.getElementById("wisdom").innerHTML="Common buddy we both know your not that old";
}else if(x>0&&x<10){
    document.getElementById("wisdom").innerHTML="welcome to the world you got so much potential dont waste it!";
}
else if (x>10&&x<40){
    document.getElementById("wisdom").innerHTML="keep it pushing your in a transititional phase but youll make it through trust me?";
}
else if(x>40){
    document.getElementById("wisdom").innerHTML="You got some experience wisdom like that doesnt come naturally, I got to know your secret";
}
}
function getJoke(){
let x = document.getElementById("hilarious").value;
x=x.toLowerCase();
if(x=="y"){
    document.getElementById("joke").innerHTML="What did the egg say to the frying pan?....You crack me up."
}else if(x=="n"){
    document.getElementById("joke").innerHTML="ouch... ill remeber this";
}else{
    document.getElementById("joke").innerHTML="Not a valid answer";
}
}