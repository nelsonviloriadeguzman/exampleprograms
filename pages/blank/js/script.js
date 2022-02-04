const data = {
    head:{
        title : "Blank Page"
    },
    div:{
        headerTitle : "Header Title",
        headerCloseText : "Close",
        headerCloseName : document.getElementsByClassName("header-close")[0]
    }
}

document.title = data.head.title;
document.getElementsByClassName("header-title")[0].innerText = data.div.headerTitle;
document.getElementsByClassName("header-close")[0].innerText = data.div.headerCloseText;

data.div.headerCloseName.addEventListener('click', () => {
        window.location.href = "../../index.html";
});
    

/**********************************************************************
**** USE BELOW ONLY IF YOU WANT TO TRIGGER getElementsByClassName *****
**********************************************************************/

// let headerCloseElements = document.getElementsByClassName("header-close");

// Array.from(headerCloseElements).forEach(function(element) {
//     element.addEventListener('click', () => {
//         window.location.href = "../../index.html";
//     });
//   });
//

/**********************************************************************
**** USE BELOW ONLY IF YOU WANT TO TRIGGER getElementsById *****
**********************************************************************/

// document.getElementById("page-close").addEventListener("click", () => {
//     window.location.href = "../../index.html";
// });

