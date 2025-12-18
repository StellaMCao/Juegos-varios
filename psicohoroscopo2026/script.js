// script.js – Psicohoróscopo de la esperanza 2026
// Usa el objeto 'textos' definido en textos.js

// Normaliza signos quitando acentos y pasando a minúsculas (para coincidir con las claves del objeto)
function normalizarSigno(signo) {
  if (!signo) return '';
  return signo
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')  // quita acentos
    .toLowerCase()
    .trim();
}

// Capitaliza solo la primera letra (ej: "tecnico-administrativo" → "Tecnico-administrativo")
function capitalizarTitulo(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

// Aplica reglas de capitalización al texto de cada sección
function capitalizarTexto(texto) {
  if (!texto) return '';
  let t = texto.trim();

  // "Alicia" siempre en mayúscula inicial
  t = t.replace(/\balicia\b/gi, 'Alicia');

  // Primera letra del texto en mayúscula
  t = t.charAt(0).toUpperCase() + t.slice(1);

  // Mayúscula después de ., !, ?, o salto de línea
  t = t.replace(/([.!?\n]\s*)([a-zñáéíóúü])/g, (_, sep, letra) => sep + letra.toUpperCase());

  // Minúscula después de : o ; (excepto si empieza con "Alicia")
  t = t.replace(/([:;]\s*)([A-ZÑÁÉÍÓÚÜ])/g, (_, sep, letra) => {
    const resto = t.substring(t.indexOf(sep) + sep.length);
    if (resto.toLowerCase().startsWith('alicia')) {
      return sep + 'Alicia';
    }
    return sep + letra.toLowerCase();
  });

  // Limpieza final de espacios múltiples
  return t.replace(/\s{2,}/g, ' ').trim();
}

function verPrediccion(e) {
  e.preventDefault();

  const rolSelect = document.getElementById('rol');
  const signoSelect = document.getElementById('signo');
  const rol = rolSelect.value.trim();
  const signoOriginal = signoSelect.value.trim();
  const signoNormalizado = normalizarSigno(signoOriginal);

  const resultadoDiv = document.getElementById('resultado');
  const estadoDiv = document.getElementById('estado');
  const mensajeFinalDiv = document.getElementById('mensaje-final');

  // Validación básica
  if (!rol || !signoOriginal) {
    estadoDiv.textContent = 'Por favor, elegí un rol y un signo.';
    estadoDiv.className = 'status error';
    resultadoDiv.innerHTML = '';
    mensajeFinalDiv.style.display = 'none';
    return;
  }

  // Accedemos al objeto global 'textos' (definido en textos.js)
  const contenido = window.textos?.[rol]?.[signoNormalizado];

  if (!contenido) {
    estadoDiv.textContent = 'Ups… combinación no encontrada.';
    estadoDiv.className = 'status error';
    resultadoDiv.innerHTML = '<p>Todavía no hay predicción para esa combinación.</p>';
    mensajeFinalDiv.style.display = 'none';
    return;
  }

  // Feedback mientras "calcula"
  estadoDiv.textContent = 'Calculando tu psicohoróscopo del 2026…';
  estadoDiv.className = 'status ok';

  setTimeout(() => {
    // Título con rol y signo bonitos
    let rolDisplay = rol.replace('-', ' ');
    rolDisplay = capitalizarTitulo(rolDisplay);

    // Casos especiales para que queden perfectos
    if (rol === 'tecnico-administrativo') rolDisplay = 'Técnico-administrativo';
    if (rol === 'personal-auxiliar') rolDisplay = 'Personal auxiliar';

    // El signo lo mostramos tal cual eligió el usuario (con mayúscula y acento si tiene)
    const signoDisplay = signoSelect.options[signoSelect.selectedIndex].text;

    let html = `<h2>${signoDisplay} · ${rolDisplay}</h2>`;

    const titulos = {
      verano: 'Verano (descanso y reencuentro)',
      primer: 'Primer cuatrimestre (el desafío)',
      segundo: 'Segundo cuatrimestre (el aprendizaje)',
      cierre: 'Cierre de año (la cosecha)'
    };

    // Construimos el contenido
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

    // Mensaje final de comunidad (mejorado y con capitalización)
    const mensajeComunidad = `
      <h2>Porque somos comunidad…</h2>
      <p>En el Alicia nada se construye en soledad. El 2026 será un año exigente, pero también un año donde la comunidad —esa red silenciosa que une pasillos, grupos de estudio, oficinas y aulas— volverá a mostrar su fuerza.</p>
      <p>Cada signo trae su modo de transitar la esperanza: algunos avanzan, otros sostienen, otros cuidan, otros abren caminos. Pero todos, sin excepción, encuentran sentido cuando se enlazan con los demás.</p>
      <p>Que este psicohoróscopo no sea solo una lectura: que sea un recordatorio de que la unidad nos hace más fuertes, y que lo que uno solo no puede, lo puede el tejido entero.</p>
      <p>Caminemos juntos este 2026: con humor, con lucidez, con fuerza y con la certeza de que cada gesto —aunque parezca pequeño— sostiene la trama común.</p>
    `;

    // Aplicamos capitalización solo al texto dentro de los <p>, dejando el h2 intacto
    mensajeFinalDiv.innerHTML = mensajeComunidad.replace(
      /<p>([\s\S]*?)<\/p>/g,
      (_, contenidoParrafo) => `<p>${capitalizarTexto(contenidoParrafo)}</p>`
    );

    mensajeFinalDiv.style.display = 'block';
    estadoDiv.textContent = '¡Listo! Aquí tenés tu psicohoróscopo de la esperanza 2026.';
    estadoDiv.className = 'status ok';

    // Scroll suave hacia el resultado
    resultadoDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, 600);
}

// Inicialización cuando el DOM está listo
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('selector-form');
  if (form) {
    form.addEventListener('submit', verPrediccion);
  }
  // Aseguramos que el mensaje final esté oculto al cargar
  document.getElementById('mensaje-final').style.display = 'none';
});
