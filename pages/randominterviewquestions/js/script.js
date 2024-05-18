new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    created(){
      this.shuffle(this.questions);
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
          countDown : 60,
          questions : [
            {
              question: `TELL ME ABOUT YOURSELF?`,
            
              answers: [
                `Thank you for giving me this opportunity here is a bit about myself.`,
                `I am Nelson de Guzman I have completed my Bachelor of Science in Information Technology`,
                `I was a programmer working from monday to saturday in a japanese company for 2 years`,
                `I have been mostly involved in Research and Development Department Systems`,
                `Usually, we take a task from the client through phone calls or meeting`,
                `Once the task is finished, we notify the client for feedback`,
                `And If there is no problem the task is complete`,
                `Sometimes, if I can't do the task, I asked my team members for help, likewise I also try to help them as much as I can`,
                `If there is no work to do, we study the work of other team members, so we can do their work in case they are absent.`
                ]
            },
            {
              question: `HOW WOULD YOU SPEND YOUR NEXT 30 DAYS IN THIS ROLE?`,
            
              answers: [
                `First is to observe and then explore what will be assigned to me`,
                `Check their process on how it works.`,
                `Try to test things`,
                `After that I can start accepting request for changes`,
              ]
            },
            {
              question: `WHEN WAS THE TIME YOU LOSE YOUR TEMPER AND WHAT DID YOU DO ABOUT IT?`,
            
              answers: [
                `There was none, but almost`,
                `There was a time when a client was blaming me because a system is not working properly.`,
                `I endured it for a whole day, and after work, I did heavy exercise to relieve what I felt.`,
              ]
            },
            {
              question: `DO YOU THINK YOU CAN STILL WORK BECAUSE YOU STOPPED FOR SO LONG?`,
            
              answers: [
                `I believe so, the experience is still there`,
                `and before i apply i did some review about the basics`,
              ]
            },
            {
              question: `IS SALARY IMPORTANT?`,
            
              answers: [
                `compensation is also important because it reflects the value I deliver to the company.`,
                `but the most important is how I utilise my skill to satisfy the company.`,
              ]
            },
            {
              question: `HOW WOULD YOU ENSURE A DIFFICULT IT TASK OR PROJECT IS DELIVERED ON TIME AND BUDGET`,
            
              answers: [
                `SDLC`,
              ]
            },
            {
              question: `WHAT WHERE YOU DOING THIS PAST 3 YEARS?`,
            
              answers: [
                `I was spending my time with my family`,
              ]
            },
            {
              question: `WHY DID YOU RESIGN?`,
            
              answers: [
                `It was pandemic and I decided to take a break and spend my time with my family`,
              ]
            },
            {
              question: `WHY SHOULD WE HIRE YOU?`,
            
              answers: [
                `As I understand it your are looking for somebody who has a degree in computer related course`,
                `a particular skill and has a working experience I have those`
              ]
            },
            {
              question: `WHAT IS YOUR GREATEST STRENGTH?`,
            
              answers: [
                `flexibility because I experienced different kind of roles in my fields, like being a`, 
                `customer support`, 
                `software developer`, 
                `project manager`,
                `and instructor for newly employees`,
                
              ]
            },
            {
              question: `WHY DO YOU WANT TO JOIN OUR COMPANY?`,
            
              answers: [
                `2`,
                
              ]
            },
            {
              question: `WHERE DO YOU SEE YOURSELF IN 5 YEARS?`,
            
              answers: [
                `111`,
                
              ]
            },
            {
              question: `DO YOU HAVE ANY QUESTIONS?`,
            
              answers: [
                `thank very much, I enjoy the process, I just have a couple of question`,
                `I would like to ask How would you describe the work environment here?`,
                `I would like to ask What is your advice to perform well in this kind of role?`,
                `I would like to ask Is there anything I can clarify for you?`,
                
              ]
            },

          ],
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

      nextQuestion(){
        this.countDown = 60
        this.questionCount++

        if (this.questionCount == this.questions.length){
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
          this.nextQuestion();
          this.countDownTimer();
        }
      },

    }
     
  })

 