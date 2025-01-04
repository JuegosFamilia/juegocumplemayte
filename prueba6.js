const respuestasCorrectas = ["10"];
    const verificarRespuestas = () => {
      const respuesta1 = document.getElementById("respuesta1").value.toUpperCase();

       if (respuestasCorrectas.includes(respuesta1)) {
        document.getElementById("respuestas-correctas").style.display = "block";
        document.getElementById("mensaje").style.display = "none";
      } else {
        document.getElementById("mensaje").style.display = "block";
        document.getElementById("respuestas-correctas").style.display = "none";
      }
    }