num1= document.getElementById("num1").value;
num2= document.getElementById("num2").value;

function calc(num1, num2) {
let result = (num2*num2)/(num1);
document.getElementById('test').innerHTML = result;

if(result<18){
    document.getElementById('reso').innerHTML = "You are thin"
}
else if(result>=25){
    document.getElementById('reso').innerHTML = "You are Overweight"
} else if(18<result<=22){
    document.getElementById('reso').innerHTML = "You are ideal"
}

else{
    return result;
}
}


































