new Vue({
    
    el: '#app',
    vuetify: new Vuetify(),
   
    data () {
        return {
          rowHeaderStyle:{
            "border-bottom": "2px solid"
            },
          h2Style:{
              padding:"10px"
              },
          imgStyle:{
            border: '1px solid black'
          },
          
          shortProfile: {
            fullName: 'Nelson V. de Guzman',
            mobileNumber: '+63 915 7959 026',
            emailAddress: 'nelsonviloriadeguzman@gmail.com',
            skypeName: 'live:nelsonviloriadeguzman',
            github: 'nelsonviloriadeguzman.github.io/exampleprograms/',
            imagePath: 'img/defaultImage.png'
          },
          projectList: [
            {
              projectName: 'Inventory Management System',
              projectDate: '2020',
              projectRole: 'Programmer',
              HTMLCSSJavaScript: true,
              VueJS: true,
              Vuetify: true,
              Bootstrap: false,
              Materialize: false,
              CSharp: false,
              NodeJS: true,
              PHP: false,
              MagicXPA: false,
              MicrosoftAccess: false,
              SQLServer: false,
              mySQL: true,
              couchDB:  false
              
            },
            {
              projectName: 'Item Introduction Report (Remake)',
              projectDate: '2019',
              projectRole: 'Programmer',
              HTMLCSSJavaScript: true,
              VueJS: true,
              Vuetify: true,
              Bootstrap: false,
              Materialize: false,
              CSharp: false,
              NodeJS: true,
              PHP: false,
              MagicXPA: false,
              MicrosoftAccess: false,
              SQLServer: false,
              mySQL: false,
              couchDB:  true
              
            },
            {
              projectName: 'Item Introduction Report',
              projectDate: '2018',
              projectRole: 'Support',
              HTMLCSSJavaScript: false,
              VueJS: false,
              Vuetify: false,
              Bootstrap: false,
              Materialize: false,
              CSharp: false,
              NodeJS: false,
              PHP: false,
              MagicXPA: true,
              MicrosoftAccess: false,
              SQLServer: true,
              mySQL: false,
              couchDB:  false
            },
            {
              projectName: 'Truck Monitoring System',
              projectDate: '2018',
              projectRole: 'Programmer',
              HTMLCSSJavaScript: false,
              VueJS: false,
              Vuetify: false,
              Bootstrap: false,
              Materialize: false,
              CSharp: false,
              NodeJS: false,
              PHP: false,
              MagicXPA: true,
              MicrosoftAccess: false,
              SQLServer: true,
              mySQL: false,
              couchDB:  false
              
            },
            {
              projectName: 'NCST Alumni Portal',
              projectDate: '2017',
              projectRole: 'Programmer',
              HTMLCSSJavaScript: true,
              VueJS: false,
              Vuetify: false,
              Bootstrap: false,
              Materialize: true,
              CSharp: false,
              NodeJS: false,
              PHP: true,
              MagicXPA: false,
              MicrosoftAccess: false,
              SQLServer: false,
              mySQL: true,
              couchDB:  false
            },
            {
              projectName: 'Online Services Transaction Management System',
              projectDate: '2016',
              projectRole: 'Programmer',
              HTMLCSSJavaScript: true,
              VueJS: false,
              Vuetify: false,
              Bootstrap: true,
              Materialize: false,
              CSharp: false,
              NodeJS: false,
              PHP: true,
              MagicXPA: false,
              MicrosoftAccess: false,
              SQLServer: false,
              mySQL: true,
              couchDB:  false
              
            },
            {
              projectName: 'Payroll And Time Keeping System',
              projectDate: '2015',
              projectRole: 'Programmer',
              HTMLCSSJavaScript: false,
              VueJS: false,
              Vuetify: false,
              Bootstrap: false,
              Materialize: false,
              CSharp: true,
              PHP: false,
              MagicXPA: false,
              NodeJS: false,
              MicrosoftAccess: true,
              SQLServer: false,
              mySQL: false,
              couchDB:  false
              
            },
          ],

        }
      },
      methods:{
        close() {
          window.location.href = '../../index.html'
        },
        
        downloadOrPreviewPDF(downloadOrPreview){

          var dd = {
            content: [
                
                //WORK EXPERIECE
              
                {
                    layout: 'noBorders',
                table: {
                    widths:['0%','50%','50%'],
                  body: [[	{text:''},
                          {
                              style: 'infoStyle',
                                    layout: 'noBorders',
                                table: {
                                    widths:['*'],
                                  body: [[{ text: `${this.shortProfile.fullName}
                                                  ${this.shortProfile.mobileNumber}
                                                  ${this.shortProfile.emailAddress}
                                                  ${this.shortProfile.skypeName}
                                                  ${this.shortProfile.github}`}]]
                                    },
                                  
                          },
                          {
                                layout: {
                                      hLineColor: function(i, node) {
                                          return i === 1  ? 'black' : 'white';
                                      },
                                      vLineColor: function(i, node) {
                                          return 'white';
                                      },
                                      paddingTop: function(i, node) { 
                                        return 0 },
                                      paddingBottom: function(i, node) { 
                                        return i == 1 ? 3 : 0; 
                                      }
                                    },
                                table: {
                                    widths:['*'],
                                  body: [[{ text: 'Work Experience', style: 'headerStyle',}],
                                          [{ text: '\nOffice Staff / Programmer', style:"miniTitleStyle",}],
                                          [{ text: 'H.R.D. Singapore Pte., Ltd.\nBlk 3, Cavite Eco Zone II Gen. Trias, Cavite\n(046) 476-0545 / (046) 476-0465 / (02) 857-8210\nJune 2018 - September 2020\n\n',style: 'defaultTextStyle'}]
                                      ]
                                    },
                                  
                                }
                              ]]
                },
                  
                },

              //INFORMATION TECHNOLOGY SKILLS
                {
                  layout: 'noBorders',
                  style: 'headerStyle',
                table: {
                    widths:['*'],
                  body: [[{ text: 'Information Technology Skills',}]]
                },
                  
                },
                // VERTICAL LINE START
                {
                  layout: {
                      hLineWidth: function(i, node) {
                          return (i === 0 || i === node.table.body.length) ? 0 : 1;
                      },
                      vLineWidth: function(i, node) {
                          return 0;
                      },
                      paddingTop: function(i, node) { return -10; },
                      paddingBottom: function(i, node) { return -3; }
                  },
                  table: {
                      widths: ['*'],
                      body: [[" "], [" "]]
                  },
                },
                // VERTICAL LINE END
                {
                    layout: 'noBorders',
                table: {
                    widths:['*','*','*','*','*'],
                  body: [[{ text: '\nWeb Application Core ', style:"miniTitleStyle"},
                          { text: '\nJavaScript Framework ', style:"miniTitleStyle"},
                          { text: '\nCSS Framework ', style:"miniTitleStyle"},
                          { text: '\nServer Side / Back End', style:"miniTitleStyle"},
                          { text: '\nDatabase', style:"miniTitleStyle"},
                          ],
                          
                          [{ text: "HTML\nCSS\nJavaScript\n\n", style: 'defaultTextStyle'},
                          { text: "Vue.js\n\n", style: 'defaultTextStyle'},
                          { text: 'Vuetify\nBootstrap\nMaterialize\n\n', style: 'defaultTextStyle'},
                          { text: 'Node.js\nMagicXPA\nPHP\nc#\n\n', style: 'defaultTextStyle'},
                          { text: 'MySQL\nCouchDB\nSQL Server\nMS Access\n\n', style: 'defaultTextStyle'},
                          ],
                          
                          [{},{},{},{},{}]
                          ],
                          
                },
                  
                },
                
              //DUTIES AND RESPONSIBILITIES
                {
                    layout: 'noBorders',
                    style: 'headerStyle',
                table: {
                    widths:['*'],
                  body: [[{ text: 'Duties and Responsibilities',}]]
                },
                  
                },
                // VERTICAL LINE START
                {
                  layout: {
                      hLineWidth: function(i, node) {
                          return (i === 0 || i === node.table.body.length) ? 0 : 1;
                      },
                      vLineWidth: function(i, node) {
                          return 0;
                      },
                      paddingTop: function(i, node) { return -10; },
                      paddingBottom: function(i, node) { return -3; }
                  },
                  table: {
                      widths: ['*'],
                      body: [[" "], [" "]]
                  },
                },
                // VERTICAL LINE END
                {
                    layout: 'noBorders',
                table: {
                    widths:['*','*'],
                  body: [[{ text: '\nDaily', style:"miniTitleStyle"},
                          { text: '\nPeriodic/Occasional', style:"miniTitleStyle"},
                          ],
                          
                          [{ text: "Analyze system flow and the process of all handled system\nModify existing system for improvement\nFixing system troubles\nTracing of missing data or if there's data discrepancy\nMonitor server activities and performace\nAct as support for system user for their system inqueries\nData modification for correction as request by user\nPerforms data extraction as requested by user\n\n", style: 'defaultTextStyle'},
                          { text: 'Update of master tables if needed as users request\nSupport and attends to co-members queries in technial aspects\nSuggest improvement for lessen manual checking\n Develop the approved requested system\nAdminister the newly developed system from trial deployment up to actual impementation\nAttend meeting with requester as part of system development and system modification if needed\nTrainer of newly hired staffs\n\n', style: 'defaultTextStyle'},
                          ],
                          
                          [{},{}]
                          ],
                          
                },
                  
                },
                //EDUCATION
                {
                    layout: 'noBorders',
                    style: 'headerStyle',
                table: {
                    widths:['*'],
                  body: [[{ text: 'Education',}]]
                },
                  
                },
                // VERTICAL LINE START
                {
                  layout: {
                      hLineWidth: function(i, node) {
                          return (i === 0 || i === node.table.body.length) ? 0 : 1;
                      },
                      vLineWidth: function(i, node) {
                          return 0;
                      },
                      paddingTop: function(i, node) { return -10; },
                      paddingBottom: function(i, node) { return -3; }
                  },
                  table: {
                      widths: ['*'],
                      body: [[" "], [" "]]
                  },
                },
                // VERTICAL LINE END
                {
                    layout: 'noBorders',
                table: {
                    widths:['*','*'],
                  body: [[{ text: '\nNational College of Science and Technology', style:"miniTitleStyle"},
                          { text: '\nManalo Academy School', style:"miniTitleStyle"},
                          ],
                          [{ text: 'Amafel Building Aguinaldo Highway, Dasmariñas City, Cavite \n (046) 416-NCST (6278) \n B.S in Information Technology \n 2013 - 2017', style: 'defaultTextStyle'},
                          { text: 'Gen. Trias, Cavite \n High School \n 2003 - 2007', style: 'defaultTextStyle'},
                          ],
                          [{},{}]
                          ]
                },
                  
                },
                
            ],
            styles: {
              defaultTextStyle:{
                fontSize: 10,
              },
              headerStyle: {
                fontSize: 13,
                bold: true
              },
              miniTitleStyle: {
                bold: true,
                fontSize: 11,
              },
              infoStyle: {
                  bold: true,
                  fontSize: 15,
              }
              
            },
            pageOrientation: 'landscape',
            
          }

          downloadOrPreview === 1 ? createPdf(dd).download('CV - Nelson V. de Guzman.pdf') : createPdf(dd).open()
      
        }
      }
     

  })

  
 