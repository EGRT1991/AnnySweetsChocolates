
 
    //codigo del formulario //
    document.getElementById("formulario").addEventListener("submit", function(e) {
      e.preventDefault();
      document.getElementById("gracias").style.display = "block";
      setTimeout(() => {
        document.getElementById("gracias").style.display = "none";
        this.reset();
      }, 4000);
    });
 //Y justo antes del cierre de la etiqueta </body> o en tu archivo JavaScript de traducir al idioma y no me va ://
 
   //aqui empieza el codigo del whatsapp-float//

    fetch('/includes/whatsapp-float.html')
    .then(response => response.text())
    .then(html => {
      document.body.insertAdjacentHTML('beforeend', html); })
    .catch(err => console.warn('No se pudo cargar el botón de WhatsApp:', err));

//aqui empieza el pages de anny //

  // Cargar reseñas guardadas en localStorage
  function cargarReseñas() {
    const reseñasGuardadas = JSON.parse(localStorage.getItem('reseñas')) || [];
    listaReseñas.innerHTML = '';
    reseñasGuardadas.forEach(({ nombre, mensaje }) => {
      agregarReseñaDOM(nombre, mensaje);
    });
  }

  // Agrega reseña al DOM
  function agregarReseñaDOM(nombre, mensaje) {
    const reseñaDiv = document.createElement('div');
    reseñaDiv.classList.add('reseña');

    reseñaDiv.innerHTML = `
      <p>${mensaje.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</p>
      <div class="autor">- ${nombre.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</div>
    `;
    listaReseñas.prepend(reseñaDiv);
  }

  formReseñas.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = e.target.nombre.value.trim();
    const mensaje = e.target.mensaje.value.trim();

    if (nombre && mensaje) {
      agregarReseñaDOM(nombre, mensaje);

      // Guardar en localStorage
      const reseñasGuardadas = JSON.parse(localStorage.getItem('reseñas')) || [];
      reseñasGuardadas.push({ nombre, mensaje });
      localStorage.setItem('reseñas', JSON.stringify(reseñasGuardadas));

      formReseñas.reset();
    }
  });
  // Cargar reseñas al cargar la página a Anny//
  window.addEventListener('DOMContentLoaded', cargarReseñas);
  const formReseñas= document.getElementById('form-reseñas');
  const listaReseñas= document.getElementById('lista-reseñas');

  // Cargar reseñas guardadas en localStorage
  function cargarReseñas() {
    const reseñasGuardadas = JSON.parse(localStorage.getItem('reseñas')) || [];
    listaReseñas.innerHTML = '';
    reseñasGuardadas.forEach(({ nombre, mensaje }) => {
      agregarReseñaDOM(nombre, mensaje);
    });
  }

  // Agrega reseña al DOM
  function agregarReseñaDOM(nombre, mensaje) {
    const reseñaDiv = document.createElement('div');
    reseñaDiv.classList.add('reseña');

    reseñaDiv.innerHTML = `
      <p>${mensaje.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</p>
      <div class="autor">- ${nombre.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</div>
    `;
    listaReseñas.prepend(reseñaDiv);
  }

  formReseñas.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = e.target.nombre.value.trim();
    const mensaje = e.target.mensaje.value.trim();

    if (nombre && mensaje) {
      agregarReseñaDOM(nombre, mensaje);

      // Guardar en localStorage
      const reseñasGuardadas = JSON.parse(localStorage.getItem('reseñas')) || [];
      reseñasGuardadas.push({ nombre, mensaje });
      localStorage.setItem('reseñas', JSON.stringify(reseñasGuardadas));

      formReseñas.reset();
    }
  });

  // Cargar reseñas al cargar la página//
  window.addEventListener('DOMContentLoaded', cargarReseñas);

   // codigo del contacto//

  <script>
    // Acordeón FAQ
    document.querySelectorAll('.faq-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const respuesta = btn.nextElementSibling;
        const isOpen = btn.classList.contains('active');

        document.querySelectorAll('.faq-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.respuesta').forEach(r => r.style.maxHeight = null);

        if (!isOpen) {
          btn.classList.add('active');
          respuesta.style.maxHeight = respuesta.scrollHeight + "px";
        }
      });
    });

    // Formulario contacto
    document.getElementById("formulario").addEventListener("submit", function(e) {
      e.preventDefault();
      document.getElementById("gracias").style.display = "block";
      setTimeout(() => {
        document.getElementById("gracias").style.display = "none";
        this.reset();
      }, 4000);
    });
  </script>