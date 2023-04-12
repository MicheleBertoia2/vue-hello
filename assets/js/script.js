const {createApp} = Vue

createApp({
  data(){
    return{
      message : '',
      image : 'assets/img/image1.jpg',
      active : false
    }
  }
}).mount('#app')