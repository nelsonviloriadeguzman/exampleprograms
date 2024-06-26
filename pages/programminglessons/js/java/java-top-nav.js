const topNav = {

    executeSideNavEvents: function(){

    let div = {
        headerTitle : "Java",
        headerCloseText : "Close",
        headerCloseName : document.getElementsByClassName("header-close")[0]
    }

    div.headerCloseName.addEventListener('click', () => {
        window.location.href = "../../index.html";
    });
    
    document.title = div.headerTitle;
    document.getElementsByClassName("header-title")[0].innerText = div.headerTitle;
    document.getElementsByClassName("header-close")[0].innerText = div.headerCloseText;
    
    }
}

export default topNav;
