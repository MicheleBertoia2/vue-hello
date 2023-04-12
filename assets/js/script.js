const {createApp} = Vue

createApp({
  data(){
    return{
      message : 'ciao vue!',
      image : 'assets/img/image1.jpg'
    }
  }
}).mount('#app')