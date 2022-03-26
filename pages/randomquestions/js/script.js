new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    created(){
      this.shuffle(this.questions);
      this.shuffleAnswer();
      this.countDownTimer();
      
    },
    computed: {
      questionCounter(){
        return this.questionCount + 1;
      }
    },
    data () {
      return {
          answer: "",
          questionCount: 0,
          score: 0,
          countDown : 60,
          letterLabel: 64,
          questions : [
            {
              question: `What statement is part of MuleSoft's description of an application network?`,
              img: null,
              answers: [
               `Creates and manages a collection of JMS messaging services and infrastructure`,
               `Leverages Central IT to deliver complete point-to-point solutions with master data management`,
               `Creates and manages high availability and fault tolerant services and infrastructure`,
               `Creates reusable APIs and assets designed to be consumed by other business units`],
              correct: `Creates reusable APIs and assets designed to be consumed by other business units`
            },
            {
              question: `What is a core characteristic of the Modern API?`,
              img: null,
              answers: [
               `API has a mechanism to accept feeback and suggestions for improvement`,
               `API is rapidly prototyped following AGILE methodology`,
               `API follows the RESTful architecture`,
               `API is designed first using an API specification for rapid feedback`],
              correct: `API is designed first using an API specification for rapid feedback`
            },
            {
              question: `According to MuleSoft, what is the Center for Enablement's role in the new IT operating model?`,
              img: null,
              answers: [
               `Creates and manages discoverable assets to be consumed by line of business developers`,
               `Centrally manages partners and consultants to impement line of business projects`,
               `Produces and manages API policies for line of business deployments`,
               `Implements line of business projects to enforce common security requirements`],
              correct: `Creates and manages discoverable assets to be consumed by line of business developers`
            },
            {
              question: `What HTTP method in a RESTful web service is typically used to completely replace an existing resource?`,
              img: null,
              answers: [
               `PATCH`,
               `PUT`,
               `POST`,
               `GET`],
              correct: `PUT`
            },
            {
              question: `What MuleSoft API-led connectivity layer is intended to expose part of a backend database without business logic?`,
              img: null,
              answers: [
               `Data`,
               `System`,
               `Process`,
               `Experience`,
               `Security`],
              correct: `System`
            },
            {
              question: `What asset can NOT be created using Design Center?`,
              img: null,
              answers: [
               `API Fragments`,
               `API Portals`,
               `Mule Applications`,
               `API Specifications`],
              correct: `API Portals`
            },
            {
              question: `Where does a deployed Flow Designer application run in Anypoint Platform?`,
              img: null,
              answers: [
               `API Manager`,
               `CloudHub worker`,
               `Design Center`,
               `Exchange`],
              correct: `CloudHub worker`
            },
            {
              question: `A web client submits a GET request to a Mule 4 Application to the endpoint /customers?id=696969.
              Where is the id stored in the Mule event by the HTTP Listener?`,
              img: null,
              answers: [
               `Attributes`,
               `Inbound Properties`,
               `Variables`,
               `Payload`],
              correct: `Attributes`
            },
            {
              question: `What MuleSoft product enables publishing, sharing and searching of APIs?`,
              img: null,
              answers: [
               `API Notebook`,
               `Runtime Manager`,
               `Anypoint Exchange`,
               `API Designer`],
              correct: `Anypoint Exchange`
            },
            {
              question: `What is the main purpose of Flow Designer in Design Center?`,
              img: null,
              answers: [
               `To design and develop fully functional Mule applications in a hosted development environment`,
               `To design API RAML files in a graphical way`,
               `To define API lifecycle management in a graphical way`,
               `To design and mock Mule application templates that must be implemented using Anypoint Studio`],
              correct: `To design and develop fully functional Mule applications in a hosted development environment`
            },
            {
              question: `A RAML example fragment named BankAccountsExample.raml is placed in the examples folder in an API specification project. `,
              img: null,
              answers: [
               `examples: !include BankAccountsExample.raml`,
               `examples: #import examples/BankAccountsExample.raml`,
               `examples: !include examples/BankAccountsExample.raml`,
               `examples: #import BankAccountsExample.raml`],
              correct: `examples: !include examples/BankAccountsExample.raml`
            },
            {
              question: `An API has been created in Design Center. What is the next step to make the API discoverable?`,
              img: null,
              answers: [
               `Publish the API from inside Flow Designer`,
               `Enable autodiscovery in API Manager`,
               `Deploy the API to a Maven repository`,
               `Publish the API to Anypoint Exchange`],
              correct: `Publish the API to Anypoint Exchange`
            },
            {
              question: `Refer to the exhibit. There is an error in the flight_id resource's GET method. What needs to be done to fix the problem?`,
              img: `img/img1.gif`,
              answers: [
               `Remove blank line on row 9`,
               `Enclose flight_id in parentheses() instead of curly braces {}`,
               `Indent the get method under the {flight_id} resource`,
               `Outdent the {flight_id} resource`,
               `Remove the curly braces {} around flight_id`],
              correct: `Indent the get method under the {flight_id} resource`
            },
            {
              question: `Refer to the exhibit. What is the correct URL to submit a GET request to /patients?`,
              img: 'img/img2.gif',
              answers: [
               `http://dev.acme.com/patients`,
               `http://dev.acme.com/patients?year=2016`,
               `http://dev.acme.com/api/patients`,
               `http://dev.acme.com/api/patients?year=2016`],
              correct: `http://dev.acme.com/api/patients?year=2016`
            },
            {
              question: `A Database connector is configured to select rows from a MySQL database. What is the format of the array of results returned from the database query?`,
              img: null,
              answers: [
               `XML`,
               `JAVA`,
               `JSON`,
               `CSV`],
              correct: `JAVA`
            },
            {
              question: `What is the purpose of the api:router element in APIkit?`,
              img: null,
              answers: [
               `Creates native connectors using a 3rd party Java library`,
               `Serves as an API implementation`,
               `Validates requests against RAML API specifications and routes them to API implementations`,
               `Validates responses returned from API requests and routes them back to the caller`],
              correct: `Validates requests against RAML API specifications and routes them to API implementations`
            },
            {
              question: `What is the minimum required configuration in a flow for a Mule application to compile?`,
              img: null,
              answers: [
               `An event source`,
               `A logger component`,
               `A project RAML file`,
               `An event processor`],
              correct: `An event processor`
            },
            {
              question: `How does APIkit determine the number of flows to generate from a RAML specification?`,
              img: null,
              answers: [
               `Creates one flow for the entire API spec`,
               `Creates a separate flow for each response status code`,
               `Creates a separate flow for each resource that contains child resources`,
               `Creates a separate flow for each resource`,
               `Creates a separate flow for each HTTP method`],
              correct: `Creates a separate flow for each HTTP method`
            },
            {
              question: `What is NOT part of a Mule 4 event?`,
              img: null,
              answers: [
               `message`,
               `inboundProperties`,
               `attributes`,
               `payload`],
              correct: `inboundProperties`
            },
            {
              question: `What does the Mule runtime use to enforce policies and limit access to APIs?`,
              img: null,
              answers: [
               `Anypoint Access Control`,
               `The proxy created by API Manager`,
               `API Manager`,
               `The Mule runtime's embedded API Gateway`],
              correct: `The Mule runtime's embedded API Gateway`
            },
            {
              question: `What is the purpose of API autodiscovery?`,
              img: null,
              answers: [
               `Allows the Mule application to be automatically discovered on Anypoint Exchange`,
               `Enables an API to be directly managed in API Manager`,
               `Enables API Manager to discover the published API on Anypoint Exchange`,
               `Allows a deployed Mule application to connect with API Manager to download policies and act as its own API proxy`],
              correct: `Allows a deployed Mule application to connect with API Manager to download policies and act as its own API proxy`
            },
            {
              question: `How many Mule applications can run on a CloudHub worker?`,
              img: null,
              answers: [
               `At most one`,
               `At least one`,
               `Depends on the vCores of the worker`,
               `Depends on the number of CloudHub workers configured`],
              correct: `At most one`
            },
            {
              question: `API Manager has been configured to enforce an SLA policy and the RAML spec has been updated with the required client_id and client_secret header requirements. The new RAML spec has been published to Anypoint Exchange. What is the next step to gain access to the API?`,
              img: null,
              answers: [
               `Email the organization administrators to request access to the API`,
               `POST a JSON object to the /api/register endpoint of the API proxy`,
               `Request access to the API in Anypoint Exchange`,
               `Add a client application to the Anypoint Platform organization`],
              correct: `Request access to the API in Anypoint Exchange`
            },
            {
              question: `What does an API proxy application NOT do?`,
              img: null,
              answers: [
               `Determine which response Mule event is allowed to pass through to the API backend service`,
               `Meter the traffic flowing through the proxy`,
               `Apply runtime policies to enforce governance`,
               `Determine which request Mule event is allowed to pass through to the API backend service`],
              correct: `Determine which response Mule event is allowed to pass through to the API backend service`
            },],
        }
      },
    methods:{
      close() {
        window.location.href = '../../index.html'
      },

      shuffle(array) { 
        let indexLength = array.length, temporaryArrayHolder, generateRandomIndex;
            // LOOP BASE ON ARRAY LENGTH
            while ( indexLength !== 0) {
                
                // GENERATE RANDOM NUMBER BETWEEN 0 AND CURRENT ARRAY LENGTH VALUE
                generateRandomIndex = Math.floor(Math.random() * indexLength);
                // DECREASE ARRAY LENGTH
                indexLength -= 1;
        
                // ASSIGN INDEX VALUE
                temporaryArrayHolder = array[indexLength];
        
                // REPLACE INDEX VALUE BY RANDOM INDEX VALUE
                array[indexLength] = array[generateRandomIndex];
        
                // REPLACE RANDOM INDEX VALUE BY ORIGINAL INDEX VALUE
                array[generateRandomIndex] = temporaryArrayHolder;
        
            
            }
            return array;
      },

      shuffleAnswer(){
          this.questions.forEach(questionsIndex => {
              this.shuffle(questionsIndex.answers); 
              }
          );
      },

      submitAnswer(questionCount){
        this.countDown = 60
        if (this.questions[questionCount].correct == this.answer){
          this.score++
        } else{
          alert(`\nThe correct answer is \n\n${ this.toUnicodeVariant(this.questions[questionCount].correct, 'bold', 'bold') }\n`)
        }

        this.questionCount++

        if (this.questionCount == this.questions.length){
          alert(`\nYour score is ${ this.toUnicodeVariant(this.score.toString(), 'bold', 'bold') } out of ${ this.toUnicodeVariant((this.questions.length).toString(), 'bold', 'bold')}\n`)
          location.reload();
        }
      },

      countDownTimer() {
        if(this.countDown > -1) {
            setTimeout(() => {
                this.countDown -= 1
                this.countDownTimer()
            }, 1000)
        }else{
          this.submitAnswer(this.questionCount);
          this.countDownTimer();
        }
      },

     
     toUnicodeVariant(str, variant, flags) {
        const offsets = {
            m: [0x1d670, 0x1d7f6],
            b: [0x1d400, 0x1d7ce],
            i: [0x1d434, 0x00030],
            bi: [0x1d468, 0x00030],
            c: [0x1d49c, 0x00030],
            bc: [0x1d4d0, 0x00030],
            g: [0x1d504, 0x00030],
            d: [0x1d538, 0x1d7d8],
            bg: [0x1d56c, 0x00030],
            s: [0x1d5a0, 0x1d7e2],
            bs: [0x1d5d4, 0x1d7ec],
            is: [0x1d608, 0x00030],
            bis: [0x1d63c, 0x00030],
            o: [0x24B6, 0x2460],
            p: [0x249C, 0x2474],
            w: [0xff21, 0xff10],
            u: [0x2090, 0xff10]
        }
    
        const variantOffsets = {
            'monospace': 'm',
            'bold': 'b',
            'italic': 'i',
            'bold italic': 'bi',
            'script': 'c',
            'bold script': 'bc',
            'gothic': 'g',
            'gothic bold': 'bg',
            'doublestruck': 'd',
            'sans': 's',
            'bold sans': 'bs',
            'italic sans': 'is',
            'bold italic sans': 'bis',
            'parenthesis': 'p',
            'circled': 'o',
            'fullwidth': 'w'
        }
    
        // special characters (absolute values)
        var special = {
            m: {
                ' ': 0x2000,
                '-': 0x2013
            },
            i: {
                'h': 0x210e
            },
            g: {
                'C': 0x212d,
                'H': 0x210c,
                'I': 0x2111,
                'R': 0x211c,
                'Z': 0x2128
            },
            o: {
                '0': 0x24EA,
                '1': 0x2460,
                '2': 0x2461,
                '3': 0x2462,
                '4': 0x2463,
                '5': 0x2464,
                '6': 0x2465,
                '7': 0x2466,
                '8': 0x2467,
                '9': 0x2468,
            },
            p: {},
            w: {}
        }
        //support for parenthesized latin letters small cases 
        for (var i = 97; i <= 122; i++) {
            special.p[String.fromCharCode(i)] = 0x249C + (i - 97)
        }
        //support for full width latin letters small cases 
        for (var i = 97; i <= 122; i++) {
            special.w[String.fromCharCode(i)] = 0xff41 + (i - 97)
        }
    
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        const numbers = '0123456789';
    
        var getType = function (variant) {
            if (variantOffsets[variant]) return variantOffsets[variant]
            if (offsets[variant]) return variant;
            return 'm'; //monospace as default
        }
        var getFlag = function (flag, flags) {
            if (!flags) return false
            return flags.split(',').indexOf(flag) > -1
        }
    
        var type = getType(variant);
        var underline = getFlag('underline', flags);
        var strike = getFlag('strike', flags);
        var result = '';
    
        for (var k of str) {
            let index
            let c = k
            if (special[type] && special[type][c]) c = String.fromCodePoint(special[type][c])
            if (type && (index = chars.indexOf(c)) > -1) {
                result += String.fromCodePoint(index + offsets[type][0])
            } else if (type && (index = numbers.indexOf(c)) > -1) {
                result += String.fromCodePoint(index + offsets[type][1])
            } else {
                result += c
            }
            if (underline) result += '\u0332' // add combining underline
            if (strike) result += '\u0336' // add combining strike
        }
        return result
      }

    }
     
  })

  
 