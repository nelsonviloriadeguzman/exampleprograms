new Vue({
    
    el: '#app',
    vuetify: new Vuetify(),
    computed:{
      
    },
    data () {
        return {
          itemList: [
            {
              name: 'Task 1',
              startDate: moment().subtract(2, 'days').format(),
              endDate: moment().subtract(1, 'days').format(),
            },
            {
                name: 'Task 2',
                startDate: moment().format(),
                endDate: moment().add(1, 'days').format(),
            },
            {
              name: 'Task 3',
              startDate: moment().add(2, 'days').format(),
              endDate: moment().add(3, 'days').format(),
            },
            {
              name: 'Task 4',
              startDate: moment().add(4, 'days').format(),
              endDate: moment().add(4, 'days').format(),
            },
          ],

          startDateMenu: [],
          endDateMenu: [],

          dayList: [
            {weekDay: moment().subtract(2, 'days').format()},
            {weekDay: moment().subtract(1, 'days').format()},
            {weekDay: moment().format()},
            {weekDay: moment().add(1, 'days').format()},
            {weekDay: moment().add(2, 'days').format()},
            {weekDay: moment().add(3, 'days').format()},
            {weekDay: moment().add(4, 'days').format()}
          ]
         

        }
      },
      methods:{
        goBack() {
          window.location.href = '../../index.html'
        },
        addNew(){
          this.itemList.push({
            name: '',
            startDate: moment().format('YYYY-MM-DD'),
            endDate: moment().format('YYYY-MM-DD'),
          })
        },
        removeItem(itemIndex){
          this.itemList.splice(itemIndex,1);
        },

        startDateFormat(startDate){
          return moment(startDate).format('MM/DD/YYYY');
        },
        endDateFormat(endDate){
          return moment(endDate).format('MM/DD/YYYY');
        },

        dayListFormat(weekDayIndex){
          return moment(this.dayList[weekDayIndex].weekDay).format('ddd DD');
        },
        dayListFormatMonthAndYear(weekDayIndex){
          return moment(this.dayList[weekDayIndex].weekDay).format('MMM - YYYY');
        },

        backDay(){
          this.dayList.map(rec =>{
            rec.weekDay = moment(rec.weekDay).subtract(1, 'days')
          })        
        },
        nextDay(){
          this.dayList.map(rec =>{
            rec.weekDay = moment(rec.weekDay).add(1, 'days')
          })        
        },
        highLight(rowStartDate, rowEndDate, headerIndex){
          let startDate = moment(rowStartDate).format('YYYY-MM-DD')
          let endDate = moment(rowEndDate).format('YYYY-MM-DD')
          let headerDate = moment(this.dayList[headerIndex].weekDay).format('YYYY-MM-DD')
          let currentDate = moment().format('YYYY-MM-DD')

          if(headerDate >= startDate && headerDate <= endDate){

            if (currentDate > endDate){
              return{
                backgroundColor : 'red' 
              }
            }else{
              return{
                backgroundColor : '#4885f4' 
              }
            }
            
          }
        },
        boldText(headerIndex){
          let currentDate = moment().format('YYYY-MM-DD')
          let headerDate = moment(this.dayList[headerIndex].weekDay).format('YYYY-MM-DD')
          if(currentDate === headerDate){
            return 'text-center font-weight-black black--text'
          }else {
            return 'text-center'
          }
        }
      }
     
      

  })

  
 