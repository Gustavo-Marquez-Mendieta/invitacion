const fechaBoda = new Date("2025-11-15T17:00:00").getTime();

const temporizador = setInterval(() => {
  const ahora = new Date().getTime();
  const distancia = fechaBoda - ahora;

  const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

  document.getElementById("reloj").innerHTML =
    `${dias} días, ${horas} hrs, ${minutos} min, ${segundos} seg`;

  if (distancia < 0) {
    clearInterval(temporizador);
    document.getElementById("reloj").innerHTML = "¡Hoy es el gran día! 💍";
  }
}, 1000);
