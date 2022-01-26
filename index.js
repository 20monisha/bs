var randomNumber1=Math.floor(Math.random()*6+1);
var randomImage="dice"+randomNumber1+".png";
//var value="images/"+randomImage;
var img1=document.querySelectorAll("img")[0];
img1.setAttribute("src",value);

var randomNumber2=Math.floor(Math.random()*6+1);
var randomImage2="dice"+randomNumber2+".png";
//var value2="images/"+randomImage2;
var img2=document.querySelectorAll("img")[1];
img2.setAttribute("src",value2);

if(randomNumber1>randomNumber2){
  document.querySelector("h1").textContent="Player 1 Won";
}else if(randomNumber1<randomNumber2){
  document.querySelector("h1").textContent="Player 2 Won";
}else{
  document.querySelector("h1").textContent="Draw!!!";
}
