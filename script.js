
function encriptar(){
    const texto = document.getElementById('input').value.toLowerCase();
    let resultado = '';
  
    for (let i = 0; i < texto.length; i++) {
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
  
    const respuestaDiv = document.querySelector('.respuesta');
    const respuestaTexto = respuestaDiv.querySelector('h2');
    const respuestaMensaje = respuestaDiv.querySelector('h6');
  
    respuestaTexto.textContent = resultado;
    respuestaMensaje.textContent = 'Texto encriptado';
}

function desencriptar() {
    const textoEncriptado = document.querySelector('.respuesta h2').textContent;
    let resultado = '';
  
    let i = 0;
    while (i < textoEncriptado.length) {
      let palabra = textoEncriptado.substring(i, i + 5);
  
      switch (palabra) {
        case 'enter':
          resultado += 'e';
          i += 5;
          break;
        case 'imes':
          resultado += 'i';
          i += 4;
          break;
        case 'ai':
          resultado += 'a';
          i += 2;
          break;
        case 'ober':
          resultado += 'o';
          i += 4;
          break;
        case 'ufat':
          resultado += 'u';
          i += 4;
          break;
        default:
          resultado += textoEncriptado[i];
          i++;
      }
    }
  
    const respuestaDiv = document.querySelector('.respuesta');
    const respuestaTexto = respuestaDiv.querySelector('h2');
    const respuestaMensaje = respuestaDiv.querySelector('h6');
  
    respuestaTexto.textContent = resultado;
    respuestaMensaje.textContent = 'Texto desencriptado';
}
  
function copiar(){
    const mensaje = document.getElementById('input');
    mensaje.select();
    document.execCommand('copy');
    alert('Texto copiado');
}
  