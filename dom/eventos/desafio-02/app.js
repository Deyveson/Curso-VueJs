new Vue({
  el: "#desafio",
  data: {
    valor: ""
  },
  methods: {
    exibirAlerta() {
      alert("Estou Alertando");
    },
    alterarValor(e){
        this.valor = e.target.value 
    }
  }
});
