function focus(){
    const focusElement = document.querySelector('.input-box');
    if(focusElement){
        focusElement.focus();
    }
};

function createItem(){
    const inputBoxContent = document.querySelector('.input-box').value;
    if(inputBoxContent !== ''){
        const newLi = document.createElement('li');
        newLi.textContent = inputBoxContent;

        document.querySelector('.list-parent').appendChild(newLi);

        //Emptying the input box
        document.querySelector('.input-box').value = '';
    }else{
        setInterval(()=>{
            document.querySelector('.msg').classList.add('msg--hidden');
        }, 2000);
        document.querySelector('.msg').classList.remove('msg--hidden');
    }

    focus();
}
