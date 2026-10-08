
try {
    console.log(ehMaiorDeIdadeExpressao(20));
} catch (erro) {
    console.log("Erro:", erro.name);
    console.log(
        "Motivo: a função de expressão está armazenada em uma const " +
        "e não pode ser utilizada antes da inicialização."
    );
}

const ehMaiorDeIdadeExpressao = function (idade) {
    return idade >= 18;
};

console.log(
    "Função de expressão:",
    ehMaiorDeIdadeExpressao(20)
);
