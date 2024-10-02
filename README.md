# Calculadora Dutching

Este é um projeto de **Calculadora Dutching** desenvolvida em HTML, CSS e JavaScript. A calculadora permite que os usuários distribuam seu investimento entre várias apostas com odds diferentes, garantindo um retorno balanceado para qualquer resultado vencedor.

## Funcionalidades

- **Cálculo de Dutching:** Distribua o valor de investimento entre várias apostas com odds diferentes.
- **Retorno Equilibrado:** Calcula automaticamente o retorno de cada aposta, garantindo que o retorno seja o mesmo para qualquer seleção vencedora.
- **Formato de Odds e Investimento:** Possui campos formatados para facilitar a entrada de valores em reais (R$) e odds.
- **Cálculo Automático:** Ao alterar os valores de investimento ou odds, os cálculos são automaticamente atualizados.
- **Reset de Dados:** Um botão para reiniciar a calculadora e limpar todos os campos.

## Tecnologias Utilizadas

- **HTML:** Estrutura da página.
- **CSS:** Estilização da calculadora e formatação visual.
- **JavaScript:** Lógica de cálculo e manipulação da DOM para exibir os resultados.

## Como Usar

1. Clone ou baixe o repositório:
    ```bash
    git clone https://github.com/finntroll89/CalculadoraDutching
    ```
2. Abra o arquivo `index.html` em um navegador web.

3. Insira o valor do **investimento total** e as **odds** para até 14 seleções.

4. A calculadora exibirá:
   - O **investimento** para cada odd.
   - O **retorno** esperado para cada odd.
   - O **lucro** ou **perda** baseado no retorno total.

5. Use o botão "Reiniciar Calculadora" para limpar os campos.

## Exemplo de Uso

- Investimento total: **R$ 100,00**
- Odds de 3 seleções: **2.00**, **3.00**, **4.00**
  
A calculadora distribuirá o investimento de forma a equilibrar o retorno, caso qualquer uma dessas seleções ganhe.

## Como Funciona o Dutching?

O Dutching é uma técnica de apostas em que o investimento é dividido proporcionalmente entre várias seleções com diferentes odds, de forma que o retorno seja o mesmo, independentemente de qual seleção vencer.

### Fórmula de Cálculo:
Para cada seleção:
A Lógica por trás do Cálculo do Dutching
Entendendo a Fórmula

Investimento por Seleção = Investimento Total / Odd da Seleção
é a base para calcular o valor a ser apostado em cada seleção quando se utiliza a estratégia de Dutching. Mas o que ela realmente significa e como funciona?

Descomplicando a Fórmula:

Inverso da Odd: Dividir o investimento total pela odd é como multiplicar pelo inverso da odd. O inverso da odd representa a probabilidade implícita de um evento ocorrer, segundo a casa de apostas. Por exemplo, uma odd de 2.0 implica em uma probabilidade implícita de 50% (1/2.0).
Distribuição Proporcional: Ao dividir o investimento total pelo inverso da odd de cada seleção, você está distribuindo seu dinheiro proporcionalmente às probabilidades implícitas de cada evento. Quanto menor a probabilidade (odd maior), menor será o valor investido nessa seleção.
Garantia de Lucro: A ideia é que, independente de qual seleção vença, o seu lucro final seja o mesmo. Ao distribuir o investimento de forma proporcional às probabilidades implícitas, você está "hedging" suas apostas, ou seja, se protegendo contra possíveis perdas.

O retorno é calculado com base no valor investido e na odd de cada seleção.

## Contribuição

Se você encontrar algum bug ou tiver sugestões para melhorar o projeto, sinta-se à vontade para abrir uma issue ou enviar um pull request.


## Desenvolvido 



Desenvolvido por **Alex Barroso Paz**. Qualquer dúvida, entre em contato: wallezpaz@gmail.com.

