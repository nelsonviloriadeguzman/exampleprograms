const data = {
    head:{
        title : "Mini Programs"
    },
    div:{
        headerTitle : "Mini Programs",
        headerCloseText : "Close",
        headerCloseName : document.getElementsByClassName("header-close")[0]
    },
    selectedMiniProgramId : 'spellbackwards',
    spellBackwards : 'Spell backwards',
    palindrome : 'Palindrome',
    fibonacci : 'Fibonacci',
    inputLabel : 'Input',
    outputLabel : 'Output',
    getResult : 'Submit'
}

data.div.headerCloseName.addEventListener('click', () => {
        window.location.href = "../../index.html";
});

document.title = data.head.title;
document.getElementsByClassName("header-title")[0].innerText = data.div.headerTitle;
document.getElementsByClassName("header-close")[0].innerText = data.div.headerCloseText;

document.getElementById("mini-program-title").innerText = data.spellBackwards;
document.getElementById("spellbackwards").innerText = data.spellBackwards;
document.getElementById("palindrome").innerText = data.palindrome;
document.getElementById("fibonacci").innerText = data.fibonacci;
document.getElementById("inputlabel").innerText = data.inputLabel;
document.getElementById("outputlabel").innerText = data.outputLabel;
document.getElementById("get-result").innerText = data.getResult;

/************************************************
*************** LEFT CONTENT ********************
************************************************/

document.getElementById("get-result").addEventListener("click", () => {

    document.getElementById('input').value.trim() === null || 
    document.getElementById('input').value.trim() === undefined || 
    document.getElementById('input').value.trim() === '' ? alert('no blank fields') : getResult();

});


if (document.addEventListener){
    document.addEventListener("click", function(event){
        let targetElement = event.target
        if(targetElement.innerText == data.spellBackwards || targetElement.innerText == data.palindrome || targetElement.innerText == data.fibonacci){
            changeProgram(targetElement.id, targetElement.innerText);
            data.selectedMiniProgramId = targetElement.id;
        }
    });
} 


function changeProgram(miniProgramId,miniProgramTitle){
    
    const ul = document.getElementById("mini-program-list");
    const items = ul.getElementsByTagName("li");
    for (let i = 0; i < items.length; ++i) {
        items[i].getElementsByTagName("a")[0].classList.remove('active')
    }
    document.getElementById(miniProgramId).classList.add('active');
    document.getElementById("mini-program-title").innerHTML = miniProgramTitle
    
    document.getElementById('input').value = ''
    document.getElementById('output').value = ''
  
}

function getResult(){
    document.getElementById('output').value = ''
    let input = document.getElementById('input').value;
    if (data.selectedMiniProgramId==='spellbackwards')
    {
        for (let x=0; x< input.length; x++){
            document.getElementById('output').value += input.charAt((input.length-1)-x)
        }
    }
    else if (data.selectedMiniProgramId==='palindrome')
    {
        let output = 'Palindrome'
        for (let x=0; x< input.length; x++){
            if (input.charAt(x) !== input.charAt((input.length-1)-x))
            {
                output = 'Not Palindrome'
            }
        }
        document.getElementById('output').value = output
    }
    else if (data.selectedMiniProgramId==='fibonacci')
    {
        let past = 0
        let present = 1
        let future = 0
        let output = ''

        output = output + past
        output = output + ', '+ present
        
        for (let x=0; x<input ;x++){
          future = past + present
          output = output + ', '+future
          past = present
          present = future
        }

        document.getElementById('output').value = output
    }
    
}
