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

          workExperience:{
            jobPosition: `Office Staff / Programmer`,
            companyName: `H.R.D. Singapore Pte., Ltd.`,
            companyAddress: `General Trias City, Cavite`,
            employmentDuration: `June 2018 - September 2020`,
            workResponsibilities: [
              `Analyze system flow and the process of all handled system`,
              `Modify existing system for improvement`,
              `Fixing system troubles`,
              `Tracing of missing data or if there's data discrepancy`,
              `Monitor server activities and performace`,
              `Act as support for system user for their system inqueries`,
              `Data modification for correction as request by user`,
              `Performs data extraction as requested by user`
            ],
          },

  
          education:{
            college: {
              collegeName: `National College of Science and Technology`,
              collegeAddress: `Dasmariñas City, Cavite`,
              collegeCourse: `Bachelor of Science in Information Technology`,
              collegeDuration: `2013 - 2017`

            }
          },
          
          shortProfile: {
            fullName: 'Nelson V. de Guzman',
            address: 'Manila City, Metro Manila',
            mobileNumber: '+63 926 659 3763',
            emailAddress: 'nelsonviloriadeguzman@gmail.com',
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
              MicrosoftAccess: false,
              SQLServer: false,
              mySQL: true,
              
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
              MicrosoftAccess: false,
              SQLServer: false,
              mySQL: true,
              
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
              NodeJS: false,
              MicrosoftAccess: true,
              SQLServer: false,
              mySQL: false,
              
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
                
               //FULL NAME
               {
                layout: 'noBorders',
                table: {
                  body: [
                          [{ text: ' '}],
                          [{ text: this.shortProfile.fullName ,style: 'mainTitleStyle'}],
                          [{ text: `${ this.shortProfile.address}
                                    ${ this.shortProfile.mobileNumber}
                                    ${ this.shortProfile.emailAddress}  
                                    ${ this.shortProfile.github}
                                    `, style: 'defaultTextStyle'}
                          ],
                        ]
                    },
                  
                },

                //EXPERIENCE
                 {
                  layout: 'noBorders',
                  style: 'headerStyle',
              table: {
                  widths:['*'],
                body: [[{ text: 'EXPERIENCE',}]]
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
                body: [
                        [{ text: ' '}],

                          [{ text: this.workExperience.jobPosition ,style: 'miniTitleStyle'}],
                          [{ text: `${ this.workExperience.companyName}
                                    ${ this.workExperience.companyAddress}  
                                    ${ this.workExperience.employmentDuration}
                                    `, style: 'defaultTextStyle'}
                          ],
                      ]
                  },
                
              },

              //RESPONSIBILITIES
              { style: 'defaultTextStyle',
                ul: this.workExperience.workResponsibilities
              },
              {
                text: ' '
              },

                


              //SKILLS
              {
                layout: 'noBorders',
                style: 'headerStyle',
              table: {
                  widths:['*'],
                body: [[{ text: 'SKILLS',}]]
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
                  widths:['*','*','*','*'],
                body: [[
                        { text: '\nJavaScript Framework ', style:"skillStyle", bold: true},
                        { text: '\nCSS Framework ', style:"skillStyle", bold: true},
                        { text: '\nServer Side / Back End', style:"skillStyle", bold: true},
                        { text: '\nDatabase', style:"skillStyle", bold: true},
                        ],
                        
                        [
                        { text: "Vue.js\n\n", style: 'skillStyle'},
                        { text: 'Vuetify\nBootstrap\n\n', style: 'skillStyle'},
                        { text: 'Node.js\nPHP\nC#\nJava\n\n', style: 'skillStyle'},
                        { text: 'MySQL\nSQL Server\nMicrosoft Access\n\n', style: 'skillStyle'},
                        ],
                        
                        [{},{},{},{}]
                        ],
                        
                },
                
              },
                //EDUCATION
                {
                    layout: 'noBorders',
                    style: 'headerStyle',
                table: {
                    widths:['*'],
                  body: [[{ text: 'EDUCATION',}]]
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
                  text: ' '
                },
                {
                    layout: 'noBorders',
                table: {
                    widths:['*'],
                  body: [[{ text: this.education.college.collegeCourse, style:"miniTitleStyle"}],
                          [{ text: `${ this.education.college.collegeName}
                                    ${ this.education.college.collegeAddress}  
                                    ${ this.education.college.collegeDuration}
                                    `, style: 'defaultTextStyle'}
                          ]
                        ]
                },
                  
                },
                
            ],
            styles: {
              defaultTextStyle:{
                fontSize: 11,
              },
              headerStyle: {
                fontSize: 11,
                bold: true
              },
              mainTitleStyle: {
                bold: true,
                fontSize: 15,
              },
              miniTitleStyle: {
                bold: true,
                fontSize: 11,
              },
              skillStyle:{
                fontSize: 11,
              },
              
            },
            pageSize: 'A4',
            pageOrientation: 'portrait',
            
          }

          downloadOrPreview === 1 ? createPdf(dd).download('Resume - Nelson V. de Guzman.pdf') : createPdf(dd).open()
      
        }
      }
     

  })

  
 