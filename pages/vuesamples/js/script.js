const data = {
    head:{
        title : "Vue Samples"
    },
    div:{
        headerTitle : "Vue Samples",
        headerCloseText : "Close",
        headerCloseName : document.getElementsByClassName("header-close")[0]
    },
    results : "",
    cardList : [
    { "cardTitle": 'First App',
      "cardImage": 'img/firstapp.png',
      "cardLink": 'pages/firstapp/index.html'},
    { "cardTitle": 'First App',
    "cardImage": 'img/firstapp.png',
    "cardLink": 'pages/firstapp/index.html'},
    { "cardTitle": 'First App',
    "cardImage": 'img/firstapp.png',
    "cardLink": 'pages/firstapp/index.html'},
    { "cardTitle": 'First App',
      "cardImage": 'img/firstapp.png',
      "cardLink": 'pages/firstapp/index.html'}
  ]
}

document.title = data.head.title;
document.getElementsByClassName("header-title")[0].innerText = data.div.headerTitle;
document.getElementsByClassName("header-close")[0].innerText = data.div.headerCloseText;

data.div.headerCloseName.addEventListener('click', () => {
        window.location.href = "../../index.html";
});
    

data.cardList.forEach(cardCount => {
      data.results += `<a href="${cardCount.cardLink}" class="card-link">
                      <div class="card">
                        <img class="card-image" src="${cardCount.cardImage}" alt="Avatar">
                      </div>
                      <div class="card-title">
                      ${cardCount.cardTitle}
                     </div>
                     </a>`; 
    })
document.getElementsByClassName('card-container')[0].innerHTML = data.results;


