'use strict'

let troca = document.querySelector('.english');
troca.addEventListener ('click', function() {
let test_a_troca = document.getElementById("left-login-title").innerHTML;
if(test_a_troca == "<h1>Faça login<br>E entre para o nosso time</h1>") { 
      document.getElementById("left-login-title").innerHTML = "<h1>Sign in<br>And join our team</h1>";
   }
   else {
    document.getElementById("left-login-title").innerHTML = "<h1>Faça login<br>E entre para o nosso time</h1>";
   }
});

let troca1 = document.querySelector('.english');
troca1.addEventListener ('click', function() {
let test_a_troca1 = document.getElementById("password").innerHTML;
if(test_a_troca1 == "Senha") { 
      document.getElementById("password").innerHTML = "Password";
   }
   else {
    document.getElementById("password").innerHTML = "Senha";
   }
});

let troca2 = document.querySelector('.english');
troca2.addEventListener ('click', function() {
let test_a_troca2 = document.getElementById("user").innerHTML;
if(test_a_troca2 == "Usuário") { 
      document.getElementById("user").innerHTML = "User";
   }
   else {
    document.getElementById("user").innerHTML = "Usuário";
   }
});