new Vue({
    el: "#desafio",
    data:{
        nome: "Deyveson Willian",
        idade: "25",
        link: 'https://i.imgur.com/A87AW0Z.jpg'
    },
    methods: {
        randomico: function() {
          
          return Math.random();
        }
      }
})