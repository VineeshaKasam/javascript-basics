var numOne = document.getElementById("num-one");
var numTwo = document.getElementById("num-two");
var result = document.getElementById("mul-result");

numOne.addEventListener("input", mul);
numTwo.addEventListener("input", mul);

function mul(){
var first_num = numOne.value;
var second_num = numTwo.value;
result.innerHTML = "The product of two numbers is: " + (first_num*second_num)
}