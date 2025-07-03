const botao = document.getElementById("botao-girar");
const moeda = document.querySelector(".moeda");

// Cria o elemento resultado e insere depois da moeda
const resultado = document.createElement('p');
resultado.style.textAlign = 'center';
resultado.style.fontSize = '32px';
resultado.style.marginTop = '20px';
resultado.style.fontWeight = 'bold';
moeda.insertAdjacentElement('afterend', resultado);

botao.addEventListener("click", () => {
  resultado.textContent = '';       // limpa o resultado
  resultado.style.color = '';       // limpa cor anterior

  // Reseta a animação para reiniciar
  moeda.style.animation = 'none';
  moeda.offsetHeight;               // força browser recalcular
  moeda.style.animation = null;

  moeda.style.animationPlayState = "running"; // começa a girar

  setTimeout(() => {
    moeda.style.animationPlayState = "paused"; // para a animação

    const valor = Math.random();
    if (valor >= 0.5) {
      resultado.textContent = 'Kopf';
      resultado.style.color = 'black';
    } else {
      resultado.textContent = 'Zehl';
      resultado.style.color = 'black';
    }
  }, 2000);
});
