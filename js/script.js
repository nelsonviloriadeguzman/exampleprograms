const data = {
  head:{
      title : "Example Programs"
  },
  div:{
      pageTitle : "<h2>Example Programs</h2>"
  },
  results : "",
  cardList : [
    { "cardTitle": 'Resume',
      "cardImage": 'img/resume.png',
      "cardLink": 'pages/resume/index.html'},

    { "cardTitle": 'Mini Programs',
      "cardImage": 'img/miniprograms.png',
      "cardLink": 'pages/miniprograms/index.html'},

    { "cardTitle": 'Create Retrieve Update Delete',
      "cardImage": 'img/crud.png',
      "cardLink": 'pages/crud/index.html'},

    { "cardTitle": 'Rock Paper Scissors',
      "cardImage": 'img/rockpaperscissors.png',
      "cardLink": 'pages/rockpaperscissors/index.html'},
    
    { "cardTitle": 'Random Questions',
      "cardImage": 'img/randomquestions.png',
      "cardLink": 'pages/randomquestions/index.html'},

    { "cardTitle": 'Simple Gantt Chart',
      "cardImage": 'img/simpleganttchart.png',
      "cardLink": 'pages/simpleganttchart/index.html'},

    { "cardTitle": 'Massage Service Monitoring',
      "cardImage": 'img/massageservicemonitoring.png',
      "cardLink": 'pages/massageservicemonitoring/index.html'},

    { "cardTitle": 'Vue FullStack Installation',
      "cardImage": 'img/vuefullstackinstallation.png',
      "cardLink": 'pages/vuefullstackinstallation/index.html'},

    { "cardTitle": 'Home Page Sample 1',
      "cardImage": 'img/homepagesample1.png',
      "cardLink": 'pages/homepagesample1/index.html'},
  
    // { "cardTitle": 'MuleSoft Fundamentals Quizzes',
    //   "cardImage": 'img/mulesoftfundamentalsquizzes.png',
    //   "cardLink": 'pages/mulesoftfundamentalsquizzes/index.html'},

  ]

}

document.title = data.head.title;
document.getElementsByClassName("page-title")[0].innerHTML = data.div.pageTitle;

data.cardList.forEach(cardCount => {
      data.results += `<a href="${cardCount.cardLink}" class="card-link">
                      <div class="card">
                        <img class="card-image" src="${cardCount.cardImage}" alt="Avatar">
                        <div class="card-title">
                         ${cardCount.cardTitle}
                       </div>
                      </div>
                    
                     </a>`; 
    })
document.getElementsByClassName('card-container')[0].innerHTML = data.results;

