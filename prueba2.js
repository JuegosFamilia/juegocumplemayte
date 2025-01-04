const respuestasCorrectas = ["BICI", "NADAR", "SENDERISMO"]; // Aquí puedes agregar más respuestas correctas
    const verificarRespuestas = () => {
      const respuesta1 = document.getElementById("respuesta1").value.toUpperCase();
      const respuesta2 = document.getElementById("respuesta2").value.toUpperCase();
      const respuesta3 = document.getElementById("respuesta3").value.toUpperCase();

      if (respuestasCorrectas.includes(respuesta1) && respuestasCorrectas.includes(respuesta2) && respuestasCorrectas.includes(respuesta3)) {
        document.getElementById("respuestas-correctas").style.display = "block";
        document.getElementById("mensaje").style.display = "none";
        document.getElementById("mensaje").style.display = "none";
        document.getElementById("sopa").style.display = "none";
      } else {
        document.getElementById("mensaje").style.display = "block";
      }
    }