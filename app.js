var buttonTranslate=document.querySelector("#translate");
var inputText=document.querySelector('#input');
// inputText.addEventListener('onChange',function change()
// {
//     console.log(inputText.value);
// })
var outputText=document.querySelector("#output");

function clickHandler(){
    console.log('Clicked');
    console.log(inputText.value);
    outputText.textContent="hey output  text is working";
};
buttonTranslate.addEventListener('click',clickHandler);