function init(){
  var button = document.getElementById('entrybutton');

  function setAlert(){
    var input = document.getElementById('entryinput');  
    alert('Ana Rosiles' + input);
  }

  button.addEventListener('click', setAlert);

window.addEventListener('load', init);