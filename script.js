// get the all buttons value
// shot the button value in input area
// get the input field
// if i click on total button it should give me all tatal number


var btns = document.querySelectorAll('.btn');
var time  = document.getElementById('time');
var darkModeElement = document.querySelectorAll('.bg-color');
var output = document.getElementById('output');
var disableBtn = document.querySelectorAll('.disBtn');

function showTime(){
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+ minutes : minutes;
  var strTime = hours + ':' + minutes;
  time.innerHTML = strTime;
}


document.getElementById('darkmode').onclick = function(){
  this.classList.toggle('active');
  this.parentNode.classList.toggle('bg');
  for(var i=0; i<darkModeElement.length;i++){
    darkModeElement[i].classList.toggle('bg');
  }
}



function getValue(e){
  var inputId = e.target.id;
   output.value += e.target.innerText;
  if(inputId == "clear"){
    if(output){
      output.value = '';
    }
  } 
  if(inputId == "remove"){
    output.value = output.value.substring(0, output.value.length -1);
  }
  
  if(inputId == "percent"){
    output.value  = parseInt(output.value) / (100).toFixed(3);
  }
  
 }


if(output.value.length > 0){
  if(inputId == "divied" || inputId =='muntiply' || inputId == 'plus'){
    this.disabled = true;
  }
  }

for(var i=0; i<btns.length;i++){
  btns[i].addEventListener("click" , getValue);
  console.log(disableBtn[i])
}


document.getElementById('total').onclick = function(){
  output.value = eval(output.value)
}
showTime();