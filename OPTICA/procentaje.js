// Definir la función que multiplica un número por 4
function multiplicarPorCuatro(numero) {
    return numero * 4;
  }
  
  // Definir la función que calcula el 30% de un número
  function calcularTreintaPorCiento(numero) {
    return numero * 0.3;
  }
  
  function calcular(event) {
    if (event.key === "Enter") {
      var numeroInput = document.getElementById("numero-input");
      var resultadoMultiplicacion = document.getElementById("resultado-multiplicacion");
      var resultadoTreintaPorCiento = document.getElementById("resultado-treintaporciento");
      var resultadoFinal = document.getElementById("resultado-final");
    
      // Obtener el número ingresado por el usuario
      var numero = parseFloat(numeroInput.value);
    
      // Verificar si el valor ingresado es un número válido
      if (isNaN(numero)) {
        alert("El valor ingresado no es un número válido.");
      } else {
        // Llamar a la función para multiplicar el número por 4
        var multiplicacion = multiplicarPorCuatro(numero);
    
        // Llamar a la función para calcular el 30% del resultado de la multiplicación
        var treintaPorCiento = calcularTreintaPorCiento(multiplicacion);
    
        // Sumar el 30% al resultado de la multiplicación inicial
        var resultado = multiplicacion + treintaPorCiento;
    
        // Mostrar los resultados
        resultadoMultiplicacion.textContent = "Precio base es: " + multiplicacion;
        resultadoTreintaPorCiento.textContent = "El 30% del precio base: " + treintaPorCiento;
        resultadoFinal.textContent = "precio base mas 30%: " + resultado;
      
        // Mostrar el contenedor de resultados
        document.getElementById("resultado-container").classList.remove("hidden");
      }
    }
  }
  
  // Obtener el campo de entrada
  var numeroInput = document.getElementById("numero-input");
  
  // Agregar un evento de escucha para la tecla "Enter"
  numeroInput.addEventListener("keyup", calcular);
  