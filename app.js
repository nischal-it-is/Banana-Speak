var buttonTranslate=document.querySelector("#translate");
var inputText=document.querySelector('#input');

function clickHandler(){
    console.log('Clicked');
    console.log(inputText.value);
};
buttonTranslate.addEventListener('click',clickHandler);