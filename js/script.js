function init(){
  function setAlert(){
    var input = document.getElementById('entryinput');  
    alert('Ana Rosiles' + input);
  }
  var alertBt = document.getElementById('entrybutton');
  alertBt.addEventListener('click', setAlert);
  alertBt.addEventListener('click', function(){
    var resultTxt = document.getElementById('textoutput');
    resultTxt.innerHTML = input;
  }

window.addEventListener('load', init);