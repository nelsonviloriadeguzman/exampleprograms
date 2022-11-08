const data = {
    div:{
        headerTitle : "Example",
        headerCloseText : "Close",
        headerCloseName : document.getElementsByClassName("header-close")[0]
    },
    contentList: ['Title 1','Title 2','Title 3'],
    currentId: '',
    
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

addEventListener('load', (event) => {
    document.getElementById(data.contentList[0]).classList.add('active');

});


let ul = document.getElementById("content-list");

for (let contentCount = 0; contentCount < data.contentList.length; ++contentCount) {
    let li = document.createElement("li");
    let a = document.createElement("button");
    a.innerHTML = data.contentList[contentCount];
    a.setAttribute("id", data.contentList[contentCount]); // to add id
    li.appendChild(a);
    ul.appendChild(li);
}


 document.addEventListener("click", function(event){
    let targetElement = event.target
    
    if (data.contentList.includes(targetElement.id)){
        for (let contentCount = 0; contentCount < data.contentList.length; ++contentCount) {  
            document.getElementById(data.contentList[contentCount]).classList.remove('active');
        }
        document.getElementById(targetElement.id).classList.add('active');
    }
});







