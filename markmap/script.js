document.addEventListener('DOMContentLoaded', () => {
    // Referencias a los elementos del DOM
    const markdownInput = document.getElementById('markdown-input');
    const preview = document.getElementById('markmap-preview');
    const saveBtn = document.getElementById('save-html-btn');
    const optionInputs = document.querySelectorAll('#options-panel input, #options-panel select');

    // Instancias de Markmap
    const { Transformer } = markmapLib;
    const { Markmap } = markmapView;
    const transformer = new Transformer();
    let currentMarkmap;

    // Objeto para almacenar las opciones actuales
    let currentOptions = {};

    // Función para renderizar el Markmap
    function renderMarkmap() {
        const markdown = markdownInput.value;
        const { root } = transformer.transform(markdown);
        
        // Limpia el SVG anterior o actualiza datos
        if (currentMarkmap) {
            currentMarkmap.setData(root, currentOptions);
        } else {
            currentMarkmap = Markmap.create(preview, null, root);
        }
        // Aplica el color de fondo al contenedor SVG
        preview.style.backgroundColor = currentOptions.backgroundColor || '#FFFFFF';
    }

    // Función para actualizar las opciones desde los inputs
    function updateOptions() {
        // Lee los valores de todos los controles
        currentOptions = {
            // Opciones de comportamiento
            duration: 500,
            initialExpandLevel: parseInt(document.getElementById('initialExpandLevel').value, 10),
            maxWidth: parseInt(document.getElementById('maxWidth').value, 10) || 0,
            colorFreezeLevel: parseInt(document.getElementById('colorFreezeLevel').value, 10),
            
            // Opciones de interacción
            animation: document.getElementById('enableAnimation').checked,
            pan: document.getElementById('enablePan').checked,
            zoom: document.getElementById('enableZoom').checked,

            // Opciones de diseño
            spacingHorizontal: parseInt(document.getElementById('spacingHorizontal').value, 10),
            spacingVertical: parseInt(document.getElementById('spacingVertical').value, 10),
            backgroundColor: document.getElementById('bgColor').value,

            // Opciones de estilo que se inyectan como CSS
            style: (id) => `
                ${id} {
                    --markmap-line-color: ${document.getElementById('lineColor').value};
                    --markmap-node-color: ${document.getElementById('textColor').value};
                    --markmap-font-size: ${document.getElementById('fontSize').value}px;
                    --markmap-font-family: ${document.getElementById('fontFamily').value};
                }
            `,
        };
        renderMarkmap();
    }

    // Función para manejar el guardado como HTML
    function handleSave() {
        const markdown = markdownInput.value;
        const escapedMarkdown = markdown.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$/g, '\\$');
        
        // Creamos una copia de las opciones para no modificar la original
        const savableOptions = { ...currentOptions };
        
        // La función `style` no se puede serializar a JSON, la quitamos
        delete savableOptions.style;
        const optionsString = JSON.stringify(savableOptions, null, 2);

        // Plantilla HTML para el archivo auto-contenido
        const htmlTemplate = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Mi Markmap</title>
    <style>body, svg { width: 100vw; height: 100vh; margin: 0; padding: 0; overflow: hidden; }</style>
</head>
<body>
    <svg id="markmap" style="width: 100%; height: 100%;"></svg>
    <script src="https://cdn.jsdelivr.net/npm/d3@6"></script>
    <script src="https://cdn.jsdelivr.net/npm/markmap-lib"></script>
    <script src="https://cdn.jsdelivr.net/npm/markmap-view"></script>
    <script>
        const { Transformer } = markmapLib;
        const { Markmap } = markmapView;
        const transformer = new Transformer();

        const markdown = \`${escapedMarkdown}\`;
        const { root } = transformer.transform(markdown);

        // Recreamos las opciones, incluyendo la función de estilo
        const options = ${optionsString};
        options.style = (id) => \`
            \${id} {
                --markmap-line-color: '${document.getElementById('lineColor').value}';
                --markmap-node-color: '${document.getElementById('textColor').value}';
                --markmap-font-size: '${document.getElementById('fontSize').value}px';
                --markmap-font-family: '${document.getElementById('fontFamily').value}';
            }
        \`;

        // Aplicamos el color de fondo
        document.getElementById('markmap').style.backgroundColor = options.backgroundColor || '#FFFFFF';

        Markmap.create('#markmap', null, root, options);
    </script>
</body>
</html>
        `;

        // Crear y descargar el archivo
        const blob = new Blob([htmlTemplate], { type: 'text/html' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'mi-mapa-conceptual.html';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    // Event Listeners
    markdownInput.addEventListener('input', updateOptions);
    optionInputs.forEach(input => input.addEventListener('input', updateOptions));
    saveBtn.addEventListener('click', handleSave);

    // Renderizado inicial al cargar la página
    updateOptions();
});