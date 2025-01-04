const respuestasCorrectas = ["VAMPIRO", "HADA"]; // Aquí puedes agregar más respuestas correctas
    const verificarRespuestas = () => {
      const respuesta1 = document.getElementById("respuesta1").value.toUpperCase();
      const respuesta2 = document.getElementById("respuesta2").value.toUpperCase();

       if (respuestasCorrectas.includes(respuesta1)) {
        document.getElementById("respuestas-correctas").style.display = "block";
    cccccc
        document.getElementById("mensaje").style.display = "none";
//        document.getElementById("imagen").src = "img/harry.jpeg"; // Aquí debes colocar la URL de tu imagen
      } else {
        document.getElementById("mensaje").style.display = "block";
      }
    }