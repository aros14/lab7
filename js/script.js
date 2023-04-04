function init(){
  var button = document.getElementById('entrybutton');

  function setAlert(){
    var inText = document.getElementById('entryinput');  
    document.getElementById('textoutput').innerHTML = inText.value;
    alert("Ana Rosiles" + inText.value);
  }

  button.addEventListener('click', setAlert);

window.addEventListener('load', init);