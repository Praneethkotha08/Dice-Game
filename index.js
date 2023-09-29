var randomNumber1=Math.floor(Math.random()*6)+1;
var a="./dice"+ randomNumber1 +".png";
var randomNumber2=Math.floor(Math.random()*6)+1;
var b="./dice"+ randomNumber2 +".png";
document.querySelector(".img1").setAttribute("src",a);
document.querySelector(".img2").setAttribute("src",b);
if(a>b){
    document.querySelector("h1").innerHTML="🚩Player1 wins";
}
else if(a<b){
    document.querySelector("h1").innerHTML="Player2 wins🚩";
}
else{
    document.querySelector("h1").innerHTML="It's an Tie";
}