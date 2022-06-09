let answer = document.getElementById('result');


let calculate = (number) => {
  let b = document.getElementById('eq');
  if(b.value == "yes"){
    char = answer.value;
    char = char.slice(-1);
    if((char >='0' && char <= '9')){
      answer.value += number;
    }
    else{
      if(isNaN(number)){
        answer.value = answer.value.substring(0,answer.value.length-1);
        if(answer.value===""){
          if(number != '*' && number != '/' && number !='+')
            answer.value += number;
          }
        else{
          answer.value += number;
        }

      }
      else{
        answer.value +=number;
      }
    }
  }
  else{
      if(isNaN(number)){
        b.value="yes";
        answer.value+=number;
      }
      else{
        answer.value = "";
        b.value = "yes";
        answer.value += number;
      }

  }
}

let sqrt = () => {
  const b = document.getElementById('his');
  const entry = document.createElement('li');
  entry.style.color="white";
  entry.innerHTML = "sqrt("+answer.value+")";
    b.appendChild(entry);
      answer.value = Math.sqrt(answer.value);
}

let sin = (ele) => {
  var v = ele.value
  const b = document.getElementById('his');
  const entry = document.createElement('li');
  entry.style.color="white";
  if(v=="inv")
  {

  entry.innerHTML = "sin("+answer.value+")";
  answer.value = Math.sin(answer.value);
}
  else
  {

  entry.innerHTML = "asin("+answer.value+")";
  answer.value = Math.asin(answer.value);
}
b.appendChild(entry);

}

let empty = () => {
  answer.value = "";
}

let rad = () => {
  var b = document.getElementById('rad_tog');
  const k = document.getElementById('his');
  const entry = document.createElement('li');
  entry.style.color="white";
  if(b.value == "rad")
  {

  b.value= "deg";
  b.innerHTML = "deg";
  entry.innerHTML = "rad("+answer.value+")";
    answer.value = (answer.value*Math.PI)/180;
  }
  else {
    answer.value = (answer.value*180)/Math.PI;
    b.value = "rad";
    b.innerHTML = "rad";
    entry.innerHTML = "deg("+answer.value+")";
  }
  k.appendChild(entry);

}

let brk = (b) => {
  if(b.value == 'left'){
    answer.value += '(';
  }
  else{
    answer.value += ')';
  }
}

let tan = (ele) => {
  const k = document.getElementById('his');
  const entry = document.createElement('li');
  entry.style.color="white";
  var v = ele.value;
  if(v=="inv"){

  entry.innerHTML = "tan("+answer.value+")";
  answer.value = Math.tan(answer.value);
  }
  else{
  entry.innerHTML = "atan("+answer.value+")";
  answer.value = Math.atan(answer.value);
  }
    k.appendChild(entry);
}

let cos = (ele) => {
  const k = document.getElementById('his');
  const entry = document.createElement('li');
  entry.style.color="white";
  var v = ele.value;
  if(v=="inv"){
  entry.innerHTML = "cos("+answer.value+")";
  answer.value = Math.cos(answer.value);
  }
  else{
  entry.innerHTML = "acos("+answer.value+")";
  answer.value = Math.acos(answer.value);
  }
    k.appendChild(entry);
}

let ln = () => {
  const k = document.getElementById('his');
  const entry = document.createElement('li');
  entry.style.color="white";
    entry.innerHTML = "ln("+answer.value+")";
    k.appendChild(entry);
  answer.value = Math.log(answer.value);
}

let log = () => {
  const k = document.getElementById('his');
  const entry = document.createElement('li');
  entry.style.color="white";
    entry.innerHTML = "log("+answer.value+")";
    k.appendChild(entry);
  answer.value = Math.log10(answer.value);

}

let recipro = () => {
  const k = document.getElementById('his');
  const entry = document.createElement('li');
  entry.style.color="white";
    entry.innerHTML = "1/("+answer.value+")";
    k.appendChild(entry);
  answer.value = 1/(answer.value);
}

let expo = () => {
  const k = document.getElementById('his');
  const entry = document.createElement('li');
    entry.innerHTML = "e^("+answer.value+")";
    k.appendChild(entry);
  answer.value = Math.exp(answer.value);
}


let nap = () => {
  if(answer.value.length==0){
    answer.value += Math.E;
  }
  else{
  char = String(answer.value);
  char = char.slice(-1);
  if(char >= '0' && char <= '9' ){
    answer.value += '*'+Math.E;
  }
  else{
    answer.value += Math.E;
  }
  }
}

let pie = () => {
  if(answer.value.length==0){
    answer.value += Math.PI;
  }
  else{
  char = String(answer.value);
  char = char.slice(-1);
  if(char >= '0' && char <= '9' ){
    answer.value += ('*'+Math.PI);
  }
  else{
    answer.value += Math.PI;
  }
  }
}

let bs = () => {
  answer.value = answer.value.slice(0,-1) ;
}
let mod = () => {
  if(answer.value.length!=0){
    if(Math.sign(answer.value)==-1)
    answer.value = answer.value*(-1);
  }
}

let inv = () => {
  var k = document.getElementById('inverse');
  var ele_list = document.getElementsByClassName('inv');
  if(k.value == "inv"){
    k.value = "a_inv";
    for(var i=0 ; i< ele_list.length ; i++){
      ele_list[i].value="a_inv";
      ele_list[i].innerHTML = ele_list[i].innerHTML + "-1".sup();
    }
    k.innerHTML = "NOR";
  }
  else{
    var ele_list = document.getElementsByClassName('inv');
    k.value="inv";
    for(var i=0 ; i< ele_list.length ; i++){
      ele_list[i].value="inv";
      char = String(ele_list[i].innerHTML);
      ele_list[i].innerHTML= char.slice(0,3);
    }
    k.innerHTML = "INV";
  }
}

let pow = () => {
  const k = document.getElementById('his');
  const entry = document.createElement('li');
    entry.innerHTML = "("+answer.value+")^2";
    k.appendChild(entry);
  answer.value = Math.pow(answer.value,2);
}

let tpow = () => {
  if(answer.value.length>0)
  answer.value += "**";
}

let output = (ele) => {
  const b = document.getElementById('his');
  const entry = document.createElement('li');
  entry.innerHTML = answer.value;
  b.appendChild(entry);
  answer.value = eval(answer.value);
  ele.value = "no";
}

function openNav() {
var x = window.matchMedia("(max-width: 700px)")
nav(x);
// x.addListener(nav)

}

function nav(x){
  if(x.matches){
    document.getElementById("hisbar").style.width = "100%";
    document.getElementById("result").style.marginTop = "30px";
  }
  else{
    document.getElementById("hisbar").style.width = "250px";
  }
}

function closeNav() {
  document.getElementById("hisbar").style.width = "0";
}

let sw = (ele) => {
  let c=document.getElementById('gen');
  let g=document.getElementById('calculator');
  if(ele.value=="graph"){
    c.style.display = "none";
    ele.innerHTML= "Calculator";
    ele.value = "calcu";
    g.className = "gr2";

  }
  else{
    g.className = "gr";
    ele.innerHTML= "Graph Plotter";
    ele.value = "graph";
    c.style.display = "flex";
  }
}

const chk = document.getElementById('yaha');
chk.addEventListener('change', () => {
	document.body.classList.toggle('dark-mode');
});
