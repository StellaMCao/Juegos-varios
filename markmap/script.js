// Usamos 'load' para asegurar que todas las librerías externas estén 100% cargadas.
window.addEventListener('load', () => {
    // Referencias a los elementos del DOM
    const markdownInput = document.getElementById('markdown-input');
    const preview = document.getElementById('markmap-preview');
    const saveBtn = document.getElementById('save-html-btn');
    const optionInputs = document.querySelectorAll('#options-panel input, #options-panel select');

    // === LA CORRECCIÓN CLAVE ESTÁ AQUÍ ===
    // Ambas herramientas (Transformer y Markmap) vienen del objeto global `window.markmap`
    const { Transformer, Markmap } = window.markmap;
    const transformer = new Transformer();
    let currentMarkmap;

    // Objeto para almacenar las opciones actuales
    let currentOptions = {};

    function renderMarkmap() {
        try {
            const markdown = markdownInput.value;
            const { root } = transformer.transform(markdown);
            
            if (currentMarkmap) {
                currentMarkmap.setData(root, currentOptions);
            } else {
                currentMarkmap = Markmap.create(preview, null, root, currentOptions);
            }
            preview.style.backgroundColor = currentOptions.backgroundColor || '#FFFFFF';
        } catch (e) {
            console.error("Error al renderizar Markmap:", e);
        }
    }

    function updateOptions() {
        currentOptions = {
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
        renderMarkmap();
    }
    
    function handleSave() {
        const markdown = markdownInput.value;
        const escapedMarkdown = markdown.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$/g, '\\$');
        
        const lineColor = document.getElementById('lineColor').value;
        const textColor = document.getElementById('textColor').value;
        const fontSize = document.getElementById('fontSize').value;
        const fontFamily = document.getElementById('fontFamily').value;
        
        const savableOptions = { ...currentOptions };
        delete savableOptions.style;

        const optionsString = JSON.stringify(savableOptions, null, 2);

        const htmlTemplate = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8"><title>Mi Markmap</title>
    <style>body, svg { width: 100vw; height: 100vh; margin: 0; padding: 0; overflow: hidden; }</style>
</head>
<body>
    <svg id="markmap" style="width: 100%; height: 100%;"></svg>
    <script src="https://cdn.jsdelivr.net/npm/d3@6"></script>
    <script src="https://cdn.jsdelivr.net/npm/markmap-lib"></script>
    <script src="https://cdn.jsdelivr.net/npm/markmap-view"></script>
    <script>
    window.addEventListener('load', () => {
        const { Transformer, Markmap } = window.markmap;
        const transformer = new Transformer();
        const markdown = \`${escapedMarkdown}\`;
        const { root } = transformer.transform(markdown);
        const options = ${optionsString};
        options.style = (id) => \`
            \${id} {
                --markmap-line-color: '${lineColor}';
                --markmap-node-color: '${textColor}';
                --markmap-font-size: '${fontSize}px';
                --markmap-font-family: '${fontFamily}';
            }
        \`;
        document.getElementById('markmap').style.backgroundColor = options.backgroundColor || '#FFFFFF';
        Markmap.create('#markmap', null, root, options);
    });
    </script>
</body>
</html>`;

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

    // Renderizado inicial
    updateOptions();
});