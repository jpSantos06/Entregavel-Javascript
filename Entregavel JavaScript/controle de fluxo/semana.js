function diaDaSemana(numero) {
    switch (numero) {
        case 1:
            return "Domingo";

        case 2:
            return "Segunda-feira";

        case 3:
            return "Terça-feira";

        case 4:
            return "Quarta-feira";

        case 5:
            return "Quinta-feira";

        case 6:
            return "Sexta-feira";

        case 7:
            return "Sábado";

        default:
            return "Número inválido";
    }
}

console.log("Dia 1:", diaDaSemana(1));
console.log("Dia 4:", diaDaSemana(4));
console.log("Dia 7:", diaDaSemana(7));
console.log("Dia 10:", diaDaSemana(10));