new Vue({
    el: "#app",
    vuetify: new Vuetify(),
    data() {
        return {
            inputTask : '',
            taskList : [{
                name: 'Task 1',
                finishedDate: new Date().toISOString().substr(0, 10),
                deletedDate: ""
            },
            {
                name: 'Task 2',
                finishedDate: new Date().toISOString().substr(0, 10),
                deletedDate: ""
            },
            {
                name: 'Task 3',
                finishedDate: "",
                deletedDate: ""
            },
            {
                name: 'Task 4',
                finishedDate: "",
                deletedDate: ""
            },
            {
                name: 'Task 5',
                finishedDate: "",
                deletedDate: ""
            }],
            showAll : false
        }
    },
    methods: {

        addMe(){

            this.taskList.push({
                name: this.inputTask,
                finishedDate: "",
                deletedDate: ""
            })

        },
        deleteMe(itemIndex){
            this.taskList[itemIndex].deletedDate = new Date().toISOString().substr(0, 10)
            this.taskList[itemIndex].finishedDate = ''
        },
        finishMe(itemIndex){
            this.taskList[itemIndex].finishedDate = new Date().toISOString().substr(0, 10)
            this.taskList[itemIndex].deletedDate = ''
        },
        showAllTask(){
            this.showAll = !this.showAll
        },
        showAllTask(){
            this.showAll = !this.showAll
        },
        close() {
            window.location.href = '../../index.html'
          },

    }
});