const MAX_PONTOS = 100;

console.log("Máximo de pontos:", MAX_PONTOS);

try {
    MAX_PONTOS = 200;
} catch (erro) {
    console.log("Erro:", erro.name);
    console.log(
        "Motivo: uma variável declarada com const não pode ser reatribuída."
    );
}