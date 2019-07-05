new Vue({
  el: "#desafio",
  data: {
    casse1: "destaque",
    perigo: true
  },
  methods: {
    iniciarEfeito() {
      setInterval(() => {
        this.casse1 = this.casse1 == "destaque" 
        ? "encolher" : "destaque";
      }, 1000);
    },
    iniciarProgresso() {}
  }
});
