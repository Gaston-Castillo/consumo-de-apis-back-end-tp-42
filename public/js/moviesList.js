window.onload = function(){
    let body = document.querySelector('body');
    let moviesListTitulo = document.querySelector('.moviesListTitulo');

    let modo = confirm('Desea modo oscuro');
    if(modo){
        body.style.backgroundColor = '#7f7f7f'
        body.classList.add('fondoMoviesList');
    }
    
    console.log(body);
    moviesListTitulo.innerHTML = 'LISTADO DE PELÍCULAS';
    moviesListTitulo.style.color ='white';
    moviesListTitulo.style.backgroundColor = 'teal';
    moviesListTitulo.style.padding = '20px';

    let estadoSecreto = 0;

// Evento al presionar una tecla
document.addEventListener('keydown', function(evento) {
  const teclaPresionada = evento.key; // Convertir a mayúscula

  switch (estadoSecreto) {
    case 0:
      if (teclaPresionada === 's') {
        estadoSecreto = 1;
      } else {
        estadoSecreto = 0;
      }
      break;
    case 1:
      if (teclaPresionada === 'e') {
        estadoSecreto = 2;
      } else {
        estadoSecreto = 0;
      }
      break;
    case 2:
      if (teclaPresionada === 'c') {
        estadoSecreto = 3;
      } else {
        estadoSecreto = 0;
      }
      break;
    case 3:
      if (teclaPresionada === 'r') {
        estadoSecreto = 4;
      } else {
        estadoSecreto = 0;
      }
      break;
    case 4:
      if (teclaPresionada === 'e') {
        estadoSecreto = 5;
      } else {
        estadoSecreto = 0;
      }
      break;
    case 5:
      if (teclaPresionada === 't') {
        estadoSecreto = 6;
      } else {
        estadoSecreto = 0;
      }
      break;
    case 6:
      if (teclaPresionada === 'o') {
        alert('¡SECRETO MÁGICO!');
        estadoSecreto = 0; // Reiniciar el estado
      } else {
        estadoSecreto = 0;
      }
    break;
}
});


}