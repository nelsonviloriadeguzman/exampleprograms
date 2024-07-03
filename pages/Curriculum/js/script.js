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

          term1: [
            {
              subjectStatus: 'In Progress (Currently Enrolled)',
              subjectCode: 'CCPROG1',
              subjectName: 'Logic Formulation And Introductory Programming',
              subjectUnit: '3',
            },
            {
              subjectStatus: 'In Progress (Currently Enrolled)',
              subjectCode: 'MTH101A',
              subjectName: 'Foundation Course in Mathematics',
              subjectUnit: '5',
            },
            {
              subjectStatus: 'N/A',
              subjectCode: 'CCICOMP',
              subjectName: 'Introduction to Computing',
              subjectUnit: '3',
            },
            {
              subjectStatus: 'In Progress (Currently Enrolled)',
              subjectCode: 'LCC..01',
              subjectName: 'Art Appreciation',
              subjectUnit: '3',
            },
          ],
          term2: [
            {
              subjectStatus: 'N/A',
              subjectCode: 'CCDSTRU',
              subjectName: 'Discrete Structures',
              subjectUnit: '3',
            },
            {
              subjectStatus: 'N/A',
              subjectCode: 'CCPROG2',
              subjectName: 'Programming with Structured Data Types',
              subjectUnit: '3',
            },
            {
              subjectStatus: 'N/A',
              subjectCode: 'CSMATH1',
              subjectName: 'Differential Calculus',
              subjectUnit: '3',
            },
            {
              subjectStatus: 'In Progress (Currently Enrolled)',
              subjectCode: 'LCC..02',
              subjectName: 'Ethics',
              subjectUnit: '3',
            },
            {
              subjectStatus: 'N/A',
              subjectCode: 'LCC..03',
              subjectName: 'Placeholder 3',
              subjectUnit: '3',
            },
            {
              subjectStatus: 'N/A',
              subjectCode: 'PE1CRDO',
              subjectName: 'Cardio Fitness',
              subjectUnit: '2',
            },
            {
              subjectStatus: 'N/A',
              subjectCode: 'LASARE1',
              subjectName: 'Lasallian Recollection 1',
              subjectUnit: '0',
            },
          ],
          term3: [
            {
              subjectStatus: 'N/A',
              subjectCode: 'CCDSALG',
              subjectName: 'Data Structures and Algorithms',
              subjectUnit: '3',
            },
            {
              subjectStatus: 'N/A',
              subjectCode: 'CCPROG3',
              subjectName: 'Object Oriented Programming',
              subjectUnit: '3',
            },
            {
              subjectStatus: 'N/A',
              subjectCode: 'STT101A',
              subjectName: 'Foundation Course in Statistics',
              subjectUnit: '3',
            },
            {
              subjectStatus: 'N/A',
              subjectCode: 'CSMATH2',
              subjectName: 'Linear Algebra For Computer Science Student',
              subjectUnit: '3',
            },
            {
              subjectStatus: 'N/A',
              subjectCode: 'LCC..04',
              subjectName: 'Placeholder 4',
              subjectUnit: '3',
            },
            {
              subjectStatus: 'N/A',
              subjectCode: 'PE2FTEX',
              subjectName: 'Functional Exercise',
              subjectUnit: '2',
            },
            {
              subjectStatus: 'N/A',
              subjectCode: 'SAS1000',
              subjectName: 'Student Affairs Services 1000',
              subjectUnit: '0',
            },
          ],
          term4: [
            {
              subjectStatus: 'N/A',
              subjectCode: 'CSADPRG',
              subjectName: 'Advanced Programming and Theory of Programming Languages',
              subjectUnit: '3',
            },
            {
              subjectStatus: 'N/A',
              subjectCode: 'CCINFOM',
              subjectName: 'Information Management',
              subjectUnit: '3',
            },
            {
              subjectStatus: 'N/A',
              subjectCode: 'CE-MATH',
              subjectName: 'Mathematical Models For Computer Systems Engineering',
              subjectUnit: '3',
            },
            {
              subjectStatus: 'N/A',
              subjectCode: 'CSNETWK',
              subjectName: 'Introduction to Computer Networks',
              subjectUnit: '3',
            },
            {
              subjectStatus: 'N/A',
              subjectCode: 'LCC..05',
              subjectName: 'Placeholder 5',
              subjectUnit: '3',
            },
            {
              subjectStatus: 'N/A',
              subjectCode: 'PETHREE',
              subjectName: 'Indivudual and Dual Sports And / Or Social Dance',
              subjectUnit: '2',
            },
            {
              subjectStatus: 'N/A',
              subjectCode: 'LCLSONE',
              subjectName: 'Lasallian Studies 1',
              subjectUnit: '1',
            },
            {
              subjectStatus: 'N/A',
              subjectCode: 'LASARE2',
              subjectName: 'Lasallian Recollection 2',
              subjectUnit: '0',
            },
          ],
          term5: [
            {
              subjectStatus: 'N/A',
              subjectCode: 'CCAPDEV',
              subjectName: 'Web Application Development',
              subjectUnit: '3',
            },
            {
              subjectStatus: 'N/A',
              subjectCode: 'CEDISP1',
              subjectName: 'Digital Signal Processing',
              subjectUnit: '3',
            },
            {
              subjectStatus: 'N/A',
              subjectCode: 'LBYDISP',
              subjectName: 'Digital Signal Processing Laboratory',
              subjectUnit: '1',
            },
            {
              subjectStatus: 'N/A',
              subjectCode: 'CEETRN1',
              subjectName: 'Fundamentals of Electric Circuits',
              subjectUnit: '3',
            },
            {
              subjectStatus: 'N/A',
              subjectCode: 'LBYTRN1',
              subjectName: 'Fundamentals of Electric Circuits Laboratory',
              subjectUnit: '1',
            },
            {
              subjectStatus: 'N/A',
              subjectCode: 'CSARCH1',
              subjectName: 'Introduction to Computer Organization and Architechture',
              subjectUnit: '3',
            },
            {
              subjectStatus: 'N/A',
              subjectCode: 'PEDFOUR',
              subjectName: 'Team Games or Dance',
              subjectUnit: '2',
            },
          ],
          term6: [
            {
              subjectStatus: 'N/A',
              subjectCode: 'CSINTSY',
              subjectName: 'Introduction to Intelligent Systems',
              subjectUnit: '3',
            },
            {
              subjectStatus: 'N/A',
              subjectCode: 'CSMODEL',
              subjectName: 'Statistical Modeling and Simulation',
              subjectUnit: '3',
            },
            {
              subjectStatus: 'N/A',
              subjectCode: 'CEETRN2',
              subjectName: 'Basic Principles of Electronic Circuits',
              subjectUnit: '3',
            },
            {
              subjectStatus: 'N/A',
              subjectCode: 'LBYTRN2',
              subjectName: 'Basic Principles of Electronic Circuits Laboratory',
              subjectUnit: '1',
            },
            {
              subjectStatus: 'N/A',
              subjectCode: 'CSARCH2',
              subjectName: 'Introduction to Computer Organization and Architechture 2',
              subjectUnit: '3',
            },
            {
              subjectStatus: 'N/A',
              subjectCode: 'LBYARCH',
              subjectName: 'Introduction to Computer Organization and Architechture 2 Laboratory',
              subjectUnit: '1',
            },
            {
              subjectStatus: 'N/A',
              subjectCode: 'LCC..06',
              subjectName: 'Placeholder 6',
              subjectUnit: '3',
            },
            {
              subjectStatus: 'N/A',
              subjectCode: 'SAS2000',
              subjectName: 'Student Affairs Services 2000',
              subjectUnit: '0',
            }
          ],
          term7: [
            {
              subjectStatus: 'N/A',
              subjectCode: 'CEMICRO',
              subjectName: 'Microprocessor Interfacing',
              subjectUnit: '3',
            },
            {
              subjectStatus: 'N/A',
              subjectCode: 'LBYMCRO',
              subjectName: 'Microprocessor Interfacing Laboratory',
              subjectUnit: '1',
            },
            {
              subjectStatus: 'N/A',
              subjectCode: 'CSOPESY',
              subjectName: 'Introduction to Operating Systems',
              subjectUnit: '3',
            },
            {
              subjectStatus: 'N/A',
              subjectCode: 'CEPARCO',
              subjectName: 'Multiprocessing and Parallel Computing',
              subjectUnit: '3',
            },
            {
              subjectStatus: 'N/A',
              subjectCode: 'LCC..07',
              subjectName: 'Placeholder 7',
              subjectUnit: '3',
            },
          ],
          term8: [
            {
              subjectStatus: 'N/A',
              subjectCode: 'CERESME',
              subjectName: 'Computer Systems Engineering Research Methods',
              subjectUnit: '3',
            },
            {
              subjectStatus: 'N/A',
              subjectCode: 'CECNTRL',
              subjectName: 'Introduction to Microcontrollers and Application',
              subjectUnit: '3',
            },
            {
              subjectStatus: 'N/A',
              subjectCode: 'CEETRN3',
              subjectName: 'Linear Circuits and Communications',
              subjectUnit: '3',
            },
            {
              subjectStatus: 'N/A',
              subjectCode: 'LBYTRN3',
              subjectName: 'Linear Circuits and Communications Laboratory',
              subjectUnit: '1',
            },
            {
              subjectStatus: 'N/A',
              subjectCode: 'LCC..08',
              subjectName: 'Placeholder 8',
              subjectUnit: '3',
            },
            {
              subjectStatus: 'N/A',
              subjectCode: 'LCLSTWO',
              subjectName: 'Lasallian Studies 2',
              subjectUnit: '1',
            },
            {
              subjectStatus: 'N/A',
              subjectCode: 'LASARE3',
              subjectName: 'Lasallian Recollection 3',
              subjectUnit: '0',
            },
          ],
          term9: [
            {
              subjectStatus: 'N/A',
              subjectCode: 'CSALGCM',
              subjectName: 'Algorithms and Complexity',
              subjectUnit: '3',
            },
            {
              subjectStatus: 'N/A',
              subjectCode: 'CSSWENG',
              subjectName: 'Software Engineering',
              subjectUnit: '3',
            },
            {
              subjectStatus: 'N/A',
              subjectCode: 'THSCE01',
              subjectName: 'Computer Systems Engineering Thesis 1',
              subjectUnit: '2',
            },
            {
              subjectStatus: 'N/A',
              subjectCode: 'CEELEC1',
              subjectName: 'Computer Systems Engineering Elective 1',
              subjectUnit: '3',
            },
            {
              subjectStatus: 'N/A',
              subjectCode: 'LCC..09',
              subjectName: 'Placeholder 9',
              subjectUnit: '3',
            },
            {
              subjectStatus: 'N/A',
              subjectCode: 'SAS3000',
              subjectName: 'Student Affairs Services 3000',
              subjectUnit: '0',
            },
          ],
           term10: [
            {
              subjectStatus: 'N/A',
              subjectCode: 'CSSECDV',
              subjectName: 'Secure Web Development',
              subjectUnit: '3',
            },
            {
              subjectStatus: 'N/A',
              subjectCode: 'THSCE02',
              subjectName: 'Computer Systems Engineering Thesis 2',
              subjectUnit: '2',
            },
            {
              subjectStatus: 'N/A',
              subjectCode: 'CEELEC2',
              subjectName: 'Computer Systems Engineering Elective 2',
              subjectUnit: '3',
            },
            {
              subjectStatus: 'N/A',
              subjectCode: 'LCC..10',
              subjectName: 'Placeholder 10',
              subjectUnit: '3',
            },
            {
              subjectStatus: 'N/A',
              subjectCode: 'LCC..11',
              subjectName: 'Placeholder 11',
              subjectUnit: '3',
            },
          ],
          term11: [
            {
              subjectStatus: 'N/A',
              subjectCode: 'CCINOV8',
              subjectName: 'Innovation and Technology Management',
              subjectUnit: '3',
            },
            {
              subjectStatus: 'N/A',
              subjectCode: 'THSCE03',
              subjectName: 'Computer Systems Engineering Thesis 3',
              subjectUnit: '2',
            },
            {
              subjectStatus: 'N/A',
              subjectCode: 'CEELEC3',
              subjectName: 'Computer Systems Engineering Elective 3',
              subjectUnit: '3',
            },
            {
              subjectStatus: 'N/A',
              subjectCode: 'LCC..12',
              subjectName: 'Placeholder 12',
              subjectUnit: '3',
            },
            {
              subjectStatus: 'N/A',
              subjectCode: 'LCC..13',
              subjectName: 'Placeholder 13',
              subjectUnit: '3',
            },
            {
              subjectStatus: 'N/A',
              subjectCode: 'LCLSTRI',
              subjectName: 'Lasallian Studies 3',
              subjectUnit: '1',
            },
          ],
          term12: [
            {
              subjectStatus: 'N/A',
              subjectCode: 'PRCT-CE',
              subjectName: 'Practicum for Computer Systems Engineering',
              subjectUnit: '3',
            },
            {
              subjectStatus: 'N/A',
              subjectCode: 'LCC..14',
              subjectName: 'Placeholder 14',
              subjectUnit: '3',
            },
            {
              subjectStatus: 'N/A',
              subjectCode: 'LCC..15',
              subjectName: 'Placeholder 15',
              subjectUnit: '3',
            }
          ],


        }
      },
      methods:{
        close() {
          window.location.href = '../../index.html'
        },
        highlightRow(item) {
          return item.subjectStatus == 'In Progress (Currently Enrolled)' ? '#0096FF' : 
                                        item.subjectCode.includes('LCC') == true ? 'orange' : 'transparent';
        },
        changeTextColor(item) {
          return item.subjectStatus == 'In Progress (Currently Enrolled)' ? 'White' : 
                                        item.subjectCode.includes('LCC') == true ? 'black' : 'black';
        }
      }
     

  })

  
 