// La forma correcta de asegurar que todo esté listo.
// El script se ejecuta después de que el HTML es analizado y los scripts externos cargados.

// LA CORRECCIÓN CLAVE: El CDN de markmap-view crea un objeto global `window.markmap`
// que contiene todo lo que necesitamos.
const { Transformer, Markmap } = window.markmap;

// Referencias a elementos del DOM
const markdownInput = document.getElementById('markdown-input');
const previewSvg = document.getElementById('markmap-preview');
const saveBtn = document.getElementById('save-html-btn');
const optionInputs = document.querySelectorAll('#options-panel input, #options-panel select');

const transformer = new Transformer();
let currentMarkmap;

// Función para obtener las opciones actuales desde los controles
function getCurrentOptions() {
    return {
        duration: document.getElementById('enableAnimation').checked ? 500 : 0,
        initialExpandLevel: parseInt(document.getElementById('initialExpandLevel').value, 10),
        maxWidth: parseInt(document.getElementById('maxWidth').value, 10) || 0,
        colorFreezeLevel: parseInt(document.getElementById('colorFreezeLevel').value, 10),
        pan: document.getElementById('enablePan').checked,
        zoom: document.getElementById('enableZoom').checked,
        spacingHorizontal: parseInt(document.getElementById('spacingHorizontal').value, 10),
        spacingVertical: parseInt(document.getElementById('spacingVertical').value, 10),
        backgroundColor: document.getElementById('bgColor').value,
        style: (id) => `
            ${id} {
                --markmap-line-color: ${document.getElementById('lineColor').value};
                --markmap-node-color: ${document.getElementById('textColor').value};
                --markmap-font-size: ${document.getElementById('fontSize').value}px;
                --markmap-font-family: ${document.getElementById('fontFamily').value};
            }
        `,
    };
}

// Función para renderizar o actualizar el Markmap
function renderMarkmap() {
    const markdown = markdownInput.value;
    const { root } = transformer.transform(markdown);
    const options = getCurrentOptions();

    previewSvg.style.backgroundColor = options.backgroundColor;

    if (currentMarkmap) {
        currentMarkmap.setData(root, options);
    } else {
        currentMarkmap = Markmap.create(previewSvg, options, root);
    }
}

// Función para guardar el HTML final
function handleSave() {
    const markdown = markdownInput.value;
    const options = getCurrentOptions();
    
    // El "autoloader" es la forma más robusta de crear un archivo HTML independiente.
    const template = `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8"><title>Mi Markmap</title>
<style>body,svg{margin:0;padding:0;width:100vw;height:100vh;overflow:hidden;background:${options.backgroundColor}}</style>
</head>
<body>
<script src="https://cdn.jsdelivr.net/npm/markmap-autoloader"></script>
<div class="markmap">
${markdown.replace(/</g, '&lt;').replace(/>/g, '&gt;')}
</div>
<script>
  window.markmap = {
    // Congelamos las opciones en el archivo guardado
    initialExpandLevel: ${options.initialExpandLevel},
    maxWidth: ${options.maxWidth},
    colorFreezeLevel: ${options.colorFreezeLevel},
    style: (id) => \`
        \${id} {
            --markmap-line-color: ${document.getElementById('lineColor').value};
            --markmap-node-color: ${document.getElementById('textColor').value};
            --markmap-font-size: ${document.getElementById('fontSize').value}px;
            --markmap-font-family: ${document.getElementById('fontFamily').value};
        }
    \`,
  }
</script>
</body>
</html>`;

    const blob = new Blob([template], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'mi-mapa-conceptual.html';
    a.click();
    URL.revokeObjectURL(url);
}

// Añadimos los listeners a los eventos
markdownInput.addEventListener('input', renderMarkmap);
optionInputs.forEach(input => input.addEventListener('input', renderMarkmap));
saveBtn.addEventListener('click', handleSave);

// Renderizado inicial al cargar la página
renderMarkmap();