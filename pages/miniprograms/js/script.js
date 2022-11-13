const data = {
    div:{
        headerTitle : "Mini Programs",
        headerCloseText : "Close",
        headerCloseName : document.getElementsByClassName("header-close")[0]
    },
    currentTab: 'Spell Backwards',
    tabTitle: ['Spell Backwards','Palindrome','Fibonacci'],
    contentTitleContainer: document.getElementById("tab-title"),
    contentContainer: document.getElementById("right-content"),

}

data.div.headerCloseName.addEventListener('click', () => {
        window.location.href = "../../index.html";
});

document.title = data.div.headerTitle;
document.getElementsByClassName("header-title")[0].innerText = data.div.headerTitle;
document.getElementsByClassName("header-close")[0].innerText = data.div.headerCloseText;


/************************************************
*************** LEFT CONTENT ********************
************************************************/

function loadCurrentTabContent(currentTab){

    data.contentContainer.innerHTML = "";

    let h2 = document.createElement("h2");
    h2.innerText = currentTab;
    data.contentContainer.appendChild(h2);

    let input = document.createElement("input");
    input.setAttribute("type", "text");
    input.placeholder = "Enter Input";
    input.setAttribute("id", "input");
    data.contentContainer.appendChild(input);

    let output = document.createElement("input");
    output.setAttribute("type", "text");
    output.placeholder = "Output Display Here";
    output.setAttribute("disabled", "");
    output.setAttribute("id", "output");
    data.contentContainer.appendChild(output);

    let btn = document.createElement("button");
    btn.setAttribute("id", currentTab);
    btn.setAttribute("class", "customButton");
    btn.textContent = "Submit";
    data.contentContainer.appendChild(btn);
    
}  

function loadSidebarMenu(){
    data.tabTitle.forEach( each => {

        let li = document.createElement("li");
        let btn = document.createElement("button");
        btn.innerHTML = each;
        btn.setAttribute("id", each); // to add id
        li.appendChild(btn);
        data.contentTitleContainer.appendChild(li);

    })

    document.getElementById(data.tabTitle[0]).classList.add('active');
}

document.addEventListener("click", (event) => { 

    let targetElement = event.target;

    if (targetElement.parentNode.parentNode.id == "tab-title"){
        
        data.tabTitle.forEach( each => {
            document.getElementById(each).classList.remove('active');
        })

        document.getElementById(targetElement.id).classList.add('active');
        data.currentTab = targetElement.id;
        loadCurrentTabContent(targetElement.id);
    }
    else if(targetElement.parentNode.id == "right-content" && targetElement.nodeName == "BUTTON"){
        getOutput(targetElement.id);
    }
});

function getOutput (targetElement){
    document.getElementById('output').value = '';
    let input = document.getElementById('input').value;
    if(targetElement == "Spell Backwards"){
        
        for (let x=0; x< input.length; x++){
            document.getElementById("output").value += input.charAt((input.length-1)-x)
        }
    }
    else if (targetElement == 'Palindrome')
    {
        let output = 'Palindrome'
        for (let x=0; x< input.length; x++){
            if (input.charAt(x).toLowerCase() !== input.charAt((input.length-1)-x).toLowerCase())
            {
                output = 'Not Palindrome'
            }
        }
        document.getElementById('output').value = output
    }
    else if (targetElement==='Fibonacci')
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

addEventListener('load', () => {
    loadSidebarMenu()
    loadCurrentTabContent(data.currentTab)  
});











