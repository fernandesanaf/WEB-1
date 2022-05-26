var conta = {
    saldo : 0,
    deposita: function(x){
        this.saldo += x
    },
};

conta.deposita(100)
console.log(conta.saldo)