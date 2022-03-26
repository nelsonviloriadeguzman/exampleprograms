new Vue({
    
    el: '#app',
    vuetify: new Vuetify(),
   
    data () {
        return {
          cardList : [
            { "cardTitle": 'Quiz 1',
              "cardImage": 'img/quiz1.png',
              "cardLink": 'pages/quiz1/index.html'
            },
            { "cardTitle": 'Quiz 2',
              "cardImage": 'img/quiz2.png',
              "cardLink": 'pages/quiz2/index.html'
            },
            { "cardTitle": 'Quiz 3',
              "cardImage": 'img/quiz3.png',
              "cardLink": 'pages/quiz3/index.html'
            },
            { "cardTitle": 'Quiz 4',
              "cardImage": 'img/quiz4.png',
              "cardLink": 'pages/quiz4/index.html'
            },
            { "cardTitle": 'Quiz 5',
              "cardImage": 'img/quiz5.png',
              "cardLink": 'pages/quiz5/index.html'
            },
            { "cardTitle": 'Quiz 6',
              "cardImage": 'img/quiz6.png',
              "cardLink": 'pages/quiz6/index.html'
            },
            { "cardTitle": 'Quiz 7',
              "cardImage": 'img/quiz7.png',
              "cardLink": 'pages/quiz7/index.html'
            },
            { "cardTitle": 'Quiz 8',
              "cardImage": 'img/quiz8.png',
              "cardLink": 'pages/quiz8/index.html'
            },
            { "cardTitle": 'Quiz 9',
              "cardImage": 'img/quiz9.png',
              "cardLink": 'pages/quiz9/index.html'
            },
            { "cardTitle": 'Quiz 10',
              "cardImage": 'img/quiz10.png',
              "cardLink": 'pages/quiz10/index.html'
            },
            { "cardTitle": 'Quiz 11',
              "cardImage": 'img/quiz11.png',
              "cardLink": 'pages/quiz11/index.html'
            },
            { "cardTitle": 'Quiz 12',
              "cardImage": 'img/quiz12.png',
              "cardLink": 'pages/quiz12/index.html'
            },
            { "cardTitle": 'Quiz 13',
              "cardImage": 'img/quiz13.png',
              "cardLink": 'pages/quiz13/index.html'
            },
  
            ]
          
        }
      },
      methods:{
        close() {
          window.location.href = '../../index.html'
        },
        open(cardLink) {
          window.location.href = cardLink
        },

      }
     

  })

  
 