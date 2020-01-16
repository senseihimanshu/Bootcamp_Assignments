function focus(){
    const focusElement = document.querySelector('.input-box');
    if(focusElement){
        focusElement.focus();
    }
};

function createItem(){
    const inputBoxContent = document.querySelector('.input-box').value;
    const msgElement = document.querySelector('.msg');
    if(inputBoxContent !== ''){
        const newLi = document.createElement('li');
        newLi.textContent = inputBoxContent;

        document.querySelector('.list-parent').appendChild(newLi);

        //Emptying the input box
        document.querySelector('.input-box').value = '';
    }else{
        setInterval(()=>{
            msgElement.classList.add('msg--hidden');
        }, 3000);
        msgElement.classList.remove('msg--hidden');
    }

    focus();
}

(function setUpEventListeners(){
    const addBtnElement = document.querySelector('.btn--add');
    console.log(addBtnElement);
    if(addBtnElement){
        console.log("I ran on line 32");
        addBtnElement.addEventListener('click', createItem);
    }

    document.addEventListener('keypress', function(event){
        console.log("I ran on line 37");
        if(event.keyCode === 13){
            createItem();
        }
    });
    console.log("I ran on line 40");
})();

