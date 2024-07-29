function calculateRank() {
    const nickname = document.getElementById('nickname').value;
    const matches = parseInt(document.getElementById('matches').value);
    const victories = parseInt(document.getElementById('victories').value);
    const defeats = parseInt(document.getElementById('defeats').value);

    let saldoVitorias = victories - defeats;
    let nivel;

    switch (true) {
        case (victories < 10):
            nivel = "Ferro";
            break;
        case (victories >= 11 && victories <= 20):
            nivel = "Bronze";
            break;
        case (victories >= 21 && victories <= 50):
            nivel = "Prata";
            break;
        case (victories >= 51 && victories <= 80):
            nivel = "Ouro";
            break;
        case (victories >= 81 && victories <= 90):
            nivel = "Diamante";
            break;
        case (victories >= 91 && victories <= 100):
            nivel = "Lendário";
            break;
        case (victories >= 101):
            nivel = "Imortal";
            break;
        default:
            nivel = "Inválido";
    }

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `O Herói "${nickname}" tem saldo de ${saldoVitorias} vitórias e está no nível ${nivel}`;
}
