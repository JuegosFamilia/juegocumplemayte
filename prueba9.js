
  const respuestasCorrectas = ["LOS", "POTITOS"]; // Aquí puedes agregar más respuestas correctas
    const verificarRespuestas = () => {
      const respuesta1 = document.getElementById("respuesta1").value.toUpperCase();
      const respuesta2 = document.getElementById("respuesta2").value.toUpperCase();
     
      if (respuestasCorrectas.includes(respuesta1) && respuestasCorrectas.includes(respuesta2)) {
        document.getElementById("respuestas-correctas").style.display = "block";
        document.getElementById("mensaje").style.display = "none";
        document.getElementById("imagen").src = "img/dancing.gif"; // Aquí debes colocar la URL de tu imagen
        document.getElementById("mensaje").style.display = "none";
        document.getElementById("jeroglifico").style.display = "none";
        document.getElementById("final1").style.display = "none";
        document.getElementById("final2").style.display = "none";
        document.getElementById("final").style.display = "none";
      } else {
        document.getElementById("mensaje").style.display = "block";
      }
    }