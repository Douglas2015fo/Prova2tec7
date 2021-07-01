var dados = []

function adicionarBill(request, response) {
    var body = request.body;
    dados.push({
        'id': Math.random().toString(20),
        'amount': body.amount,
        'produtc': body.produtc,
        'paymentMethod': body.paymentMethod,
        'customer': body.customer,
    })
    response.send(200)

}

function apagarBill(request, response) {
    var id = request.params.id;
    let valid = false;
    for (let i = 0; i < dados.length; i++) {
        if (id == dados[i].id) {
            dados.splice(i, 1);
            valid = true;
        }
    }
    response.send({}, 200)
}

function getBills(request, response) {
    var parametro = request.query.customer
    var arr = [];
    for (let i = 0; i < dados.length; i++) {
        if (parametro == dados[i].customer) {
            arr.push(dados[i])
        }
    }
    response.send({ data: arr }, 200)
}

module.exports = {
    apagarBill,
    getBills,
    adicionarBill,
}
