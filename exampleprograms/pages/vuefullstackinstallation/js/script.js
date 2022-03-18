

new Vue({
    
    el: '#app',
    vuetify: new Vuetify(),
   
    data () {
        return {
          videoList:[
          {
            videoCount: 'Step 1',
            videoTitle: 'Vue Fullstack - 001 - Server Side Installation',
            videoPath: 'https://www.youtube.com/embed/5H7BuwvcCT4',
          }, 
          {
            videoCount: 'Step 2',
            videoTitle: 'Vue Fullstack - 002 - Client Side Installation',
            videoPath: 'https://www.youtube.com/embed/t-V3LbvXgcI',
          },
          {
            videoCount: 'Step 3',
            videoTitle: 'Vue Fullstack - 003 - Custom Plugins and env',
            videoPath: 'https://www.youtube.com/embed/SYD2qdwkYoA',
          },
          {
            videoCount: 'Step 4',
            videoTitle: 'Vue Fullstack - 004 - Installing moment js package globally',
            videoPath: 'https://www.youtube.com/embed/TYe7i7GC6Qo',
          },
          {
            videoCount: 'Step 5',
            videoTitle: 'Vue Fullstack - 005 - Installing axios package globally',
            videoPath: 'https://www.youtube.com/embed/tfKKPNSWmoU',
          },
          {
            videoCount: 'Step 6',
            videoTitle: 'Vue Fullstack - 006 - Installing mdi icon package to work even offline',
            videoPath: 'https://www.youtube.com/embed/q0fDwOxiDfw',
          },
          {
            videoCount: 'Step 7',
            videoTitle: 'Vue Fullstack - 007 - Installing pdfmake package',
            videoPath: 'https://www.youtube.com/embed/KqxPfY8L9zA',
          },
          {
            videoCount: 'Step 8',
            videoTitle: 'Vue Fullstack - 008 - Installing pdfmake fonts package',
            videoPath: 'https://www.youtube.com/embed/zymhtOmLq-o',
          },
          {
            videoCount: 'Step 9',
            videoTitle: 'Vue Fullstack - 009 - Deploying Server',
            videoPath: 'https://www.youtube.com/embed/DbvqzHmBK_s',
          },
          {
            videoCount: 'Step 10',
            videoTitle: 'Vue Fullstack - 010 - Deploying Client',
            videoPath: 'https://www.youtube.com/embed/rvVbXV4jA1s',
          },]
        }
      },
      methods:{
        goBack() {
          window.location.href = '../../index.html'
        },
      }
     
  })

  
 