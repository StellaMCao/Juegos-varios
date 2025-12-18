// script.js – Psicohoróscopo de la esperanza 2026
// Usa textos definidos en textos.js

function normalizarSigno(signo) {
  return signo
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();
}

function capitalizarTitulo(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function capitalizarTexto(texto) {
  if (!texto) return '';

  let t = texto.trim();

  // Alicia siempre con mayúscula
  t = t.replace(/\balicia\b/gi, 'Alicia');

  // Mayúscula inicial absoluta
  t = t.charAt(0).toUpperCase() + t.slice(1);

  // Mayúscula después de punto, signo o salto de línea
  t = t.replace(/([.!?\n]\s*)([a-zñáéíóúü])/g, (_, sep, c) => {
    return sep + c.toUpperCase();
  });

  // Forzar minúscula después de : y ;
  t = t.replace(/([:;]\s*)([A-Za-zñáéíóúü]+)/g, (_, sep, palabra) => {
    if (palabra.toLowerCase().startsWith('alicia')) {
      return sep + 'Alicia';
    }
    return sep + palabra.charAt(0).toLowerCase() + palabra.slice(1);
  });

  return t.replace(/\s{2,}/g, ' ').trim();
}

function verPrediccion(e) {
  e.preventDefault();

  const rol = document.getElementById('rol').value.trim();
  const signoOriginal = document.getElementById('signo').value.trim();
  const signo = normalizarSigno(signoOriginal);

  const resultadoDiv = document.getElementById('resultado');
  const estadoDiv = document.getElementById('estado');
  const mensajeFinalDiv = document.getElementById('mensaje-final');

  if (!rol || !signoOriginal) {
    estadoDiv.textContent = 'Por favor, elegí un rol y un signo.';
    estadoDiv.className = 'status';
    resultadoDiv.innerHTML = '';
    mensajeFinalDiv.style.display = 'none';
    return;
  }

  const contenido = window.textos?.[rol]?.[signo];

  if (!contenido) {
    estadoDiv.textContent = 'Combinación no encontrada.';
    estadoDiv.className = 'status';
    resultadoDiv.innerHTML = 'Todavía no hay predicción para esa combinación.';
    mensajeFinalDiv.style.display = 'none';
    return;
  }

  estadoDiv.textContent = 'Calculando tu psicohoróscopo del 2026…';
  estadoDiv.className = 'status ok';

  setTimeout(() => {
    let rolDisplay = rol.replace('-', ' ');
    rolDisplay = capitalizarTitulo(rolDisplay);

    if (rol === 'tecnico-administrativo') rolDisplay = 'Técnico-administrativo';
    if (rol === 'personal-auxiliar') rolDisplay = 'Personal auxiliar';

    const signoDisplay = capitalizarTitulo(signoOriginal);

    let html = `<h2>${signoDisplay} · ${rolDisplay}</h2>`;

    const titulos = {
      verano: 'Verano (descanso y reencuentro)',
      primer: 'Primer cuatrimestre (el desafío)',
      segundo: 'Segundo cuatrimestre (el aprendizaje)',
      cierre: 'Cierre de año (la cosecha)'
    };

    for (const etapa in titulos) {
      if (contenido[etapa]) {
        html += `
          <p>
            <strong>${titulos[etapa]}:</strong><br>
            ${capitalizarTexto(contenido[etapa])}
          </p>
        `;
      }
    }

    resultadoDiv.innerHTML = html;

    // Mensaje final de comunidad
    const mensajeComunidad = `
      <h2>Porque somos comunidad…</h2>
      <p>En el Alicia nada se construye en soledad. El 2026 será un año exigente, pero también un año donde la comunidad volverá a mostrar su fuerza.</p>
      <p>Cada recorrido importa. Algunos sostienen, otros empujan, otros cuidan, otros abren caminos. Todo eso, junto, hace trama.</p>
      <p>Que este psicohoróscopo sea un recordatorio: lo común no se defiende solo. Se defiende entre muchos.</p>
    `;

    mensajeFinalDiv.innerHTML = mensajeComunidad.replace(
      /<p>(.*?)<\/p>/gs,
      (_, c) => `<p>${capitalizarTexto(c)}</p>`
    );

    mensajeFinalDiv.style.display = 'block';
    estadoDiv.textContent = '¡Listo! Este es tu psicohoróscopo de la esperanza 2026.';

    resultadoDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, 500);
}

document.addEventListener('DOMContentLoaded', () => {
  document
    .getElementById('selector-form')
    .addEventListener('submit', verPrediccion);

  document.getElementById('mensaje-final').style.display = 'none';
});
