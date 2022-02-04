const data = {
    head:{
        title : "CRUD Data"
    },
    div:{
        headerTitle : "CRUD Data",
        headerCloseText : "Close",
        headerCloseName : document.getElementsByClassName("header-close")[0]
    }
}

data.div.headerCloseName.addEventListener('click', () => {
        window.location.href = "../../index.html";
});

document.title = data.head.title;
document.getElementsByClassName("header-title")[0].innerText = data.div.headerTitle;
document.getElementsByClassName("header-close")[0].innerText = data.div.headerCloseText;
