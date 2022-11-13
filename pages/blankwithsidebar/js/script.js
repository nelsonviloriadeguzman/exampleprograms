const data = {
    div:{
        headerTitle : "Sidebar Template",
        headerCloseText : "Close",
        headerCloseName : document.getElementsByClassName("header-close")[0]
    },
    currentTab: 'Page 1',
    contentTitle: ['Page 1','Page 2','Page 3'],
    contentTitleContainer: document.getElementById("content-title"),
    contentContainer: document.getElementById("content-list"),
    contentList: [

        {
            contentTitle : 'Page 1',
            type: 'Type 1',
            path: 'img/.png',
            date: 'November 2022',
        },
        {
            contentTitle : 'Page 2',
            type: 'Type 2',
            path: 'img/.png',
            date: 'November 2022',
        },
        {
            contentTitle : 'Page 3',
            type: 'Type 3',
            path: 'img/.png',
            date: 'November 2022',
        }
 
    ],
    
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

function loadTableContent(currentTab){
    data.contentContainer.innerText = currentTab
}  

function loadSidebarMenu(){
    data.contentTitle.forEach( each => {

        let li = document.createElement("li");
        let btn = document.createElement("button");
        btn.innerHTML = each;
        btn.setAttribute("id", each); // to add id
        li.appendChild(btn);
        data.contentTitleContainer.appendChild(li);

    })

    document.getElementById(data.contentTitle[0]).classList.add('active');
}

document.addEventListener("click", (event) => { 
    let targetElement = event.target
    
    if (data.contentTitle.includes(targetElement.id)){

        data.contentTitle.forEach( each => {
            document.getElementById(each).classList.remove('active');
        })

        document.getElementById(targetElement.id).classList.add('active');
        data.currentTab = targetElement.id
        loadTableContent(targetElement.id)
    }
});

addEventListener('load', () => {
    loadSidebarMenu()
    loadTableContent(data.currentTab)  
});











