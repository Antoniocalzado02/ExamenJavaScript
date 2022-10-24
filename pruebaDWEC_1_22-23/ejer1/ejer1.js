let button=document.getElementById('button')
let colorSelect=document.querySelector('#colorSelect');

button.click(function(){
    let eliminaElem=colorSelect.val();
    eliminaElem.remove();
});


