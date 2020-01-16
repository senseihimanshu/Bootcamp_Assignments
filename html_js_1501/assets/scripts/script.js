function focus(){
    const focusElement = document.querySelector('.input-box');
    if(focusElement){
        focusElement.focus();
    }
};

function createItem(){
    const inputBoxContent = document.querySelector('.input-box').value;
    const msgElement = document.querySelector('.msg');
    if(inputBoxContent != ''){
        const newLi = document.createElement('li');
        newLi.textContent = inputBoxContent;

        document.querySelector('.list-parent').appendChild(newLi);

        //Emptying the input box
        document.querySelector('.input-box').value = '';
    }else{
        console.log("ran");
        setInterval(()=>{
            msgElement.classList.add('msg--hidden');
        }, 2000);
        msgElement.classList.remove('msg--hidden');
    }

    focus();
}

(function setUpEventListeners(){
    const addBtnElement = document.querySelector('.btn--add');
    if(addBtnElement){
        addBtnElement.addEventListener('click', createItem);
    }

    document.addEventListener('keypress', function(event){
        if(event.keyCode === 13){
            createItem();
        }
    });
})();

