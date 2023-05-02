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
    if (texto_array[i] == "a"){
        texto_array[i] = "ai"
    } else if(texto_array[i] == "e"){
        texto_array[i] = "enter"
    } else if(texto_array[i] == "i"){
        texto_array[i] = "imes"
    } else if(texto_array[i] == "o"){
        texto_array[i] = "ober"
    } else if(texto_array[i] == "u"){
        texto_array[i] = "ufat"
    } else {
        continue;
    }
  }
  // join() convierte el array en una cadena de texto. Las comillas van vacías para que la cadena de texto sea tal cual el array.
  cadena = texto_array.join("");

  //Convierto la primera letra en Mayuscula a traves de una funcion flecha. CharAR selecciona el primer valor del string y le aplica el toUpperCase
let primeraMayuscula = (cadena) => cadena.charAt(0).toUpperCase().concat(cadena.substring(1, cadena.length));

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

  let primeraMayuscula = (decrypt_cadena) => decrypt_cadena.charAt(0).toUpperCase().concat(decrypt_cadena.substring(1, decrypt_cadena.length));

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
