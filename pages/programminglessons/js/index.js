const data = {
    div:{
        pageTitle : "Programming Documentation"
    },
    results : "",
    cardList : [

    { "cardTitle": 'Java',
        "cardImage": 'img/java.png',
        "cardLink": 'pages/java/java-index.html'},

    { "cardTitle": 'Java',
        "cardImage": 'img/java.png',
        "cardLink": 'pages/java/java-index.html'},

    { "cardTitle": 'Java',
        "cardImage": 'img/java.png',
        "cardLink": 'pages/java/java-index.html'},

    { "cardTitle": 'Java',
        "cardImage": 'img/java.png',
        "cardLink": 'pages/java/java-index.html'},
  
    ],
    executeSideNavEvents: function(){

        document.title = this.div.pageTitle;
        document.getElementsByClassName("page-title")[0].innerHTML = this.div.pageTitle;
        
        this.cardList.forEach(cardCount => {
                this.results += `<a href="${cardCount.cardLink}" class="card-link">
                                <div class="card">
                                <img class="card-image" src="${cardCount.cardImage}" alt="Avatar">
                                <div class="card-title">
                                ${cardCount.cardTitle}
                                </div>
                                </div>
                            
                            </a>`; 
            })
        document.getElementsByClassName('card-container')[0].innerHTML = this.results;
    }
}

data.executeSideNavEvents();
  
  
  
  