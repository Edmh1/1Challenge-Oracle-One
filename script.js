function encriptar(){
  const texto = document.getElementById('input').value.toLowerCase();
  let resultado = '';
  
  for(let i = 0; i < texto.length; i++){
    const letra = texto[i];
  
    switch (letra) {
      case 'e':
        resultado += 'enter';
        break;
      case 'i':
        resultado += 'imes';
        break;
      case 'a':
        resultado += 'ai';
        break;
      case 'o':
        resultado += 'ober';
        break;
      case 'u':
        resultado += 'ufat';
        break;
      default:
        resultado += letra;
    }
  }
  const respuestaTexto = document.querySelector('.respuesta h2');
  const respuestaMensaje = document.querySelector('.respuesta h6');
  
  respuestaTexto.textContent = resultado;
  respuestaMensaje.textContent = 'Texto encriptado';
}
  

function desencriptar() {
  const textoEncriptado = document.querySelector('.respuesta h2').textContent.toLowerCase();
  let resultado = '';
  
  let i = 0;
  while (i < textoEncriptado.length) {
    let letra = textoEncriptado[i];
  
    switch (letra) {
      case 'e':
        if (textoEncriptado.substring(i, i + 5) === 'enter') {
          resultado += 'e';
          i += 5;
        } else {
          resultado += letra;
          i++;
        }
        break;
      case 'i':
        if (textoEncriptado.substring(i, i + 4) === 'imes') {
          resultado += 'i';
          i += 4;
        } else {
          resultado += letra;
          i++;
        }
        break;
      case 'a':
        if (textoEncriptado.substring(i, i + 2) === 'ai') {
          resultado += 'a';
          i += 2;
        } else {
          resultado += letra;
          i++;
        }
        break;
      case 'o':
        if (textoEncriptado.substring(i, i + 4) === 'ober') {
          resultado += 'o';
          i += 4;
        } else {
          resultado += letra;
          i++;
        }
        break;
      case 'u':
        if (textoEncriptado.substring(i, i + 4) === 'ufat') {
          resultado += 'u';
          i += 4;
        } else {
          resultado += letra;
          i++;
        }
        break;
      default:
        resultado += letra;
        i++;
    }
  }
  
  const respuestaTexto = document.querySelector('.respuesta h2');
  const respuestaMensaje = document.querySelector('.respuesta h6');
  
  respuestaTexto.textContent = resultado;
  respuestaMensaje.textContent = 'Texto desencriptado';
}

function copiar(){  
  const respuestaTexto = document.querySelector('.respuesta h2').textContent;
  const mensaje = document.getElementById('input');
  
  if (respuestaTexto) {
    mensaje.value = respuestaTexto;
    mensaje.select();
    document.execCommand('copy');
    alert('Texto copiado');
  } else {
    alert('No hay texto para copiar');
  }
}
  
  