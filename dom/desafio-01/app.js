new Vue({
  el: "#desafio",
  data: {
    nome: "Deyveson Willian",
    idade: 25,
    imagem: "http://files.cod3r.com.br/curso-vue/vue.jpg"
  },
  methods: {
    random: function() {
      return Math.random();
    },
    idadeVezes3(){
        return this.idade * 3;
    }
  }
});
