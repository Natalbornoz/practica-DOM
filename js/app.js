function add() {
  // Tomar el valor y almacenarlo en una variable que contenga esa valor
  // para tomar elmento me voy al index, agarro el valor y lo almaceno ..
  // la logica es que tomamos el valor y lo almacenamos para poder mostrarlo en otra parte
  var comments = document.getElementById("comment").value;
  // Para limpiar : tomo el elemento y lo igualo a un espacio vacío pidiendo que limpie el contenedor
  document.getElementById("comment").value = "";
  var newComments = document.createElement('div');//ahora crearé un espacio para almacenar y mostrar los datos que tomé
  var cont = document.getElementById('cont');//ahora llamaré

  var check = document.createElement('input'); //Crearé un input de tipo check box
  check.type = 'checkbox';


  var paragraph = document.createElement ('p'); //Crao caja de texto para mostrar el contenido que rescate con anterioridad.
  paragraph.classList.add('color');
  var nodoText = document.createTextNode(comments)//crearemos nodo de texto, y le indicamos que es hijo de p
  paragraph.appendChild(nodoText);

  var heart = document.createElement ('i');//Creo elemento iconico (corazón)
  heart.classList.add ('fa', 'fa-heart', 'heart');

  var trash = document.createElement ('i');//Creo elemento iconico (basurero)
  trash.classList.add ('fa', 'fa-trash', 'trash');

  //newComments adopta a todos los elementos quee estan flotando
  newComments.appendChild(check);
  newComments.appendChild(trash);
  newComments.appendChild(heart);
  newComments.appendChild(paragraph);

  cont.appendChild(newComments);

  check.addEventListener('click', function() {
    paragraph.classList.toggle('strike-out');
  })

  trash.addEventListener('click', function() {
    cont.removeChild(newComments);//Remueve el contenido del contenedor
  })

  heart.addEventListener('click', function() {
    heart.classList.toggle('red');//corazoncito rojo
  })


  }
