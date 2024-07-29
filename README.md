# Bootcamp Santander 2024 - Criando Jogos com Godot

## Desafio 2 :  Calculadora de partidas Rankeadas

**Instruções**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções

## Objetivo:

Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal

## Saída

Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"

## Resolução:

![Código em JavaScript](assets/códigoJS.png)

<p>Para a resolução do desafio, escolhi usar "switch" com "Math.random, pois esta abordagem permite um controle estruturado dos casos, utilizando a flexibilidade de expressões dentro do switch.</p>

<p>Resolvi adicionar também HTML e CSS para que a resolução seja mais "Gameficada":</p>

![Código em execução](assets/calcPreenchida.png)
