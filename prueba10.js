const respuestasCorrectas = ["....", ".", "-.",".-", ".-."]; // Aquí puedes agregar más respuestas correctas
    const verificarRespuestas = () => {
      const respuesta1 = document.getElementById("respuesta1").value.toUpperCase();
      const respuesta2 = document.getElementById("respuesta1").value.toUpperCase();
      const respuesta3 = document.getElementById("respuesta1").value.toUpperCase();
      const respuesta4 = document.getElementById("respuesta1").value.toUpperCase();
      const respuesta5 = document.getElementById("respuesta1").value.toUpperCase();

      if (respuestasCorrectas.includes(respuesta1) && respuestasCorrectas.includes(respuesta2) && respuestasCorrectas.includes(respuesta3) && respuestasCorrectas.includes(respuesta4) && respuestasCorrectas.includes(respuesta5)){
        document.getElementById("respuestas-correctas").style.display = "block";
        document.getElementById("imagen").src = "img/mayte.jpg"; // Aquí debes colocar la URL de tu imagen
        document.getElementById("mensaje").style.display = "none";
        document.getElementById("morse").style.display = "none";
        document.getElementById("final1").style.display = "none";
        document.getElementById("final").style.display = "none";
      } else {
        document.getElementById("mensaje").style.display = "block";
      }
    }