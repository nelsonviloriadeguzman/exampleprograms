new Vue({
    
    el: '#app',
    vuetify: new Vuetify(),
    computed:{
      imageSize(){
        return { height: '100px', width: '100px', padding: '3px'}
      },
      nameHeaderStyle(){
        return { width: '175px'}
      }
    },
    data () {
        return {

          columnStyle: {'border-spacing':'5px'},
          cardStyle: {display: 'table-cell'},
          cardTextStyle : {'position' : 'relative', 'top': '3rem'},
          comboBoxStyle : { 'padding': '0', 'margin': '0'},
          employeeList: [
            {
              name: 'John Doe',
              imagePath: 'img/defaultImage.png',
              serviceList: [
                {
                  selectedService: {
                    serviceName: 'Sitting - Lower Body',
                    price: '150.00',
                    duration: '',
                    paid: true
                  },
                  serviceComboBox: [
                    {
                      serviceName: 'Sitting - Whole Body',
                      price: '250.00',
                      duration: '',
                      paid: false
                    },
                    {
                      serviceName: 'Sitting - Upper Body',
                      price: '150.00',
                      duration: '',
                      paid: false
                    },
                    {
                      serviceName: 'Sitting - Lower Body',
                      price: '150.00',
                      duration: '',
                      paid: false
                    },
                  ],
                },
                {
                  selectedService: {
                    serviceName: 'Sitting - Lower Body',
                    price: '150.00',
                    duration: '',
                    paid: true
                  },
                  serviceComboBox: [
                    {
                      serviceName: 'Sitting - Whole Body',
                      price: '250.00',
                      duration: '',
                      paid: false
                    },
                    {
                      serviceName: 'Sitting - Upper Body',
                      price: '150.00',
                      duration: '',
                      paid: false
                    },
                    {
                      serviceName: 'Sitting - Lower Body',
                      price: '150.00',
                      duration: '',
                      paid: false
                    },
                  ],
                },
                {
                  selectedService: {
                    serviceName: 'Sitting - Lower Body',
                    price: '150.00',
                    duration: '',
                    paid: false
                  },
                  serviceComboBox: [
                    {
                      serviceName: 'Sitting - Whole Body',
                      price: '250.00',
                      duration: '',
                      paid: false
                    },
                    {
                      serviceName: 'Sitting - Upper Body',
                      price: '150.00',
                      duration: '',
                      paid: false
                    },
                    {
                      serviceName: 'Sitting - Lower Body',
                      price: '150.00',
                      duration: '',
                      paid: false
                    },
                  ],
                },
              ],
            },

            {
              name: 'Jane Doe',
              imagePath: 'img/defaultImage.png',
              serviceList: [
                {
                  selectedService: {
                    serviceName: 'Sitting - Lower Body',
                    price: '150.00',
                    duration: '',
                    paid: true
                  },
                  serviceComboBox: [
                    {
                      serviceName: 'Sitting - Whole Body',
                      price: '250.00',
                      duration: '',
                      paid: false
                    },
                    {
                      serviceName: 'Sitting - Upper Body',
                      price: '150.00',
                      duration: '',
                      paid: false
                    },
                    {
                      serviceName: 'Sitting - Lower Body',
                      price: '150.00',
                      duration: '',
                      paid: false
                    },
                  ],
                },
                {
                  selectedService: {
                    serviceName: 'Sitting - Lower Body',
                    price: '150.00',
                    duration: '',
                    paid: false
                  },
                  serviceComboBox: [
                    {
                      serviceName: 'Sitting - Whole Body',
                      price: '250.00',
                      duration: '',
                      paid: false
                    },
                    {
                      serviceName: 'Sitting - Upper Body',
                      price: '150.00',
                      duration: '',
                      paid: false
                    },
                    {
                      serviceName: 'Sitting - Lower Body',
                      price: '150.00',
                      duration: '',
                      paid: false
                    },
                  ],
                },
                
              ],
            },

            {
              name: 'Lorem Ipsum',
              imagePath: 'img/defaultImage.png',
              serviceList: [
                {
                  selectedService: {
                    serviceName: 'Sitting - Lower Body',
                    price: '150.00',
                    duration: '',
                    paid: false
                  },
                  serviceComboBox: [
                    {
                      serviceName: 'Sitting - Whole Body',
                      price: '250.00',
                      duration: '',
                      paid: false
                    },
                    {
                      serviceName: 'Sitting - Upper Body',
                      price: '150.00',
                      duration: '',
                      paid: false
                    },
                    {
                      serviceName: 'Sitting - Lower Body',
                      price: '150.00',
                      duration: '',
                      paid: false
                    },
                  ],
                },
              ],
            },
            
          ],
          

        }
      },
     
      methods:{
        goBack() {
          window.location.href = '../../index.html'
        },
        addNewEmployee(){
          this.employeeList.push({
            name: 'Click to Update',
            imagePath: 'img/defaultImage.png',
            serviceList: [
              {
                selectedService: {
                  serviceName: 'Sitting - Lower Body',
                  price: '150.00',
                  duration: '',
                  paid: false
                },
                serviceComboBox: [
                  {
                    serviceName: 'Sitting - Whole Body',
                    price: '250.00',
                    duration: '',
                    paid: false
                  },
                  {
                    serviceName: 'Sitting - Upper Body',
                    price: '150.00',
                    duration: '',
                    paid: false
                  },
                  {
                    serviceName: 'Sitting - Lower Body',
                    price: '150.00',
                    duration: '',
                    paid: false
                  },
                ],
              },
            ],
          },)
        },
        addNewService(employeeIndex){
          this.employeeList[employeeIndex].serviceList.push({
            selectedService: {
              serviceName: 'Sitting - Lower Body',
              price: '150.00',
              duration: '',
              paid: false
            },
            serviceComboBox: [
              {
                serviceName: 'Sitting - Whole Body',
                price: '250.00',
                duration: '',
                paid: false
              },
              {
                serviceName: 'Sitting - Upper Body',
                price: '150.00',
                duration: '',
                paid: false
              },
              {
                serviceName: 'Sitting - Lower Body',
                price: '150.00',
                duration: '',
                paid: false
              },
            ],
          })
        },
        togglePaid(employeeIndex,serviceIndex){

          return this.employeeList[employeeIndex].serviceList[serviceIndex].selectedService.paid = !this.employeeList[employeeIndex].serviceList[serviceIndex].selectedService.paid
        },
        paidStatus(employeeIndex,serviceIndex){
          return this.employeeList[employeeIndex].serviceList[serviceIndex].selectedService.paid ? 'success': 'error'
        },
        paidText(employeeIndex,serviceIndex){
          return this.employeeList[employeeIndex].serviceList[serviceIndex].selectedService.paid ? 'Paid': 'Unpaid'
        },
        removeItem(itemIndex){
          this.employeeList.splice(itemIndex,1);
        },
      }
     

  })

  
 