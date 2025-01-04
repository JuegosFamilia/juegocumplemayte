const respuestasCorrectas = ["AMANECER", "VALIENTE"];
    const verificarRespuestas = () => {
      const respuesta1 = document.getElementById("respuesta1").value.toUpperCase();
      const respuesta2 = document.getElementById("respuesta2").value.toUpperCase();

       if (respuestasCorrectas.includes(respuesta1) && respuestasCorrectas.includes(respuesta2)) {
        document.getElementById("respuestas-correctas").style.display = "block";
        document.getElementById("mensaje").style.display = "none";
      } else {
        document.getElementById("mensaje").style.display = "block";
      }
    }