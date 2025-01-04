
  const respuestasCorrectas = ["MADRID"]; // Aquí puedes agregar más respuestas correctas
    const verificarRespuestas = () => {
      const respuesta1 = document.getElementById("respuesta1").value.toUpperCase();
         
      if (respuestasCorrectas.includes(respuesta1)) {
        document.getElementById("respuestas-correctas").style.display = "block";
        document.getElementById("mensaje").style.display = "none";
        document.getElementById("imagen").src = "img/chulapa.gif"; // Aquí debes colocar la URL de tu imagen
      } else {
        document.getElementById("mensaje").style.display = "block";
      }
    }