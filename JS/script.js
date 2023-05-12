let text = document.getElementById("text");
let textencrypt = document.getElementById("textencrypt");
let textdecrypt = document.getElementById("textdecrypt");
var cambiarValor = document.querySelector("#cambiarValor");

function encrypt() {
  let texto_array;
  let contenido = text.value;
  contenido = contenido.toLowerCase();

  // Reemplazar letras con acentos y caracteres especiales
  // La expresión regular /[áàäâ]/g reemplazara todas las instancias de las letras "á", "à", "ä" y "â".
  // La "g" al final de la expresión regular busca todas las coincidencias y se reemplazarán todas ellas.
  contenido = contenido.replace(/[áàäâ]/g, "a");
  contenido = contenido.replace(/[éèëê]/g, "e");
  contenido = contenido.replace(/[íìïî]/g, "i");
  contenido = contenido.replace(/[óòöô]/g, "o");
  contenido = contenido.replace(/[úùüû]/g, "u");

  // reemplaza caracteres especiales con un espacio vacío
  contenido = contenido.replace(/[^\w\s]/gi, "");

  // Actualizar el valor del textarea
  text.value = contenido;

  //Con split() convertimos la cadena de texto en un array.
  texto_array = text.value.split("");

  for (let i = 0; i < texto_array.length; i++) {
    if (texto_array[i] == "a") {
      texto_array[i] = "ai";
    } else if (texto_array[i] == "e") {
      texto_array[i] = "enter";
    } else if (texto_array[i] == "i") {
      texto_array[i] = "imes";
    } else if (texto_array[i] == "o") {
      texto_array[i] = "ober";
    } else if (texto_array[i] == "u") {
      texto_array[i] = "ufat";
    } else {
      continue;
    }
  }
  // join() convierte el array en una cadena de texto. Las comillas van vacías para que la cadena de texto sea tal cual el array.
  cadena = texto_array.join("");

  //Convierto la primera letra en Mayuscula a traves de una funcion flecha. CharAR selecciona el primer valor del string y le aplica el toUpperCase
  let primeraMayuscula = (cadena) =>
    cadena.charAt(0).toUpperCase().concat(cadena.substring(1, cadena.length));

  textencrypt.innerHTML = primeraMayuscula(cadena);
  textdecrypt.innerHTML = primeraMayuscula(cadena);
  document.getElementById("textencrypt").style.visibility = "visible";
  document.getElementById("textencrypt").style.height = "16vw";
  document.getElementById("textdecrypt").style.height = "0";
  document.getElementById("textdecrypt").style.visibility = "hidden";
  document.getElementById("imagen-muñeco").style.display = "none";
  document.getElementById("botonesMoverYCopiar").style.display = "block";
  return primeraMayuscula(cadena);
}

function decrypt() {
  let contenido2 = text.value;
  contenido2 = contenido2.toLowerCase();
  console.log(contenido2);

  contenido2 = contenido2.replace(/[áàäâ]/g, "a");
  contenido2 = contenido2.replace(/[éèëê]/g, "e");
  contenido2 = contenido2.replace(/[íìïî]/g, "i");
  contenido2 = contenido2.replace(/[óòöô]/g, "o");
  contenido2 = contenido2.replace(/[úùüû]/g, "u");

  contenido2 = contenido2.replace(/[^\w\s]/gi, "");

  let decrypt_content = contenido2;
  let decrypt_array = decrypt_content.split(" ");

  for (let j = 0; j < decrypt_array.length; j++) {
    decrypt_array[j] = decrypt_array[j].replace(/ai/g, "a");
    decrypt_array[j] = decrypt_array[j].replace(/enter/g, "e");
    decrypt_array[j] = decrypt_array[j].replace(/imes/g, "i");
    decrypt_array[j] = decrypt_array[j].replace(/ober/g, "o");
    decrypt_array[j] = decrypt_array[j].replace(/ufat/g, "u");
  }

  let decrypt_cadena = decrypt_array.join(" ");

  let primeraMayuscula = (decrypt_cadena) =>
    decrypt_cadena
      .charAt(0)
      .toUpperCase()
      .concat(decrypt_cadena.substring(1, decrypt_cadena.length));

  textencrypt.innerHTML = primeraMayuscula(decrypt_cadena);
  textdecrypt.innerHTML = primeraMayuscula(decrypt_cadena);

  cadena = primeraMayuscula(decrypt_cadena);
  document.getElementById("textencrypt").style.visibility = "hidden";
  document.getElementById("textdecrypt").style.visibility = "visible";
  document.getElementById("textdecrypt").style.height = "16vw";
  document.getElementById("textencrypt").style.height = "0";
  document.getElementById("textdecrypt").style.color = "black";
  document.getElementById("textdecrypt").style.fontSize = "1.3em";
  document.getElementById("textdecrypt").style.fontWeight = "bold";
  document.getElementById("imagen-muñeco").style.display = "none";
  document.getElementById("botonesMoverYCopiar").style.display = "block";
}

function clickToCopy(elemento) {
  //Con jQuery copio el texto encriptado al portapapeles
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(elemento).text()).select();
  document.execCommand("copy");
  $temp.remove();
  alert("Texto copiado");
}

function copyValue() {
  //Cambio el valor de text al del texto encriptado
  text.value = cadena;
  document.getElementById("textencrypt").style.visibility = "hidden";
  document.getElementById("textdecrypt").style.visibility = "hidden";
  alert("Texto movido");
}

//Al hacer click en el boton, el texto dentro del textarea inicial se cambio por el del texto ya encriptado
moveValue.onclick = copyValue;

//Boton dark mode que modifica los colores de la mayoria de secciones
document.getElementById("id-sun").onclick = function () {
  document.getElementById("body").style.background = "white";
  document.getElementById("titulo-1").style.background = "lavender";
  document.getElementById("titulo-1").style.color = "rgb(68, 68, 248)";
  document.getElementById("container-btn-mode").style.background = "lavender";
  document.getElementById("titulo-2").style.background = "lavender";
  document.getElementById("titulo-2").style.color = "rgb(68, 68, 248)";
  document.getElementById("main").style.background = "lavender";
  document.getElementById("text").style.background = "lavender";
  document.getElementById("encrypt").style.background = "darkblue";
  document.getElementById("encrypt").style.color = "white";
  document.getElementById("decrypt").style.background = "white";
  document.getElementById("decrypt").style.color = "blue";
  document.getElementById("decrypt").style.border = "2px solid darkblue";
  document.getElementById("icono-advertencia").style.color = "black";
  document.getElementById("resultado").style.background = "lavender";
  document.getElementById("textencrypt").style.background = "lavender";
  document.getElementById("textdecrypt").style.background = "lavender";
  document.getElementById("btn-copy").style.background = "darkblue";
  document.getElementById("btn-copy").style.color = "white";
  document.getElementById("moveValue").style.background = "white";
  document.getElementById("moveValue").style.color = "blue";
  document.getElementById("moveValue").style.border = "2px solid darkblue";
  document.getElementById("footer").style.background = "lavender";
  document.getElementById("sitio").style.color = "darkblue";
  document.getElementById("icono-footer-1").style.color = "darkblue";
  document.getElementById("icono-footer-2").style.color = "darkblue";
  document.getElementById("icono-footer-3").style.color = "darkblue";
  document.getElementById("derechos").style.color = "black";
  document.getElementById("nombre").style.color = "purple";
  document.getElementById("id-moon").classList.remove("active");
  this.classList.add("active");
};
document.getElementById("id-moon").onclick = function () {
  document.getElementById("id-sun").classList.remove("active");
  document.getElementById("body").style.background =
    "radial-gradient(rgb(78, 78, 78), rgb(65, 64, 64), rgb(51, 51, 51), rgb(29, 29, 29), rgb(17, 17, 17), rgb(8, 8, 8), rgb(0, 0, 0))";
  document.getElementById("titulo-1").style.background = "transparent";
  document.getElementById("titulo-1").style.color = "gray";
  document.getElementById("container-btn-mode").style.background =
    "transparent";
  document.getElementById("titulo-2").style.background = "transparent";
  document.getElementById("titulo-2").style.color = "gray";
  document.getElementById("main").style.background = "rgb(51, 51, 51)";
  document.getElementById("text").style.background = "rgb(65, 65, 65)";
  document.getElementById("encrypt").style.background = "rgb(100, 100, 100)";
  document.getElementById("encrypt").style.color = "black";
  document.getElementById("decrypt").style.background = "rgb(20, 20, 20)";
  document.getElementById("decrypt").style.color = "white";
  document.getElementById("decrypt").style.border = "2px solid darkgray";
  document.getElementById("icono-advertencia").style.color = "darkgray";
  document.getElementById("resultado").style.background = "rgb(65, 65, 65)";
  document.getElementById("textencrypt").style.background = "rgb(65, 65, 65)";
  document.getElementById("textdecrypt").style.background = "rgb(65, 65, 65)";
  document.getElementById("btn-copy").style.background = "rgb(100, 100, 100)";
  document.getElementById("btn-copy").style.color = "black";
  document.getElementById("moveValue").style.background = "rgb(20, 20, 20)";
  document.getElementById("moveValue").style.color = "white";
  document.getElementById("moveValue").style.border = "2px solid darkgray";
  document.getElementById("footer").style.background = "transparent";
  document.getElementById("sitio").style.color = "gray";
  document.getElementById("icono-footer-1").style.color = "gray";
  document.getElementById("icono-footer-2").style.color = "gray";
  document.getElementById("icono-footer-3").style.color = "gray";
  document.getElementById("derechos").style.color = "gray";
  document.getElementById("nombre").style.color = "white";
  this.classList.add("active");
};
