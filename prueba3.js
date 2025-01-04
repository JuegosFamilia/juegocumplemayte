const respuestasCorrectas = ["MALTA", "BOURNEMOUTH", "BRIGHTON"]; // Aquí puedes agregar más respuestas correctas
    const verificarRespuestas = () => {
      const respuesta1 = document.getElementById("respuesta1").value.toUpperCase();
      const respuesta2 = document.getElementById("respuesta2").value.toUpperCase();
      const respuesta3 = document.getElementById("respuesta3").value.toUpperCase();

       if (respuestasCorrectas.includes(respuesta1) && respuestasCorrectas.includes(respuesta2) && respuestasCorrectas.includes(respuesta3)) {
        document.getElementById("respuestas-correctas").style.display = "block";
        document.getElementById("imagen").src = "img/forasteros.jpeg"; // Aquí debes colocar la URL de tu imagen
        document.getElementById("mensaje").style.display = "none";
        document.getElementById("pistas").style.display = "none";
        //        document.getElementById("imagen").src = "img/harry.jpeg"; // Aquí debes colocar la URL de tu imagen
              } else {
                document.getElementById("mensaje").style.display = "block";
              }
    }
    const pistas = () => {
      document.getElementById("pistas").style.display = "block";
      document.getElementById("imagen").src = "img/pais.png"; // Aquí debes colocar la URL de tu imagen
      document.getElementById("imagen2").src = "img/ciudades.png"; // Aquí debes colocar la URL de tu imagen
    }