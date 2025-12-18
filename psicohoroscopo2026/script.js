// script.js - Psicohoróscopo de la esperanza 2026 (v7.6 - Mensaje Final limpio y en su propio div)

const textos = {
  docente: {
    aries: {
      verano: `
        El verano llegará como una bocanada de aire fresco que necesitarás para resetearte.
        los primeros días se sentirán extraños; tu cuerpo seguirá en modo "carrera".
        será clave que busques conscientemente bajar la velocidad: caminarás sin apuro, recuperarás la siesta, dejarás que el sol te deshaga un poco la coraza rígida de la docencia.
        aries, siempre lista para la acción, empezará a comprender una verdad fundamental: descansar no es detener la marcha, sino afinar la estrategia para lo que vendrá.
        la clave será el ritmo, no la velocidad: entenderás que para sostener los desafíos del 2026, necesitarás un ritmo más humano y sostenible.
      `,
      primer: `
        El primer cuatrimestre te encontrará entrando al instituto con esa mezcla de entusiasmo y alerta que te caracterizará.
        habrá ruido en el aire, se percibirán movimientos que irán en contra de la autonomía académica y aumentará la sensación de que la estructura se moverá más rápido que el sentido pedagógico.
        vos, que te encenderás rápido, saldrás a decir lo que no cierra, pondrás palabras a lo que otros mastican en silencio.
        el desafío del cuatrimestre será regular la marcha: no cada confusión demandará una embestida, sino que deberás elegir dónde poner el cuerpo para impulsar el debate colectivo en defensa de la educación.
      `,
      segundo: `
        A mitad de año aparecerá algo nuevo: aprenderás a esperar sin pasividad, será pura estrategia.
        descubrirás que no tendrás que estar en cada frente; algunas discusiones se ordenarán cuando dejes que circulen y no monopolices el impulso de la acción.
        aries, sin resignar su potencia, se volverá más táctico y selectivo en sus batallas.
        empezarás a notar que las alianzas de verdad no se armarán en el fragor del conflicto, sino en esos pequeños intercambios cotidianos donde se reconocerá al que tendrás al lado como un par.
      `,
      cierre: `
        El fin de año llegará con el cansancio lógico de quien caminó demasiado rápido, pero también con una claridad que te sorprenderá.
        seleccionarás mejor cuáles serán urgentes y cuáles podrán esperar.
        te descubrirás más compañero, menos impulsivo, más dispuesto a construir algo que no dependerá únicamente de tu energía individual, blindando tu espacio de trabajo de la vorágine externa.
      `
    },
    tauro: {
      verano: `
        El verano te sacará de encima una capa de responsabilidad que cargarás incluso sin darte cuenta.
        los primeros días necesitarás silencio, rutina simple, y contacto con lo que te ordene el cuerpo.
        tauro no empezará un año difícil sin antes asegurarse un piso firme; y este verano se volverá exactamente eso, una base inamovible frente a los movimientos del campo educativo.
        deberás buscar calma y no grandes aventuras.
      `,
      primer: `
        El primer cuatrimestre traerá su propio temblor: cambios institucionales que no se explicarán del todo, reglas nuevas que no contemplarán la realidad cotidiana del aula. se verán intentos de limitar la injerencia de la comunidad en las decisiones clave.
        vos, fiel a vos mismo, no entrarás en la corrida general; te dedicarás a sostener lo que importa de tu práctica.
        tu estabilidad será un punto de apoyo para más de un colega. tu desafío será mantener tu eje sin volverte totalmente resistente a cualquier cambio necesario.
      `,
      segundo: `
        en el segundo tramo del año, algo empezará a volverse más visible: tu modo de trabajar, firme pero sin estridencias, ordenará ambientes que vendrán dispersos.
        tauro tendrá una manera particular de crear comunidad: ofreciendo un mate, sosteniendo un proyecto que parecerá caerse.
        será en esa tenacidad silenciosa donde tu presencia adquirirá un valor profundo y se consolidará tu liderazgo de base, protegiendo los espacios de práctica de injerencias externas.
      `,
      cierre: `
        al llegar a diciembre sentirás el peso lógico del año, pero también una satisfacción silenciosa que no necesitarás exhibir.
        lo que se sostuvo —y muchas cosas se sostendrán— será gracias a personas como vos, que no perderán el eje y que actuarán como ancla.
        te llevarás la certeza de que tu modo, lento y firme, no solo funcionará sino que sostendrá instituciones enteras porque dará confianza en un contexto incierto y hostil a la educación pública.
      `
    },
    géminis: {
      verano: `
        el verano te encontrará con la cabeza hiperactiva: ideas que se superpondrán, curiosidades que te llevarán de un libro a otro.
        disfrutarás de la vorágine mental, pero poco a poco te darás cuenta de que necesitarás filtrar, no por obligación, sino para que la dispersión no se vuelva ruido paralizante.
        tu mejor recarga será la expansión de la curiosidad y la conexión con personas que te nutran intelectualmente.
      `,
      primer: `
        el primer cuatrimestre tendrá la marca típica de tu signo: múltiples frentes, tareas simultáneas, y mensajes por canales distintos.
        serás quien capte rápido lo que se mueva y entienda dónde estará el verdadero problema, aunque nadie lo haya dicho. esa rapidez mental será una herramienta valiosa para detectar los intentos de desfinanciamiento o desarticulación educativa.
        el desafío no será entender o explicar, sino no agotarte explicando lo que otros aún no quieren ver.
      `,
      segundo: `
        en el segundo cuatrimestre, tu habilidad para circular información se volverá clave para la comunidad.
        actuarás como tejido fino: conectarás a quien necesite algo con quien lo pueda resolver, avisarás a tiempo lo que nadie comunicó formalmente.
        en ese intercambio constante, sostendrás más comunidad de lo que imaginarás, actuando como un nodo de coherencia en el sistema ante la falta de claridad oficial.
        la comunicación dejará de ser solo una habilidad para volverse una herramienta de cuidado colectivo, que aliviará tensiones antes de que exploten.
      `,
      cierre: `
        el cierre del año te encontrará con una certeza nueva: comunicar no será solo hablar rápido, sino ordenar el clima emocional y cognitivo del lugar de trabajo.
        este año descubrirás que tu manera de intervenir —rápida, lúcida, movediza— podrá ser un resorte de coherencia y esperanza para muchos colegas.
        el reto para el próximo ciclo será defender ese espacio de calma mental que te permitirá seguir pensando alternativas.
      `
    },
    cáncer: {
      verano: `
        el verano te dará un respiro emocional profundo.
        necesitarás espacios conocidos, afectos confiables y una dosis de quietud que permita recomponer lo que se desgastó durante la vorágine del año lectivo anterior, donde el clima institucional te habrá pesado demasiado.
        los primeros días serán casi de hibernación para procesar ese peso.
        solo después de esa reparación aparecerá el deseo de volver a vincularte con el mundo, pero desde un lugar más protegido y menos permeable.
        aprovecharás este tiempo para establecer límites afectivos que te sostendrán en el 2026.
      `,
      primer: `
        el primer cuatrimestre te golpeará en el costado más sensible: el clima institucional estará cargado, habrá malestar no dicho, y sentirás la tensión de los recortes de presupuesto afectando el día a día.
        cáncer cuidará por naturaleza: escucharás, acompañarás, ofrecerás un espacio seguro a tus colegas.
        el riesgo será el mismo de siempre: quedar agotado por sostener a otros sin pedir sostén para vos, absorbiendo toda la emocionalidad del ambiente.
        tu energía será valiosa; deberás aprender a diferenciar entre empatizar y cargar con la mochila ajena.
      `,
      segundo: `
        a mitad de año aparecerá un aprendizaje que venías postergando: permitirte ser cuidado.
        empezarás a practicar el decir “no puedo”, “hasta acá llego”, “esto necesito que me ayuden” sin culpa.
        lo que antes vivías como una señal de debilidad empezará a sentirse como un acto de verdad y autoafirmación.
        y, curiosamente, eso fortalecerá tus vínculos: cuando vos muestres tu límite de manera honesta, otros entenderán que también pueden tener uno, y la red de contención se ampliará.
      `,
      cierre: `
        el fin de año te encontrará más acompañado y menos victimizado por la sobrecarga.
        no es que el contexto institucional haya mejorado mágicamente, sino que vos habrás aprendido a transitarlo de otro modo, con una estrategia de autocuidado renovada.
        la fórmula será menos sacrificio, más reciprocidad: menos absorberlo todo, más compartir lo que pesa con la gente que te quiere.
        este será el logro más grande de tu 2026: haber fortalecido tu caparazón desde la conexión, no desde el aislamiento.
      `
    },
    leo: {
      verano: `
        el verano te devolverá algo del brillo que habías ido apagando bajo el peso de las responsabilidades rutinarias.
        leo necesitará sentirse vivo, creativo, conectado con su deseo y propósito.
        en enero reaparecerá un impulso que no será de rendimiento, sino de vitalidad pura: cocinar algo rico, bailar un rato, retomar un hobby olvidado.
        ese reencuentro con tu chispa interna será clave; será tu combustible para el resto del año, que te pedirá ser referente sin necesidad de imponer.
        dejarás de lado la necesidad de planificar y simplemente disfrutarás de la luz.
      `,
      primer: `
        el inicio del año traerá un golpe sutil pero fuerte: la falta de reconocimiento explícito por parte de las estructuras superiores.
        tu esfuerzo pasará desapercibido, las horas extras se naturalizarán como parte del contrato, y vos sentirás una mezcla de frustración e injusticia profunda.
        aunque duela, esa pregunta abrirá el camino hacia un nuevo tipo de liderazgo, uno que no dependerá de la validación externa ni de los aplausos del poder de turno.
        aprenderás a ser tu propio público, tu propia fuente de energía.
      `,
      segundo: `
        a medida que avance el año, entenderás que ser un referente no significará brillar en solitario o acaparar la atención.
        empezarás a dar lugar, a habilitar el talento de otros, a sostener en silencio los proyectos de tus colegas y estudiantes que luchan por la autonomía del instituto.
        leo descubrirá que la autoridad más sólida y duradera no se impondrá con gestos grandilocuentes, se transmitirá por presencia, coherencia y generosidad.
        ese cambio de eje, de protagonista a mentor o facilitador, te dará una calma y una satisfacción inesperada.
      `,
      cierre: `
        llegarás a diciembre con menos necesidad de aplauso y más confianza interna en tu propio valor.
        habrás descubierto un modo de brillar que no competirá, que no exigirá validación, que simplemente estará disponible para iluminar a otros en la oscuridad de la coyuntura.
        este año te darás cuenta de que el verdadero éxito será inspirar a los que te rodean a defender la institución.
      `
    },
    virgo: {
      verano: `
        el verano te recibirá con una energía peculiar: al principio querrás ordenar todo, incluso el descanso.
        organizarás listas de libros para leer y planificarás pendientes mentales para no olvidar nada en marzo.
        pero a los pocos días aparecerá una rendición necesaria: no se podrá controlar la marea de la vida.
        cuando finalmente aflojes la estructura mental, algo se acomodará por dentro, encontrando una paz inesperada.
        el descanso dejará de ser una tarea que hay que cumplir y empezará a ser una experiencia regeneradora que te conectará con el cuerpo.
      `,
      primer: `
        el primer cuatrimestre desplegará su clásico catálogo de imperfecciones: errores en las plataformas, pedidos imprecisos de las autoridades, y datos inconsistentes, potenciados por la falta de inversión educativa.
        virgo detectará todo con una rapidez quirúrgica, a veces incluso antes de que el problema exista.
        el riesgo será absorber cada falla como responsabilidad personal y agotarte corrigiendo lo que no te corresponderá.
        el aprendizaje que empezará a insinuarse será: no todo merecerá ser corregido de inmediato, y no todo error exigirá tu intervención directa; deberás saber cuándo soltar el control para sostener la estructura.
      `,
      segundo: `
        con el correr de los meses empezarás a soltar el rigor.
        delegarás tareas, compartirás responsabilidades, aceptarás que cierto desorden funcional no será una catástrofe institucional.
        lo que antes te crispaba —la ineficiencia ajena— ahora lo mirarás con un margen más amplio y compasivo, entendiendo que el contexto excederá a las personas.
        al bajar la autoexigencia, el trabajo se volverá respirable, y vos recuperarás energía para aquello que realmente requiera tu precisión y expertise.
        la verdadera esperanza estará en la eficiencia compartida, no en la perfección individual.
      `,
      cierre: `
        el año terminará sin haber alcanzado la perfección absoluta, y eso ya no te angustiará ni te quitará el sueño.
        habrás aprendido que la calidad no se perderá por aceptar límites de tiempo y recursos, y que cuidarte también será parte esencial del trabajo bien hecho.
        tu gran logro será haber transformado la crítica interna en discernimiento estratégico, utilizando tu agudeza para blindar el funcionamiento pedagógico de las amenazas externas.
      `
    },
    libra: {
      verano: `
        el verano te encontrará buscando equilibrio en todas las áreas de tu vida.
        repasarás mentalmente cómo volver al ruedo sin romper la delicada red de acuerdos que fuiste tejiendo con colegas y directivos.
        el descanso no será aislamiento, sino un profundo reacomodamiento interno.
        necesitarás restaurar la armonía en tu propia balanza antes de volver a mediar en las tensiones institucionales que se agudizarán por la incertidumbre económica.
        aprovecharás para rodearte de belleza y conversaciones estéticas que nutran tu espíritu.
      `,
      primer: `
        el inicio del año traerá tensiones conocidas, pero más intensas.
        aparecerán opiniones encontradas y decisiones poco transparentes, y los climas se enrarecerán rápido.
        libra escuchará con atención, mediará con diplomacia, y traducirá las posturas para que todos se entiendan, manteniendo el diálogo abierto en la comunidad.
        el riesgo será el mismo de siempre: mediar tanto que te corras de tu propio eje.
        el desafío del cuatrimestre será practicar el desacuerdo amable, es decir tu verdad y defender la postura institucional, sin buscar la aprobación total de las esferas de poder.
      `,
      segundo: `
        a mitad de año empezarás a notar el peso real de tu trabajo invisible: muchas situaciones de conflicto no estallarán porque alguien (vos) sostuvo el diálogo en el momento justo.
        tu capacidad de construir puentes mantendrá la convivencia institucional y prevendrá desgastes mayores.
        el ambiente se volverá más liviano a tu alrededor porque ejercerás tu influencia de forma sutil y constante.
        descubrirás que la justicia no siempre será un balance perfecto, sino la posibilidad de que todas las voces, especialmente las disidentes, sean escuchadas y contenidas.
      `,
      cierre: `
        el año terminará sin grandes rupturas en el sistema que vos ayudaste a contener, y en el contexto que te tocó, eso será muchísimo.
        habrás aprendido que cuidar el equilibrio colectivo también requerirá cuidarte a vos en primer lugar.
        ponerte primero no será egoísmo, sino sostenibilidad.
        el 2026 te reafirmará como un pacificador esencial, un estratega de la convivencia que necesita reconocer su propio valor.
      `
    },
    escorpio: {
      verano: `
        el verano será un tiempo de introspección profunda e inevitable.
        necesitarás silencio, profundidad, y tiempo sin la necesidad de dar explicaciones superficiales a nadie.
        descansar para vos no será distraerte con ruido, será procesar todo lo que quedó pendiente a nivel emocional y estratégico, evaluando qué vínculos y qué compromisos laborales merecerán seguir en pie.
        aprovecharás para purificar tu energía y prepararte para las transformaciones del año, que serán internas y externas, sobre todo en lo que respecta a la defensa de los recursos.
      `,
      primer: `
        el primer cuatrimestre no esquivará el conflicto, de hecho, lo atraerá para poder depurarlo.
        aparecerán tensiones reales, juegos de poder soterrados, y decisiones que incomodarán a la mayoría, pero que vos sentirás que será necesario sacar a la luz para sanear la institución.
        escorpio no rodeará el problema: irá directamente al núcleo, aunque eso te exponga a la incomprensión de otros.
        tu manera de ir a la verdad de las cosas será honesta y brutalmente necesaria en un ambiente que tenderá a la simulación y a las medias verdades.
        la clave será elegir aliados que valoren tu lucidez, no tu dureza.
      `,
      segundo: `
        a mitad de año, el sistema empezará a moverse gracias a las preguntas incómodas que vos pusiste sobre la mesa.
        no será una revolución visible, será una depuración interna de procesos que eran ineficientes o injustos.
        tu gestión se volverá más austera y más coherente, sirviendo de ejemplo.
        descubrirás que la fuerza estará en el silencio; no necesitarás gritar para ser escuchado, tu coherencia será tu poder para blindar el instituto.
        te volverás un referente de la ética en la gestión.
      `,
      cierre: `
        el año terminará y nada estará igual que al comienzo.
        habrás perdido algunas certezas que eran ilusiones, pero ganarás profundidad y una visión más aguda de la realidad institucional.
        lo que se transformó en tu vida profesional y tus vínculos era estructural, y vos lo sabías desde el inicio.
        te llevarás la fuerza de haber atravesado la crisis sin negociar tu esencia.
        el próximo año te encontrará anclado en un nuevo tipo de poder personal: el de la coherencia en la defensa de lo público.
      `
    },
    sagitario: {
      verano: `
        el verano activará tu necesidad de horizonte y de sentido.
        leerás, pensarás, e imaginarás otros modos de estar en la educación; te negarás a que el año que empiece sea solo supervivencia o repetición de formatos agotados.
        necesitarás sentir que habrá una meta más alta, un propósito pedagógico que trascenderá la burocracia.
        tu descanso será mental; te recargarás expandiendo tus conocimientos y soñando con el futuro.
        aprovecharás para conectar con filosofías o ideas que te den un marco de esperanza frente al pesimismo reinante.
      `,
      primer: `
        el primer cuatrimestre apretará con calendarios rígidos y exigencias de corto plazo, lo que generará fricción con tu necesidad de amplitud.
        vos seguirás mirando más allá del día a día, buscando el sentido de cada tarea y la justificación pedagógica de las medidas que se impongan.
        sagitario necesitará propósito para sostener el esfuerzo, y cuando ese sentido flaquee, aparecerá el cansancio.
        no te dispersarás en discusiones menores; recordarás tu visión y la usarás como brújula para inspirar a tus colegas.
        tu energía estará en la inspiración, no en la rutina.
      `,
      segundo: `
        a mitad de año, compartirás ideas, abrirás debates inesperados, y propondrás miradas que oxigenarán la conversación institucional que venía estancada.
        no todo se implementará de inmediato, pero lograrás inyectar una dosis de optimismo y posibilidad en el ambiente.
        ese movimiento, esa apertura de mente, renovará la energía colectiva de tus colegas.
        descubrirás que tu rol será el del visionario, el que recordará por qué están todos ahí, defendiendo la educación pública y su misión.
        tu entusiasmo se volverá contagioso y movilizará recursos que parecían dormidos.
      `,
      cierre: `
        el año terminará con fatiga física, pero no con vacío existencial.
        el sentido seguirá ahí, intacto y fortalecido por las acciones que emprendiste.
        tal vez no lograste la gran reforma educativa que soñabas, pero sembraste preguntas que van a germinar en el próximo ciclo.
        para vos, que el propósito se mantenga vivo será imprescindible; será el verdadero éxito.
        te irás sabiendo que inspiraste a otros a ver un poco más lejos.
      `
    },
    capricornio: {
      verano: `
        incluso en verano te costará soltar la responsabilidad: será como un interruptor que no podrás apagar del todo.
        tu mente seguirá repasando pendientes y planificando el inicio, porque tu seguridad residirá en la estructura.
        descansar de verdad implicará aprender a confiar en que, por un rato, no todo dependerá de tu control y supervisión.
        tu mayor tarea estival será delegar mentalmente; deberás dejar que el mundo gire sin que vos lo impulses.
        conectarás con tu cuerpo; el descanso físico será la mejor inversión para tu rendimiento a largo plazo en la defensa de la estabilidad institucional.
      `,
      primer: `
        el inicio del año te colocará, una vez más, en el lugar de sostén y de columna vertebral de la institución.
        estructuras, organización, continuidad; muchas cosas funcionarán porque alguien las mantendrá en marcha, y muchas veces ese alguien serás vos, en silencio.
        tu seriedad y compromiso serán pilares frente a la desorganización que buscarán imponer los ataques externos.
        el riesgo será normalizar la sobrecarga.
        trabajarás en la delegación activa: empezarás a formar a otros para que puedan tomar parte de tu carga, no como un riesgo, sino como una necesidad estratégica para blindar el sistema.
      `,
      segundo: `
        a mitad de año el peso se hará sentir con fuerza, y por primera vez, la resistencia no será la respuesta.
        capricornio empezará a reconocer que sostener el sistema no significará hacerlo en solitario.
        pedir ayuda se volverá una posibilidad real, no una señal de debilidad o fracaso personal.
        descubrirás la eficiencia en la colaboración; te sorprenderás al ver que el trabajo compartido se hará más rápido y mejor, y que no por eso perderás autoridad.
        este será tu gran cambio: transformar la responsabilidad solitaria en un liderazgo distribuido que fortalecerá las bases del profesorado.
      `,
      cierre: `
        el año terminará gracias al trabajo silencioso y constante de quienes cargaron más de lo justo.
        esta vez te irás reconociendo en esa tarea, pero sin romantizar el desgaste o la autoexigencia extrema.
        entenderás que tu valor no estará solo en lo que produzcas, sino en tu capacidad para construir estructuras duraderas que contengan a la comunidad.
        te llevarás la lección de que el verdadero éxito será alcanzar la meta sin haber sacrificado tu bienestar en el camino de la defensa institucional.
      `
    },
    acuario: {
      verano: `
        el verano será un laboratorio mental: un espacio donde pensarás alternativas, imaginarás cambios radicales, y cuestionarás lo dado sin tener que justificarlo.
        la pausa alimentará ideas que no encajarán en los formularios ni en los diseños curriculares oficiales.
        tu energía se recargará en la desconexión social y en el pensamiento libre; será el momento ideal para leer temas fuera de tu área o sumergirte en proyectos creativos personales.
        mantendrás esas ideas frescas; serán tu arsenal para enfrentar la rigidez del sistema y las imposiciones externas en marzo.
      `,
      primer: `
        el primer cuatrimestre te enfrentará a normas rígidas y a lógicas que no contemplarán la diversidad real del trabajo educativo y de las personas.
        acuario sentirá el roce constante entre lo posible (lo que la teoría y el deseo permiten) y lo permitido (lo que la burocracia impone).
        podrás sentir frustración, pero tu rol será agitar las preguntas difíciles que cuestionen los recortes de autonomía.
        evitarás el cinismo y canalizarás esa energía en buscar soluciones ingeniosas y no convencionales que defiendan el espacio institucional.
        el valor de tu signo será ser la voz del cambio y la innovación.
      `,
      segundo: `
        a mitad de año, las redes humanas se volverán tu refugio y tu motor.
        ideas que no prosperarán oficialmente o que fueron rechazadas en las reuniones encontrarán circulación y apoyo en conversaciones laterales con colegas afines, generando focos de resistencia activa.
        lo nuevo no desaparecerá, se diseminará por canales informales que vos ayudarás a crear y sostener.
        descubrirás la potencia de la comunidad y del trabajo en red; no tendrás que convencer a todos, solo a los que estén listos para la próxima etapa.
        la esperanza florecerá en los márgenes, y vos serás el jardinero.
      `,
      cierre: `
        el año terminará sin una revolución visible, pero con muchas semillas plantadas en la cabeza de tus colegas y estudiantes.
        tu influencia habrá sido silenciosa pero profunda, moviendo los cimientos de lo que parecía inamovible.
        un cambio de mentalidad precede siempre al cambio de estructura.
        te irás con la certeza de que tu visión de futuro ya estará circulando, y eso será un gran logro acuariano en la defensa del sentido de la educación pública.
      `
    },
    piscis: {
      verano: `
        el verano te volverá permeable y sensible a los climas emocionales de tu entorno.
        necesitarás pausa, retiro, y mucho contacto con la naturaleza o el arte para no saturarte con la energía residual del año anterior, que habrá sido pesada.
        el primer paso será desintoxicarte de las emociones ajenas que absorbiste durante el ciclo anterior.
        buscarás actividades que te permitan la evasión creativa, como la música, el cine, o la escritura; será la mejor forma de purificación.
        la recarga será psíquica, no física.
      `,
      primer: `
        el inicio del año podrá ser abrumador si no pones límites claros.
        absorberás los climas, las exigencias, y los estados de ánimo que no siempre serán tuyos, lo que te drenará la energía vital. sentirás la angustia de los demás colegas por las incertidumbres económicas y la fragilidad del sistema.
        al comienzo, te costará poner límites por temor a ser insensible o a alejar a otros.
        el desafío será aprender que podrás ser empático sin sacrificar tu propio espacio.
        tu sensibilidad deberá ser una brújula, no una esponja.
      `,
      segundo: `
        a mitad de año aprenderás a compartir lo que sientas, a verbalizar la carga emocional.
        poner palabras a lo difuso ordenará tu mundo interior, y delimitar tu espacio protegerá tu energía.
        descubrirás que no todo tendrá que pasar por dentro, y que al hablar, tus compañeros no te juzgarán, sino que te ofrecerán contención.
        esta práctica de poner límites de forma suave será tu gran logro del cuatrimestre, creando un espacio de refugio y verdad compartida.
        la conexión sana te dará un nuevo anclaje.
      `,
      cierre: `
        el fin de año te encontrará más acompañado y menos victimizado por la sobrecarga.
        no es que el contexto institucional haya mejorado mágicamente, sino que vos habrás aprendido a transitarlo de otro modo, con una estrategia de autocuidado renovada.
        la fórmula será menos sacrificio, más reciprocidad: menos absorberlo todo, más compartir lo que pesa con la gente que te quiere.
        este será el logro más grande de tu 2026: haber fortalecido tu caparazón desde la conexión, no desde el aislamiento.
      `
    }
  },
 
"personal-auxiliar": {
  aries: {
    verano: `
      El verano te va a encontrar un poco cansado, pero con esa sensación satisfecha de haber sostenido mucho durante el año anterior.
      venís de un período intenso donde resolviste rápido, estuviste siempre disponible y apagaste incendios chicos y grandes.
      ahora este tiempo te va a pedir bajar la urgencia, cambiar el ritmo y dejar de correr tanto.
      no se trata de no hacer nada, sino de hacer las cosas sin presión, sin el reloj encima, recuperando fuerza y energía para todo lo que viene después.
    `,
    primer: `
      El inicio del año va a ser bastante movido y con cierto desorden inevitable.
      van a surgir pedidos de último momento, tareas imprevistas y situaciones que requieren respuesta rápida.
      tu capacidad para actuar con agilidad va a ser muy valiosa y te va a destacar.
      el desafío principal va a ser no cargar con todo solo y aprender a decir con claridad hasta dónde sí y hasta dónde no.
    `,
    segundo: `
      A mitad de año tu trabajo y tu presencia se van a notar mucho más de lo que imaginás.
      muchas cosas van a funcionar bien simplemente porque vos estás ahí, poniendo orden y practicidad.
      vas a encontrar formas simples y efectivas de organizar el día a día y aliviar la carga de los demás.
      el equipo va a ser fundamental para mantener el ritmo sin que te agotes por completo.
    `,
    cierre: `
      El año va a terminar con algo de cansancio acumulado, pero también con un orgullo profundo y justificado.
      todo lo que hiciste en lo cotidiano, aunque no siempre visible, va a haber sido fundamental para que muchas cosas salieran bien.
      vas a cerrar el año sabiendo que tu tarea sostuvo mucho más de lo que los demás perciben.
    `
  },

  tauro: {
    verano: `
      El verano te va a permitir recuperar tu propio ritmo natural, ese que a veces perdés en la rutina.
      vas a necesitar días más previsibles, descanso de verdad y una buena dosis de calma.
      no va a hacer falta estar pensando en todo lo que viene más adelante.
      este período va a servir para volver a sentir estabilidad interna y preparar una base firme y sólida para el resto del año.
    `,
    primer: `
      El inicio del año va a traer algunos cambios repentinos y exigencias que te van a pedir apuro.
      muchas cosas no te van a terminar de convencer o cerrar del todo.
      tu mayor fortaleza va a ser sostener lo que ya funciona bien y no dejar que se desarme.
      el desafío va a consistir en no dejarte arrastrar por movimientos o decisiones innecesarios.
    `,
    segundo: `
      A mitad de año tu manera tranquila y constante de trabajar va a ordenar el entorno de forma natural.
      los demás van a apoyarse en tu constancia y en esa tranquilidad que transmitís.
      sin necesidad de decir demasiado, vas a sostener el funcionamiento diario y hacer que todo fluya mejor.
    `,
    cierre: `
      El año va a terminar con la satisfacción tranquila del trabajo bien cumplido.
      tu constancia va a haber actuado como un sostén silencioso pero esencial.
      vas a cerrar sabiendo que tu forma de estar y de hacer fue realmente importante para el equipo.
    `
  },

  géminis: {
    verano: `
      El verano te va a dar la distancia necesaria para pensar con mucha más claridad.
      con menos ruido y obligaciones diarias, vas a entender mejor qué cosas se traban y por qué sucede eso.
      descansar, para vos, va a significar cambiar de foco: leer, conversar, mover ideas y ordenarlas mentalmente.
      esa claridad que ganes ahora te va a servir muchísimo para todo lo que viene después.
    `,
    primer: `
      El inicio del año va a ser cambiante, muy activo y lleno de interacciones.
      vas a estar en contacto con muchas personas diferentes y situaciones variadas.
      tu capacidad para comunicar claro y rápido va a ser absolutamente central.
      el desafío va a ser no convertirte en la única persona que conecta todo y resuelve los cruces.
    `,
    segundo: `
      A mitad de año tu forma de comunicar va a prevenir y evitar varios conflictos.
      avisar a tiempo, explicar bien las cosas y conectar información va a marcar una gran diferencia.
      tu trabajo diario va a ayudar a que los demás puedan desempeñarse mejor y con menos obstáculos.
    `,
    cierre: `
      El año va a terminar con la sensación de haber ordenado muchas cosas que antes estaban dispersas.
      aunque no siempre se vea o se reconozca, tu claridad mental va a haber sido clave en varios momentos.
      vas a cerrar con la certeza de que comunicar bien también es una forma de cuidar al equipo.
    `
  },

  cáncer: {
    verano: `
      El verano te va a pedir un descanso más emocional que físico.
      vas a necesitar bajar la guardia, estar con gente de mucha confianza y permitirte recibir.
      este tiempo te va a ayudar a recuperar el equilibrio interno que a veces perdés.
      recordá que no todo se sostiene solo dando; también se sostiene recibiendo apoyo y cariño.
    `,
    primer: `
      El inicio del año te va a encontrar acompañando y conteniendo a muchas personas.
      los demás se van a apoyar bastante en vos, tanto emocional como prácticamente.
      el desafío principal va a ser no absorber todo ese peso y empezar a poner límites que te cuiden.
    `,
    segundo: `
      A mitad de año esos límites que empezaste a marcar van a comenzar a funcionar de verdad.
      vas a poder estar presente y ayudar sin agotarte tanto.
      tu manera sensible de estar va a cuidar los vínculos y mejorar el clima general de trabajo.
    `,
    cierre: `
      El año va a terminar con un equilibrio mucho mayor del que tenías al empezar.
      vas a sentir menos desgaste emocional y físico.
      vas a cerrar sabiendo que cuidarte a vos mismo también formó parte importante de tu aporte al equipo.
    `
  },

  leo: {
    verano: `
      El verano te va a devolver algo de disfrute personal que quizás habías dejado de lado.
      vas a necesitar reconectar con lo que realmente te gusta y te hace sentir bien.
      descansar, para vos, va a ser volver a sentir ganas y entusiasmo por las cosas simples.
    `,
    primer: `
      El inicio del año va a exigir mucha presencia, compromiso y esfuerzo continuo.
      muchas veces tu trabajo no va a recibir un reconocimiento directo o visible.
      el desafío va a ser no desanimarte por eso y seguir adelante a tu manera, con tu estilo.
    `,
    segundo: `
      A mitad de año tu ejemplo personal va a empezar a ordenar y guiar a los demás.
      otros se van a apoyar en tu forma de hacer las cosas y en tu energía.
      vas a sostener mucho desde el hacer concreto, más que desde las palabras.
    `,
    cierre: `
      El año va a terminar con una tranquilidad interna bastante mayor.
      vas a saber en profundidad lo que valió cada esfuerzo que pusiste.
      vas a cerrar con una satisfacción personal, aunque sea silenciosa y solo tuya.
    `
  },

  virgo: {
    verano: `
      El verano va a ayudarte a aflojar un poco esa exigencia tan alta que suele tener.
      no todo va a necesitar estar perfecto o controlado al 100%.
      descansar va a significar permitirte soltar algo de control y aceptar lo imperfecto.
    `,
    primer: `
      El inicio del año va a traer errores ajenos, desorden y detalles que fallan.
      vos, como siempre, los vas a notar rápido y con precisión.
      el desafío va a ser no cargar con la responsabilidad de arreglar todo como si fuera solo tuyo.
    `,
    segundo: `
      A mitad de año vas a empezar a compartir tareas y a delegar más.
      eso va a aliviar tu carga y, al mismo tiempo, mejorar el trabajo general.
      el equipo va a funcionar mejor cuando no intentes hacerlo absolutamente todo solo.
    `,
    cierre: `
      El año va a terminar con bastante menos tensión de la habitual.
      la calidad del trabajo se va a mantener sin que tengas que agotarte tanto.
      vas a cerrar con un aprendizaje valioso sobre tus propios límites y cómo respetarlos.
    `
  },

  libra: {
    verano: `
      El verano te va a ayudar a recuperar el equilibrio que a veces perdés en la vorágine diaria.
      vas a necesitar calma y silencio para volver a centrarte y ordenarte por dentro.
      este tiempo te va a ser sanador y te va a dejar más firme.
    `,
    primer: `
      El inicio del año va a traer algunos roces, tensiones y desacuerdos en el entorno.
      tu forma natural de mediar y buscar armonía va a ayudar a ordenar el clima.
      el desafío va a ser no desaparecer o diluirte en el intento de mantener la paz a cualquier precio.
    `,
    segundo: `
      A mitad de año tu presencia calma va a suavizar varios conflictos potenciales.
      vas a sostener el diálogo abierto cuando más haga falta.
      eso va a ser clave para que el equipo siga unido y funcionando bien.
    `,
    cierre: `
      El año va a terminar sin grandes rupturas ni conflictos graves.
      tu trabajo silencioso de mediación va a haber sostenido la buena convivencia.
      vas a cerrar sabiendo que ese aporte, aunque no siempre visible, valió mucho.
    `
  },

  escorpio: {
    verano: `
      El verano va a ser un tiempo ideal de limpieza interna y externa.
      vas a soltar tareas, responsabilidades y formas de hacer que ya no te sirven ni tienen sentido.
      descansar va a significar recuperar coherencia entre lo que hacés y lo que realmente querés.
    `,
    primer: `
      El inicio del año va a poner al descubierto algunas tensiones reales que estaban ocultas.
      vos las vas a percibir con mucha claridad y profundidad.
      el desafío va a ser elegir con cuidado dónde y cómo involucrarte.
    `,
    segundo: `
      A mitad de año tu coherencia personal va a pesar más que cualquier discurso.
      no vas a necesitar imponerte ni alzar la voz.
      simplemente tu claridad y tu forma de actuar van a ordenar lo que esté desajustado.
    `,
    cierre: `
      El año va a terminar con bastante menos desgaste emocional del habitual.
      vas a cerrar con una sensación profunda de verdad, alivio y autenticidad.
    `
  },

  sagitario: {
    verano: `
      El verano te va a abrir un poco el horizonte y te va a dar perspectiva.
      vas a necesitar encontrar sentido en lo que hacés día a día.
      descansar va a ser reconectar con el “porqué” más grande de tu trabajo.
    `,
    primer: `
      El inicio del año te va a llevar de vuelta a lo concreto y al detalle diario.
      los pequeños asuntos van a pesar más de lo que esperabas.
      el desafío va a ser encontrar sentido y motivación incluso en lo más rutinario.
    `,
    segundo: `
      A mitad de año tu entusiasmo natural va a levantar el ánimo del entorno.
      vas a contagiar ganas y energía positiva justo cuando más haga falta.
    `,
    cierre: `
      El año va a terminar con algo de cansancio, sí, pero también con sentido pleno.
      vas a cerrar sabiendo que tu energía y tu visión sumaron mucho al equipo.
    `
  },

  capricornio: {
    verano: `
      Incluso en verano te va a costar un poco soltar del todo las responsabilidades.
      descansar va a implicar aprender a delegar más y a confiar en que los demás pueden hacerse cargo.
    `,
    primer: `
      El inicio del año te va a posicionar como el sostén principal de varias cosas.
      mucho va a funcionar bien simplemente porque vos estás ahí, tomando las riendas.
      el desafío va a ser no intentar hacerlo absolutamente todo solo.
    `,
    segundo: `
      A mitad de año vas a empezar a compartir la carga de manera más efectiva.
      el trabajo se va a volver más llevadero y sostenible para vos.
    `,
    cierre: `
      El año va a terminar sin que te hayas vaciado por completo.
      vas a cerrar entendiendo que cuidarte y distribuir responsabilidades también forma parte del buen trabajo.
    `
  },

  acuario: {
    verano: `
      El verano va a traer ideas nuevas y frescas a tu cabeza.
      vas a empezar a imaginar otras formas de hacer las cosas, más eficientes o innovadoras.
      descansar va a ser dejar que esas ideas respiren y tomen forma sin apuro.
    `,
    primer: `
      El inicio del año va a chocar con ciertas rigideces y estructuras viejas.
      vas a buscar caminos alternativos y soluciones distintas para resolver problemas.
      el desafío va a ser no frustrarte demasiado ante la resistencia inicial.
    `,
    segundo: `
      A mitad de año algunas de esas ideas van a empezar a funcionar en la práctica.
      los cambios van a ser pequeños y graduales, pero reales y concretos.
    `,
    cierre: `
      El año va a terminar con mejoras tangibles en el día a día.
      aunque no siempre se noten a simple vista o reciban reconocimiento, esas mejoras van a estar ahí.
    `
  },

  piscis: {
    verano: `
      El verano te va a pedir una pausa real y profunda.
      vas a necesitar menos ruido externo y más calma interna.
      este tiempo te va a ayudar a soltar carga emocional acumulada y a recargar energías.
    `,
    primer: `
      El inicio del año puede llegar a desbordarte un poco si no tenés cuidado.
      vas a aprender a poner límites claros y sin sentir culpa por hacerlo.
    `,
    segundo: `
      A mitad de año hablar abiertamente va a ordenar muchas cosas.
      compartir lo que sentís y lo que necesitás va a aliviar tensiones y mejorar el clima.
    `,
    cierre: `
      El año va a terminar con mucha más liviandad de la que empezaste.
      vas a cerrar sabiendo que tu sensibilidad sigue siendo un valor importante y un aporte único.
    `
  }
},
"tecnico-administrativo": {
    aries: {
      verano: "El verano será tu tregua necesaria tras un diciembre de actas y cierres frenéticos. Tu cuerpo pedirá desconexión total de las pantallas. Aprovecharás para resetear la paciencia; Aries necesita aire libre para no empezar marzo con los cables pelados. Descansar será tu mejor inversión para no estallar ante el primer pedido fuera de término en el regreso.",
      primer: "El inicio del año traerá un aluvión de trámites y sistemas que no funcionan como deberían. Serás el primero en detectar las fallas del sistema informático y querrás resolverlo todo ya. El desafío será no pelearte con la burocracia ministerial; elegí tus batallas para no agotar tu fuego en formularios que no dependen de vos.",
      segundo: "A mitad de año, tu agilidad para resolver lo que otros traban te hará ganar el respeto de los pasillos. Lograrás ordenar procesos que venían lentos. Tu liderazgo será práctico: menos queja y más solución. Empezarás a trabajar en red con otras oficinas para blindar el funcionamiento administrativo del instituto.",
      cierre: "Llegarás a diciembre con la satisfacción de haber mantenido la máquina andando. Habrás aprendido que tu impulso es valioso cuando se organiza. Cerrarás el año sabiendo que, sin tu gestión, el Alicia se detiene. Te vas a descansar con la frente en alto y el sistema (finalmente) bajo control."
    },
    tauro: {
      verano: "El verano será tu refugio de previsibilidad. Necesitarás orden en tu casa y en tus días para compensar el caos de expedientes del año anterior. No querrás saber nada de cambios de último momento. Tu descanso será lento, físico y muy merecido, construyendo la paciencia que marzo te va a exigir.",
      primer: "El primer cuatrimestre traerá normativas nuevas que te obligarán a cambiar tu forma de trabajar. Te generará resistencia, pero tu tenacidad será tu mejor aliada. Mientras todos se desesperan por la incertidumbre, vos te mantendrás firme en tu escritorio, garantizando que lo importante se siga registrando.",
      segundo: "A mitad de año, tu estabilidad será el ancla de la oficina. Los docentes y estudiantes buscarán tu mirada tranquila cuando el sistema colapse. Descubrirás que tu ritmo, aunque parezca lento, es el único que llega al final sin errores. Tu constancia sostendrá la continuidad administrativa en un contexto hostil.",
      cierre: "Cerrarás el año habiendo demostrado que la prolijidad es una forma de resistencia. No se te escapó ni un legajo. Te irás con la paz de quien sabe que su trabajo es el suelo firme sobre el que camina toda la institución. El 2026 te consagra como el pilar silencioso del Alicia."
    },
    géminis: {
      verano: "Tu verano será una red de conversaciones y lecturas livianas. Necesitarás limpiar la cabeza de códigos, resoluciones y normativas densas. Te mantendrás en contacto con tus compañeros, intercambiando anécdotas del año que pasó, pero buscando aire nuevo en temas que nada tengan que ver con el trabajo.",
      primer: "El regreso será un festival de consultas. Serás el que mejor explique los nuevos procedimientos porque los entendés antes que nadie. El desafío será no dispersarte en mil ventanillas a la vez. Tu rapidez mental será clave para traducir la jerga ministerial a un lenguaje humano que los estudiantes agradezcan.",
      segundo: "A mitad de año, serás el puente de información entre las distintas áreas. Tu oficina será un nodo de comunicación donde se resuelven malentendidos antes de que lleguen a mayores. Descubrirás que comunicar bien es tan importante como cargar datos. Tu habilidad para circular la información evitará conflictos institucionales.",
      cierre: "Terminarás el año habiendo ordenado el caos a través de la palabra. Lograste que la oficina sea un lugar de encuentro y claridad. Te irás sabiendo que tu lucidez mental fue el lubricante que permitió que la pesada maquinaria administrativa del Alicia no se trabara en los momentos críticos."
    },
    cáncer: {
      verano: "El verano te pedirá nido y silencio. Te costará soltar la preocupación por ese estudiante que no terminó el trámite o el colega que quedó en la cuerda floja. Necesitarás que te cuiden a vos para recuperar la energía que pusiste en sostener el clima de la oficina. Tu descanso será emocional y reparador.",
      primer: "El inicio del año te pondrá en la primera línea de la angustia ajena: recibirás a estudiantes y docentes preocupados por la crisis. Tu empatía será un refugio, pero el desafío será no llevarte esos problemas a tu casa. Aprenderás a poner un límite protector en tu escritorio para que tu sensibilidad no se convierta en agotamiento.",
      segundo: "A mitad de año, transformarás la oficina en un espacio más humano. Un mate compartido, una escucha atenta o una palabra de aliento cambiarán el clima de trabajo. Lograrás que la administración no sea solo papeles, sino cuidado colectivo. Tu presencia será la que humanice la burocracia en tiempos difíciles.",
      cierre: "Llegarás a diciembre cansado pero con el corazón lleno de agradecimientos. Habrás aprendido que tu rol es cuidar la trama humana del instituto. Te irás con la certeza de que en el Alicia, sos mucho más que un cargo administrativo: sos el alma que hace que el sistema no sea indiferente al dolor del otro."
    },
    leo: {
      verano: "El verano te devolverá el brillo personal fuera del mostrador. Necesitarás actividades que te hagan sentir protagonista de tu vida y no un eslabón más de la cadena. Recargarás tu energía con disfrute y sol, preparándote para volver a ser el referente que la oficina necesita para no desanimarse.",
      primer: "En el regreso, sentirás la falta de reconocimiento por las horas extras y el esfuerzo de ordenar el desorden ajeno. El desafío será seguir trabajando con excelencia sin depender del aplauso ministerial. Aprenderás a liderar desde tu puesto, organizando al equipo con tu energía arrolladora aunque nadie te lo pida formalmente.",
      segundo: "A mitad de año, tu confianza contagiará a tus compañeros. Serás el que proponga mejoras en la atención o nuevas formas de organizar el espacio físico. Tu autoridad natural se impondrá en los momentos de caos, dando seguridad a los que se acercan con dudas. Tu brillo será el que ilumine la oficina cuando las noticias externas sean oscuras.",
      cierre: "Cerrarás el año sabiendo que tu ejemplo movilizó a los demás. No necesitaste un cargo jerárquico para ser el líder que la administración necesitaba. Te irás con la satisfacción de haber transformado tu puesto de trabajo en un lugar de dignidad y fuerza. El Alicia te reconoce como su motor vital."
    },
    virgo: {
      verano: "Tu descanso será el orden: finalmente ordenarás tus carpetas personales, tu casa y tu mente. Te costará no pensar en cómo mejorar el sistema de archivos del instituto mientras estás en la playa. El desafío será permitirte el ocio sin sentir que estás perdiendo el tiempo. Tu mente necesita vacaciones de la precisión.",
      primer: "El primer cuatrimestre será un catálogo de errores ajenos que vos tendrás que subsanar. Detectarás inconsistencias en las actas y datos mal cargados antes que nadie. El aprendizaje será no cargar con la culpa de la ineficiencia del sistema; hacé tu parte con excelencia y soltá el resto para no quemarte en marzo.",
      segundo: "A mitad de año, tu meticulosidad salvará a la institución de algún error administrativo grave. Te volverás el referente de consulta para lo difícil. Tu método se volverá el estándar de la oficina, mejorando la calidad de vida de todos. Descubrirás que la prolijidad es la mejor defensa contra el desfinanciamiento y el caos.",
      cierre: "Terminarás el año con las planillas en verde y todo archivado donde corresponde. Habrás aprendido a delegar lo que no requiere tu precisión quirúrgica. Te irás con la paz mental de quien no dejó ni un cabo suelto. Tu labor técnica fue el escudo que protegió los derechos de estudiantes y docentes en el 2026."
    },
    libra: {
      verano: "El verano será para recuperar la armonía en tus vínculos personales. Después de un año mediando entre el mal humor de la gente y la rigidez de las normas, necesitarás belleza y calma. Tu descanso será social pero tranquilo, rodeándote de personas que te den paz y no te pidan favores administrativos.",
      primer: "El regreso te encontrará suavizando tensiones en la ventanilla. Serás la cara amable que calme a los que llegan con reclamos justos pero exaltados. El desafío será no quedar en el medio de los conflictos entre áreas. Aprenderás a decir que no con una sonrisa, manteniendo el equilibrio sin sacrificar tu salud mental.",
      segundo: "A mitad de año, tu oficina se volverá el lugar de los acuerdos. Lograrás que el trabajo en equipo fluya gracias a tu capacidad de ver todas las posturas. Tu diplomacia será clave para mantener la convivencia institucional frente a las presiones externas. Serás el arquitecto de un clima laboral sano en medio de la tormenta.",
      cierre: "Llegarás a diciembre habiendo evitado mil incendios emocionales. Tu trabajo invisible de pacificación permitió que la oficina no fuera un campo de batalla. Te irás con la satisfacción de quien sabe que la justicia también se construye en el trato diario. El Alicia te agradece por ser su punto de equilibrio."
    },
    escorpio: {
      verano: "Tu verano será de silencio y purificación. Necesitarás sacarte de encima la carga de los secretos y las tensiones que circulan en las oficinas de gestión. Tu descanso será una inmersión en vos mismo, evaluando qué batallas valen la pena seguir dando y cuáles es mejor soltar para tu propia salud.",
      primer: "El inicio del año te mostrará la realidad cruda de la institución, sin filtros. Serás el primero en percibir las movidas políticas y los cambios de poder soterrados. El desafío será usar esa información para proteger a tus compañeros y no para el enroscarte en conflictos inútiles. Tu lucidez será tu poder de defensa.",
      segundo: "A mitad de año, tu compromiso con la verdad y la transparencia administrativa se volverá innegociable. No dejarás que se cometa ninguna injusticia en los legajos bajo tu guardia. Te volverás un referente ético dentro de la administración, alguien a quien no se puede engañar. Tu fuerza será el blindaje moral de la oficina.",
      cierre: "Cerrarás el año habiendo transformado profundamente tu espacio de trabajo. Nada de lo que estaba mal quedó oculto. Te irás con la intensidad intacta, sabiendo que fuiste fiel a vos mismo y que tu paso por la administración dejó una huella de honestidad brutal. El 2026 te encuentra anclado en tu propia verdad."
    },
    sagitario: {
      verano: "El verano será tu válvula de escape: viajarás, caminarás o leerás algo que te saque de la cuadratura de la oficina. Necesitarás recuperar la visión de futuro que la rutina burocrática te quita. Tu descanso será mental y expansivo, soñando con nuevas formas de gestionar que no sean tan pesadas.",
      primer: "Al volver, los trámites repetitivos te pesarán más que nunca. El desafío será encontrarle el sentido mayor a cada papel: entender que detrás de ese formulario hay un proyecto de vida. Tu entusiasmo ayudará a tus compañeros a no caer en el desánimo. Traerás humor y perspectiva cuando el sistema se ponga denso.",
      segundo: "A mitad de año, propondrás cambios en la forma de atender o de organizar la información que agilizarán todo. Tu visión optimista abrirá puertas que parecían cerradas. Lograrás contagiar alegría incluso en las reuniones de equipo más difíciles. Tu rol será recordarles a todos por qué están ahí trabajando por la educación pública.",
      cierre: "Terminarás el año con fatiga física pero con el espíritu libre. Habrás logrado que la oficina no fuera una cárcel de papeles, sino un espacio de posibilidad. Te irás con la certeza de que tu alegría fue una herramienta de resistencia política. El Alicia te necesita siempre mirando más allá del mostrador."
    },
    capricornio: {
      verano: "Te costará desconectar: seguirás pensando en las actas de examen que quedaron pendientes o en cómo organizar el archivo en marzo. Tu descanso será planificar el año administrativo para que nada te tome por sorpresa. El desafío será aprender que el mundo sigue girando aunque vos no estés controlando los sellos.",
      primer: "El regreso te encontrará como la roca que sostiene todo el edificio administrativo. Mientras otros se quejan de los cambios, vos ya estarás estudiando la nueva normativa para aplicarla sin errores. Serás el sostén de tus superiores y la guía de tus compañeros. El riesgo será la sobrecarga; aprendé a delegar los trámites menores.",
      segundo: "A mitad de año, tu eficiencia será legendaria. Lograrás que la oficina funcione como un reloj suizo a pesar de la falta de recursos. Tu seriedad dará confianza a toda la comunidad educativa. Descubrirás que tu autoridad no viene del cargo, sino de tu compromiso inquebrantable con el trabajo bien hecho.",
      cierre: "Cerrarás el año con la tranquilidad del deber cumplido. La estructura administrativa del Alicia se mantuvo en pie gracias a tu rigor y tu esfuerzo silencioso. Te irás sabiendo que sos la columna vertebral de la gestión. El 2026 te consagra como el guardián de la continuidad institucional."
    },
    acuario: {
      verano: "Tu verano será un laboratorio de ideas. Pensarás en cómo digitalizar procesos, cómo eliminar papeles inútiles y cómo hacer que la oficina sea más horizontal. Necesitarás aire nuevo y rodearte de gente que piense distinto para volver con propuestas que sacudan el polvo de la administración.",
      primer: "El regreso te enfrentará a los 'siempre se hizo así' que tanto te irritan. El desafío será proponer lo nuevo sin generar rechazo en tus compañeros más conservadores. Usarás tu ingenio para resolver problemas técnicos que el ministerio no soluciona. Serás el 'hacker' del sistema administrativo del instituto.",
      segundo: "A mitad de año, tus ideas empezarán a implementarse de forma lateral. Lograrás que la comunicación interna sea más ágil y menos burocrática. Tu oficina será un foco de innovación y pensamiento libre. Descubrirás que se puede ser administrativo sin perder la rebeldía creativa. Tu esperanza estará en las redes que logres tejer.",
      cierre: "Terminarás el año habiendo movido las estructuras que parecían inamovibles. No todo cambió, pero nada quedó igual. Te irás con la certeza de que tu visión de futuro ya está circulando entre tus compañeros. El 2026 te deja como el arquitecto de la administración que se viene."
    },
    piscis: {
      verano: "El verano será tu momento de sanación psíquica. Necesitarás limpiar tu aura de todas las quejas y angustias que absorbiste en la ventanilla. Buscarás el mar, la música o el arte para volver a conectar con tu centro. Tu descanso será una disolución necesaria de la identidad laboral para volver a ser vos mismo.",
      primer: "El regreso podrá ser abrumador: sentirás el clima tenso de la oficina antes de que alguien hable. El desafío será no convertirte en la esponja de los problemas de todos. Aprenderás a poner un límite invisible pero firme entre vos y el mostrador. Tu sensibilidad será tu brújula para saber quién necesita realmente una mano hoy.",
      segundo: "A mitad de año, tu intuición te ayudará a resolver trámites que parecían imposibles. Encontrarás la solución 'mágica' donde otros solo veían trabas. Tu trato dulce y comprensivo desarmará al más enojado de los estudiantes. Lograrás que la oficina sea un refugio de paz y humanidad en medio de la vorágine institucional.",
      cierre: "Llegarás a diciembre con la sensibilidad intacta y el alma fortalecida. Habrás aprendido a navegar las aguas emocionales del instituto sin ahogarte. Te irás con la paz de quien sabe que su presencia suavizó el camino de muchos. El Alicia te agradece por recordarles a todos que, detrás de cada trámite, hay un ser humano."
    }
  },

  estudiante: {
    aries: {
      verano: `
        el verano llegará con la necesidad de moverte, aries, no podrás quedarte quieto.
        los primeros días serán de pura inercia: te costará desconectar los horarios y la presión de rendir.
        tu cuerpo te pedirá actividad física intensa, aire libre y un corte total con el modo "estudiante estresado".
        buscarás viajes cortos, caminatas sin rumbo, o cualquier actividad que te devuelva el impulso vital que la cursada te había quitado.
        el descanso será estratégico: necesitarás recargar tu fuego interno para las batallas académicas del 2026.
      `,
      primer: `
        el primer cuatrimestre te encontrará con muchas materias, lecturas que se superpondrán, y una sensación de que no llegarás a nada.
        tu impulso inicial te llevará a querer absorber todo, a participar en cada debate, pero la energía no será infinita.
        el riesgo será la impulsividad en las decisiones: abandonar una materia clave o discutir con un compañero en medio de un debate acalorado.
        tu desafío será regular la marcha: no cada materia ameritará el 100% de tu energía; elegirás qué es vital y qué puede esperar.
        la clave será la táctica, no la fuerza bruta.
      `,
      segundo: `
        a mitad de año, lograrás armar un sistema de estudio que te funcionará, que será más tuyo y menos copiado de otros.
        entenderás que tu modo de aprender es dinámico y que te aburrís con la rutina.
        empezarás a liderar grupos de estudio donde tu capacidad de motivar a otros se volverá esencial.
        descubrirás que la verdadera potencia no estará en saberlo todo, sino en saber aplicar el conocimiento en el momento justo.
        tu liderazgo se consolidará a través de la acción concreta y la inspiración a tus pares.
      `,
      cierre: `
        el fin de año te encontrará más maduro y menos impulsivo.
        habrás salido del cuatrimestre con menos materias aprobadas de golpe, pero con una base de conocimiento más sólida.
        habrás aprendido a elegir batallas y a no agotarte en discusiones inútiles.
        te llevarás del 2026 la lección de que el verdadero éxito no es la velocidad, sino la continuidad.
        el próximo desafío será transformar esa energía individual en acción colectiva.
      `
    },
    tauro: {
      verano: `
        el verano te pedirá estabilidad y un piso firme para encarar el año que viene.
        necesitarás rutina, comidas ricas, silencio, y una desconexión total de la exigencia.
        tu cuerpo te pedirá calma y tu mente, previsibilidad.
        no te apurarás con las lecturas de verano, disfrutarás del proceso, sin presión.
        la recarga será a través de lo material: cocinar, jardinería, o simplemente estar con gente que te da paz.
        tu descanso será tu base para la resistencia.
      `,
      primer: `
        el inicio del año traerá mucha información nueva que te desestabilizará.
        los cambios en los planes de estudio o en los formatos de cursada te generarán fricción.
        vos, tauro, necesitarás un tiempo para asimilar la información y hacerla tuya, no te apures a entenderlo todo a la primera.
        el riesgo será la obstinación: no querer cambiar un método de estudio que ya no funciona.
        tu desafío será mantener la constancia sin volverte totalmente resistente a lo nuevo.
      `,
      segundo: `
        a mitad de año, tu constancia dará su fruto.
        mientras otros se queman o se dispersan, vos seguirás ahí, firme, entregando trabajos con calidad y a tiempo.
        tu presencia en los grupos de estudio será un ancla: serás el que recuerde los plazos, el que le dé solidez al proyecto.
        descubrirás que tu verdadera potencia estará en la tenacidad y en la capacidad de sostener lo que comiences.
        tu forma de ser será un acto de cuidado colectivo para tu grupo.
      `,
      cierre: `
        llegarás a diciembre con la satisfacción del trabajo bien hecho.
        lo que lograste será por tu propia fuerza y paciencia.
        te llevarás la certeza de que tu modo, lento y seguro, es el más efectivo.
        el 2026 te dejará la lección de que no tendrás que correr al ritmo de otros.
        tu próximo desafío será aprender a delegar la carga sin sentir que perdés el control.
      `
    },
    géminis: {
      verano: `
        el verano te encontrará con la cabeza hiperactiva: leyendo de todo, saltando de un tema a otro, y conversando sin parar.
        tu descanso será mental: la desconexión se dará al cambiar de foco constantemente.
        aprovecharás para explorar todos esos temas periféricos que la cursada no te permite.
        será el momento ideal para conectar con personas que te nutran intelectualmente y que te den nuevas perspectivas.
        tu mejor recarga será la expansión de la curiosidad.
      `,
      primer: `
        el primer cuatrimestre será un caos de información; múltiples lecturas, debates que se superpondrán, y una sensación de que estarás en todos lados a la vez.
        tu habilidad para conectar ideas dispares te salvará, pero el riesgo será la dispersión.
        el desafío será no quedarte solo en la superficie de los temas; usarás tu rapidez mental para ir profundo en lo que importa.
        evitarás el agotamiento por querer estar en todos los frentes.
        filtrarás la información.
      `,
      segundo: `
        a mitad de año, tu habilidad para circular información se volverá esencial para el grupo de estudio.
        serás el que conecte la teoría de una materia con la práctica de otra, el que avise a tiempo de un cambio de horario.
        en ese intercambio constante, sostendrás más comunidad de lo que imaginarás.
        la comunicación dejará de ser solo una habilidad para volverse una herramienta de cuidado colectivo que prevenga malentendidos.
        descubrirás que serás el nodo de coherencia.
      `,
      cierre: `
        el cierre del año te encontrará con una certeza: comunicar no será solo hablar rápido, sino ordenar el caos para vos y para tu grupo.
        lograste transformar la dispersión en una herramienta de agudeza mental.
        te llevarás la lección de que tu aporte más grande será el de ser un conector de saberes y personas.
        el reto para el próximo ciclo será defender tu espacio de calma mental.
      `
    },
    cáncer: {
      verano: `
        el verano te pedirá reparación emocional profunda.
        necesitarás volver a tus espacios seguros, a tus afectos de confianza, y a una rutina que te dé contención.
        la vorágine de la cursada te habrá dejado sensible y permeable a la energía ajena.
        los primeros días serán de hibernación; series, comidas caseras, y mucho silencio.
        el descanso será emocional: aprovecharás para diseñar límites que te van a proteger en marzo.
      `,
      primer: `
        el primer cuatrimestre te golpeará en el costado más sensible: el clima de estudio estará cargado, habrá malestar no dicho, y compañeros que pedirán más contención de la que podrás dar.
        vos, cáncer, cuidarás por naturaleza: escucharás, acompañarás, ofrecerás un espacio seguro en el grupo de estudio.
        el riesgo será el mismo de siempre: absorber la emocionalidad del ambiente y quedar agotado.
        tu energía será valiosa; aprenderás a diferenciar entre empatizar y cargar con el peso ajeno.
      `,
      segundo: `
        a mitad de año, lograrás algo clave: permitirte ser cuidado.
        empezarás a practicar el decir “no puedo”, “necesito un día libre”, o “esto no lo puedo llevar yo solo”.
        lo que antes vivías como un fracaso personal se sentirá como un acto de verdad y autoafirmación.
        y eso fortalecerá tus vínculos: cuando vos muestres tu límite, otros entenderán que también pueden tener uno.
        la red de contención se ampliará.
      `,
      cierre: `
        el fin de año te encontrará más maduro y menos impulsivo.
        no es que el estudio haya mejorado mágicamente, sino que vos habrás empezado a transitarlo de otro modo.
        la fórmula será menos sacrificio, más reciprocidad.
        tu gran logro de 2026 será haber fortalecido tu caparazón desde la conexión, no desde el aislamiento.
      `
    },
    leo: {
      verano: `
        el verano te devolverá el brillo que la cursada había apagado.
        necesitarás sentirte creativo, conectado con tu deseo, y ser el centro de tu propia vida.
        retomarás hobbies, actividades que te den vitalidad, y planes que te entusiasmen.
        este reencuentro con tu chispa interna será tu combustible para el resto del año.
        dejarás de lado la necesidad de planificar y simplemente disfrutarás de la luz.
      `,
      primer: `
        el inicio del año traerá un golpe sutil: la falta de reconocimiento en los trabajos grupales o la sensación de que tu esfuerzo pasa desapercibido.
        te frustrarás al no ver el impacto inmediato de tu dedicación.
        el riesgo será trabajar solo para el aplauso.
        el desafío será abrir el camino hacia un nuevo tipo de liderazgo, uno que no dependa de la validación externa.
        aprenderás a ser tu propio público, tu propia fuente de energía y validación.
      `,
      segundo: `
        a medida que avance el año, entenderás que liderar no es brillar en solitario, sino habilitar el talento de otros.
        empezarás a dar lugar en los grupos de estudio, a sostener en silencio los proyectos de tus compañeros.
        tu autoridad se transmitirá por presencia, coherencia y generosidad.
        ese cambio de eje, de protagonista a mentor, te dará una calma inesperada.
        tu influencia será profunda, no superficial.
      `,
      cierre: `
        llegarás a diciembre con menos necesidad de aplauso y más confianza en tu propio valor.
        descubrirás un modo de brillar que no compite, que simplemente ilumina a otros.
        tu gran logro será haber transformado la necesidad de protagonismo en una fuerza al servicio del bien común.
        te irás sabiendo que inspiraste a los que te rodean.
      `
    },
    virgo: {
      verano: `
        el verano te recibirá con una energía peculiar: al principio querrás ordenar el descanso.
        organizarás listas de lecturas, planillas de horarios para marzo, y pendientes mentales.
        pero a los pocos días aparecerá una rendición necesaria: no se podrá controlar todo.
        cuando aflojes la estructura mental, encontrarás una paz inesperada.
        el descanso dejará de ser una tarea que hay que cumplir y empezará a ser una experiencia regeneradora que te conectará con el cuerpo.
      `,
      primer: `
        el primer cuatrimestre será un catálogo de imperfecciones: compañeros impuntuales, trabajos incompletos, lecturas mal citadas.
        tu ojo clínico detectará el problema antes de que exista.
        el riesgo será absorber cada falla como responsabilidad personal y agotarte corrigiendo lo que no te corresponde.
        el aprendizaje será: no todo merecerá ser corregido de inmediato; hay que saber cuándo soltar el control.
        la esperanza estará en la eficiencia compartida.
      `,
      segundo: `
        con el correr de los meses, empezarás a soltar el rigor.
        delegarás tareas, compartirás responsabilidades, aceptarás que cierto desorden funcional no será una catástrofe académica.
        lo que antes te crispaba —la ineficiencia ajena— ahora lo mirarás con compasión.
        al bajar la autoexigencia, el estudio se volverá respirable, y vos recuperarás energía para aquello que realmente requiera tu precisión.
      `,
      cierre: `
        el año terminará sin haber alcanzado la perfección, y eso ya no te angustiará.
        habrás aprendido que la calidad no se perderá por aceptar límites de tiempo.
        tu gran logro será haber transformado la crítica interna en discernimiento estratégico.
        te irás con la convicción de que la estructura que se sostiene es la que tiene flexibilidad.
      `
    },
    libra: {
      verano: `
        el verano te encontrará buscando equilibrio en todas las áreas.
        repasarás mentalmente cómo volver a la cursada sin romper la delicada red de vínculos que fuiste tejiendo.
        el descanso no será aislamiento, sino un profundo reacomodamiento interno.
        necesitarás restaurar la armonía en tu propia balanza antes de volver a mediar en las tensiones grupales.
        aprovecharás para rodearte de belleza y conversaciones estéticas que nutran tu espíritu.
      `,
      primer: `
        el inicio del año traerá tensiones en los grupos de estudio: opiniones encontradas, trabajos que no avanzan al mismo ritmo.
        vos, libra, escucharás, mediarás con diplomacia, y traducirás las posturas para que todos se entiendan.
        el riesgo será mediar tanto que te corras de tu propio eje o desaparezcas detrás de la armonía que intentás sostener.
        el desafío del cuatrimestre será practicar el desacuerdo amable, decir tu verdad sin buscar la aprobación total.
      `,
      segundo: `
        a mitad de año, tu trabajo invisible se volverá visible.
        muchas situaciones de conflicto no estallarán porque vos sostuviste el diálogo en el momento justo.
        tu capacidad de construir puentes mantendrá la convivencia grupal.
        descubrirás que la justicia no siempre será un balance perfecto, sino la posibilidad de que todas las voces sean escuchadas.
        tu aporte será la cohesión.
      `,
      cierre: `
        el año terminará sin grandes rupturas en tus grupos de estudio.
        habrás aprendido que cuidar el equilibrio colectivo también requerirá cuidarte a vos en primer lugar.
        ponerte primero no será egoísmo, será sostenibilidad.
        te llevarás la lección de que tu aporte no será ser la balanza, sino ser el punto de encuentro.
        el 2026 te reafirmará como un pacificador esencial.
      `
    },
    escorpio: {
      verano: `
        el verano será un tiempo de introspección profunda e inevitable.
        necesitarás silencio, profundidad, tiempo sin la necesidad de dar explicaciones superficiales.
        descansar para vos será procesar todo lo que quedó pendiente a nivel emocional y estratégico.
        algo estructural se estará moviendo en tu interior; estarás evaluando qué vínculos de estudio merecerán seguir.
        aprovecharás para purificar tu energía y prepararte para las transformaciones.
      `,
      primer: `
        el primer cuatrimestre no esquivará el conflicto; de hecho, lo atraerá para poder depurarlo.
        aparecerán tensiones reales en los grupos, juegos de poder, y vos sentirás que es necesario sacar la verdad a la luz.
        escorpio irá directamente al núcleo del problema, aunque eso incomode a otros.
        tu manera de ir a la verdad será honesta y brutalmente necesaria.
        el riesgo será el aislamiento; la clave será elegir aliados que valoren tu lucidez, no tu dureza.
      `,
      segundo: `
        a mitad de año, las transformaciones empezarán a sentirse.
        habrá cambios en tus relaciones, en los límites personales que pondrás, y en lo que ya no estarás dispuesto a tolerar.
        escorpio no buscará comodidad académica, buscará verdad y autenticidad en el proceso de estudio.
        este proceso de soltar lo viejo podrá ser doloroso, pero te permitirá renacer con más fuerza y claridad.
        confiarás en la depuración.
      `,
      cierre: `
        el año terminará y nada estará igual que al comienzo.
        habrás perdido algunas certezas que eran ilusiones, pero ganarás profundidad y una visión más aguda de tu proceso de estudio.
        te llevarás la fuerza de haber atravesado la crisis sin negociar tu esencia.
        el próximo año te encontrará anclado en un nuevo tipo de poder personal: el de la coherencia.
      `
    },
    sagitario: {
      verano: `
        el verano activará tu necesidad de horizonte y de sentido.
        leerás, pensarás, imaginarás otros modos de estudiar; te negarás a que el año que empieza sea solo supervivencia.
        necesitarás sentir que habrá una meta más alta, un propósito pedagógico que trascienda la cursada.
        tu descanso será mental; te recargarás expandiendo tus conocimientos y soñando con el futuro.
        aprovecharás para conectar con filosofías o ideas que te den un marco de esperanza.
      `,
      primer: `
        el primer cuatrimestre apretará con calendarios rígidos y exigencias de corto plazo, lo que generará fricción con tu necesidad de amplitud.
        vos seguirás mirando más allá del día a día, buscando el sentido de cada tarea.
        sagitario necesitará propósito para sostener el esfuerzo, y cuando ese sentido flaquee, aparecerá el cansancio.
        no te dispersarás en discusiones menores; recordarás tu visión y la usarás como brújula.
        tu energía estará en la inspiración.
      `,
      segundo: `
        a mitad de año, compartirás ideas, abrirás debates inesperados, propondrás miradas que oxigenarán la conversación del grupo.
        lograrás inyectar una dosis de optimismo y posibilidad en el ambiente.
        tu entusiasmo se volverá contagioso y movilizará recursos que estaban dormidos.
        descubrirás que tu rol será el del visionario, el que recuerda por qué están todos ahí.
      `,
      cierre: `
        el año terminará con fatiga física, pero no con vacío existencial.
        el sentido seguirá ahí, intacto y fortalecido por las acciones que emprendiste.
        tal vez no lograste la gran reforma educativa que soñabas, pero sembraste preguntas que van a germinar.
        te irás sabiendo que inspiraste a otros a ver un poco más lejos.
      `
    },
    capricornio: {
      verano: `
        incluso en verano te costará soltar la responsabilidad; será como un interruptor que no podrás apagar del todo.
        la mente seguirá repasando pendientes y planificando el inicio, porque tu seguridad residirá en la estructura.
        descansar de verdad implicará aprender a confiar en que, por un rato, no todo dependerá de tu control.
        tu mayor tarea estival será delegar mentalmente; dejarás que el mundo gire sin que vos lo impulses.
        conectarás con tu cuerpo; el descanso físico será la mejor inversión para tu rendimiento.
      `,
      primer: `
        el inicio del año te colocará en el lugar de sostén y de columna vertebral de tu grupo de estudio.
        estructuras, organización, continuidad, cumplimiento de los tiempos; muchas cosas funcionarán porque alguien las mantendrá en marcha, y muchas veces ese alguien serás vos.
        tu seriedad y compromiso serán pilares, pero el riesgo será normalizar la sobrecarga.
        trabajarás en la delegación activa: empezarás a formar a otros para que puedan tomar parte de tu carga.
      `,
      segundo: `
        a mitad de año el peso se hará sentir con fuerza, y por primera vez, la resistencia no será la respuesta.
        capricornio empezará a reconocer que sostener el estudio no significará hacerlo en solitario.
        pedir ayuda se volverá una posibilidad real.
        descubrirás la eficiencia en la colaboración, y te sorprenderás al ver que el trabajo compartido se hará más rápido y mejor.
        este será tu gran cambio: transformar la responsabilidad solitaria en un liderazgo distribuido.
      `,
      cierre: `
        el año terminará gracias al trabajo silencioso y constante de quienes cargaron más de lo justo.
        esta vez te irás reconociendo en esa tarea, pero sin romantizar el desgaste.
        entendiste que tu valor no estará solo en lo que produces, sino en tu capacidad para construir estructuras duraderas.
        te llevarás la lección de que el verdadero éxito será alcanzar la meta sin haber sacrificado tu bienestar en el camino.
      `
    },
    acuario: {
      verano: `
        el verano será un laboratorio mental: un espacio donde pensarás alternativas radicales al estudio tradicional.
        la pausa alimentará ideas que no encajarán en los diseños curriculares oficiales.
        tu energía se recargará en la desconexión social y en el pensamiento libre.
        será el momento ideal para leer temas fuera de tu área o sumergirte en proyectos creativos.
        mantendrás esas ideas frescas; serán tu arsenal para enfrentar la rigidez del sistema en marzo.
      `,
      primer: `
        el primer cuatrimestre te enfrentará a normas rígidas y a lógicas que no contemplarán la diversidad real del estudio.
        sentirás el roce constante entre lo posible (lo que la teoría permite) y lo permitido (lo que la burocracia impone).
        podrás sentir frustración, pero tu rol será agitar las preguntas difíciles.
        evitarás el cinismo y canalizarás esa energía en buscar soluciones ingeniosas.
        el valor de tu signo será ser la voz del cambio.
      `,
      segundo: `
        a mitad de año, las redes humanas se volverán tu refugio y tu motor.
        ideas que no prosperan oficialmente encontrarán circulación y apoyo en conversaciones laterales con compañeros afines.
        lo nuevo no desaparecerá, se diseminará por canales informales que vos ayudarás a crear.
        descubrirás la potencia de la comunidad y del trabajo en red.
        la esperanza florecerá en los márgenes, y vos serás el jardinero.
      `,
      cierre: `
        el año terminará sin una revolución visible, pero con muchas semillas plantadas en la cabeza de tus compañeros.
        tu influencia habrá sido silenciosa pero profunda.
        un cambio de mentalidad precede siempre al cambio de estructura.
        te irás con la certeza de que tu visión de futuro ya estará circulando.
      `
    },
    piscis: {
      verano: `
        el verano te volverá permeable y sensible a los climas emocionales de tu entorno.
        necesitarás pausa, retiro, y mucho contacto con la naturaleza o el arte para no saturarte.
        el primer paso será desintoxicarte de las emociones ajenas que absorbiste.
        buscarás actividades que te permitan la evasión creativa.
        la recarga será psíquica, no física.
      `,
      primer: `
        el inicio del año podrá ser abrumador si no pones límites claros.
        absorberás los climas, las exigencias, y los estados de ánimo que no siempre serán tuyos.
        al comienzo, te costará poner límites por temor a ser insensible.
        el desafío será aprender que podrás ser empático sin sacrificar tu propio espacio.
        tu sensibilidad deberá ser una brújula, no una esponja.
      `,
      segundo: `
        a mitad de año aprenderás a compartir lo que sientas, a verbalizar la carga emocional.
        poner palabras a lo difuso ordenará tu mundo interior.
        descubrirás que al hablar, tus compañeros no te juzgarán, sino que te ofrecerán contención.
        esta práctica de poner límites de forma suave será tu gran logro.
      `,
      cierre: `
        el año terminará con más contención y menos confusión interna.
        no porque te habrás endurecido o aislado, sino porque serás más consciente de tus límites.
        el 2026 habrá sido el año donde aprendiste a navegar las aguas emocionales sin ahogarte en ellas.
        tu esperanza residirá en la conexión profunda que ahora podrás elegir.
      `
    }
  },
 

  graduados: {
  aries: {
    verano: `
      El verano te va a encontrar con una energía inquieta.
      ya no habrá cursadas ni finales, pero el cuerpo seguirá acelerado, como si algo quedara por hacer.
      vas a iniciar proyectos, probar rumbos nuevos, moverte sin mapa.
      en algún momento va a aparecer el Alicia como lugar donde esa energía todavía podría tener sentido colectivo.
    `,
    primer: `
      Durante el primer semestre del 2026 vas a empezar a notar un clima distinto.
      conversaciones sobre recortes, cambios, fragilidad de lo público van a circular.
      el contacto con otros egresados va a reactivar preguntas sobre cómo estar presentes.
      no desde la urgencia, sino desde el compromiso elegido.
    `,
    segundo: `
      A mitad de año vas a descubrir que hay muchas formas de volver.
      participar en encuentros, acompañar procesos, sumar tu voz cuando haga falta.
      no todo va a requerir presencia constante.
      estar disponible va a ser una forma de acción.
    `,
    cierre: `
      El 2026 va a cerrarse con una certeza más clara.
      el Alicia va a seguir siendo una comunidad que invita, no que exige.
      tu energía va a encontrar ahí un lugar posible.
      cuando decidas volver.
    `
  },

  tauro: {
    verano: `
      El verano va a regalarte tiempo.
      vas a bajar el ritmo y ordenar prioridades.
      el Alicia va a aparecer como recuerdo de esfuerzo compartido.
      algo construido entre muchos.
    `,
    primer: `
      En los primeros meses del año vas a escuchar con atención lo que está pasando.
      la educación pública va a mostrarse frágil, pero sostenida por vínculos.
      el intercambio con otros egresados va a abrir preguntas serenas.
      sobre cómo cuidar lo que importa.
    `,
    segundo: `
      A mitad de año vas a confirmar que defender también es sostener.
      estar presente en momentos clave, acompañar sin exponerte de más.
      el Alicia va a seguir siendo un espacio al que se puede volver.
      incluso de manera intermitente.
    `,
    cierre: `
      El 2026 va a cerrarse con estabilidad.
      sabiendo que la comunidad no se rompe con la distancia.
      y que lo público se defiende también con constancia.
    `
  },

  géminis: {
    verano: `
      El verano va a ser de intercambio permanente.
      mensajes, ideas, grupos que se reactivan.
      el Alicia va a aparecer en conversaciones y debates.
      como tema vivo.
    `,
    primer: `
      Durante el primer semestre vas a circular entre egresados, estudiantes y docentes.
      vas a compartir información, convocatorias, alertas.
      quizás aparezca la idea de una nueva carrera o un trayecto distinto.
      el movimiento va a ser parte del compromiso.
    `,
    segundo: `
      A mitad de año vas a confirmar que la red es fundamental.
      difundir, conectar, hacer circular la palabra cuando haga falta.
      la defensa de lo público va a tomar formas flexibles.
      y vos vas a moverte cómodo ahí.
    `,
    cierre: `
      El año va a cerrarse con una certeza.
      el Alicia no será solo un edificio.
      será una red que sigue llamando.
      y vos vas a seguir escuchando.
    `
  },

  cáncer: {
    verano: `
      El verano te va a pedir cuidado.
      vas a recomponer energías emocionales.
      el Alicia va a aparecer ligado a vínculos, historias, afectos.
      más que a materias.
    `,
    primer: `
      En el primer semestre vas a sentir con fuerza el clima de época.
      incertidumbre, preocupación, ganas de cuidar lo común.
      el contacto con otros egresados va a habilitar espacios de palabra.
      necesarios para no cargar solo.
    `,
    segundo: `
      A mitad de año vas a encontrar un modo más equilibrado de estar.
      acompañar sin absorber.
      defender la educación pública desde el cuidado mutuo.
      sin desbordarte.
    `,
    cierre: `
      El 2026 va a cerrarse con mayor calma.
      entendiendo que la comunidad se sostiene con gestos pequeños.
      y que el Alicia siempre deja la puerta abierta.
    `
  },

  leo: {
    verano: `
      El verano va a ser tiempo de disfrute.
      celebrar el título, recuperar confianza.
      el Alicia va a aparecer como escenario importante de tu formación.
      uno que dejó huella.
    `,
    primer: `
      Durante el primer semestre vas a evaluar si querés volver a participar.
      no para brillar solo, sino para sumar en momentos sensibles.
      el intercambio con otros egresados va a ordenar prioridades.
      el protagonismo va a volverse compartido.
    `,
    segundo: `
      A mitad de año vas a descubrir que defender lo público también implica visibilizar.
      acompañar causas, apoyar cuando la comunidad lo necesita.
      tu voz va a sumar.
      incluso sin estar al frente.
    `,
    cierre: `
      El 2026 va a cerrarse con una convicción nueva.
      el Alicia va a seguir invitando a volver.
      y tu lugar va a existir.
      aunque no sea el de antes.
    `
  },

  virgo: {
    verano: `
      El verano va a permitirte ordenar.
      ideas, proyectos, tiempos.
      el Alicia va a aparecer como institución conocida.
      con virtudes y tensiones.
    `,
    primer: `
      En el primer semestre vas a observar con atención los cambios.
      ajustes, recortes, desorden.
      el diálogo con otros egresados va a organizar respuestas posibles.
      sin dramatismo, pero con claridad.
    `,
    segundo: `
      A mitad de año vas a aportar desde lo concreto.
      ayudar a organizar, a pensar estrategias colectivas.
      la defensa de la educación pública va a necesitar método.
      y paciencia.
    `,
    cierre: `
      El 2026 va a cerrarse con alivio.
      sabiendo que hiciste tu parte.
      y que el Alicia se sostiene mejor cuando nadie actúa solo.
    `
  },

  libra: {
    verano: `
      El verano va a reordenar vínculos.
      conversaciones pendientes, encuentros sin urgencia.
      el Alicia va a aparecer como espacio de acuerdos y tensiones.
    `,
    primer: `
      Durante el primer semestre vas a notar climas más ásperos.
      discusiones sobre el futuro de lo público.
      vas a tender puentes, facilitar diálogos.
      sin perderte en el intento.
    `,
    segundo: `
      A mitad de año vas a tomar posiciones más claras.
      defender la educación pública también va a implicar decir hasta dónde.
      la armonía va a volverse activa.
    `,
    cierre: `
      El 2026 va a cerrarse con equilibrio.
      el Alicia va a seguir siendo comunidad.
      y la comunidad va a necesitar voces comprometidas.
    `
  },

  escorpio: {
    verano: `
      El verano va a ser de revisión profunda.
      decisiones que no se pueden seguir postergando.
      el Alicia va a aparecer como experiencia intensa.
      que transformó.
    `,
    primer: `
      En el primer semestre vas a leer con claridad el contexto.
      amenazas, silencios, disputas.
      el contacto con otros egresados va a fortalecer posiciones.
      para no quedar aislado.
    `,
    segundo: `
      A mitad de año vas a elegir dónde poner tu energía.
      participar cuando haga falta, retirarte cuando no.
      la defensa de lo público va a ser una toma de posición.
      consciente.
    `,
    cierre: `
      El 2026 va a cerrarse con coherencia.
      el Alicia va a seguir invitando a volver.
      y vos vas a decidir cómo.
    `
  },

  sagitario: {
    verano: `
      El verano va a abrir horizontes.
      ideas nuevas, recorridos posibles.
      el Alicia va a aparecer como punto de partida.
      no como límite.
    `,
    primer: `
      Durante el primer semestre vas a considerar nuevos caminos.
      otra carrera, proyectos colectivos, participación en debates públicos.
      el contacto con otros egresados va a ampliar la mirada.
    `,
    segundo: `
      A mitad de año vas a traer entusiasmo a espacios compartidos.
      charlas, encuentros, defensa de la educación pública.
      la educación va a volver a sentirse aventura común.
    `,
    cierre: `
      El 2026 va a cerrarse con expansión.
      volver no siempre va a ser regresar igual.
      a veces será inventar otra forma.
    `
  },

  capricornio: {
    verano: `
      El verano va a pedirte aflojar.
      soltar responsabilidades que ya no corresponden.
      el Alicia va a aparecer como estructura conocida.
    `,
    primer: `
      En el primer semestre vas a evaluar dónde hace falta sostener.
      organizar, acompañar, estar cuando la comunidad lo necesite.
      el diálogo con otros egresados va a ordenar esfuerzos.
    `,
    segundo: `
      A mitad de año vas a confiar más en lo colectivo.
      delegar, compartir decisiones.
      la defensa de la educación pública va a dejar de ser individual.
    `,
    cierre: `
      El 2026 va a cerrarse con solidez.
      sabiendo que el Alicia se sostiene mejor entre muchos.
      y que siempre habrá lugar para volver.
    `
  },

  acuario: {
    verano: `
      El verano va a ser laboratorio de ideas.
      formas nuevas de participación, cruces inesperados.
      el Alicia va a aparecer como espacio a repensar.
    `,
    primer: `
      Durante el primer semestre vas a chocar con límites.
      pero también vas a encontrar aliados.
      otros egresados van a compartir la inquietud.
    `,
    segundo: `
      A mitad de año vas a impulsar redes.
      acciones colectivas, defensa de lo público, propuestas alternativas.
      el cambio va a empezar en pequeño.
    `,
    cierre: `
      El 2026 va a cerrarse con convicción.
      volver no siempre será regresar igual.
      a veces será transformar.
    `
  },

  piscis: {
    verano: `
      El verano va a ser de descanso profundo.
      emociones que bajan, heridas que cierran.
      el Alicia va a aparecer como recuerdo sensible.
    `,
    primer: `
      En el primer semestre vas a sentir con fuerza lo que está en juego.
      la educación pública como espacio humano.
      el contacto con otros egresados va a sostenerte.
    `,
    segundo: `
      A mitad de año vas a encontrar tu modo de compromiso.
      estar presente cuando haga falta.
      cuidar la comunidad sin perderte.
    `,
    cierre: `
      El 2026 va a cerrarse con una certeza suave.
      el Alicia va a seguir invitando a volver.
      y lo humano va a seguir siendo el centro.
    `
  }
};

function capitalizarTexto(texto) {
  if (!texto) return '';

  let t = texto.toLowerCase();

  // Alicia siempre con mayúscula
  t = t.replace(/\balicia\b/gi, 'Alicia');

  // Capitalizar inicio absoluto
  t = t.charAt(0).toUpperCase() + t.slice(1);

  // Capitalizar después de punto, ?, ! o salto de línea
  t = t.replace(/([.!?\n]\s*)([a-zñáéíóúü])/g, (_, sep, c) => sep + c.toUpperCase());

  // Forzar minúscula después de : y ; (salvo Alicia)
  t = t.replace(/([:;]\s*)([A-Za-zñáéíóúü]+)/g, (_, sep, palabra) => {
    if (palabra.toLowerCase().startsWith('alicia')) {
      return sep + 'Alicia';
    }
    return sep + palabra.charAt(0).toLowerCase() + palabra.slice(1);
  });

  return t.replace(/\s{2,}/g, ' ').trim();
}
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
function verPrediccion(e) {
  e.preventDefault();

  const rol = document.getElementById('rol').value.trim();
  const signoOriginal = document.getElementById('signo').value.trim();
  const signo = normalizarSigno(signoOriginal);

  const resultadoDiv = document.getElementById('resultado');
  const estadoDiv = document.getElementById('estado');
  const mensajeFinalDiv = document.getElementById('mensaje-final');

  if (!rol || !signoOriginal) {
    estadoDiv.textContent = 'por favor, elegí un rol y un signo.';
    estadoDiv.className = 'status';
    resultadoDiv.innerHTML = 'elegí rol y signo para desplegar el recorrido del año.';
    mensajeFinalDiv.style.display = 'none';
    return;
  }

  const contenido = textos[rol]?.[signo];
  if (!contenido) {
    estadoDiv.textContent = 'combinación no encontrada.';
    estadoDiv.className = 'status';
    resultadoDiv.innerHTML = 'ups… no hay predicción para esa combinación todavía.';
    mensajeFinalDiv.style.display = 'none';
    return;
  }

  estadoDiv.textContent = 'calculando tu psicohoróscopo del 2026…';
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

    // --- MENSAJE FINAL DE COMUNIDAD ---
    const mensajeComunidad = `
      <h2>porque somos comunidad...</h2>
      <p>en el Alicia nada se construye en solitario. 2026 será un año intenso, sí, pero también será un año en el que la comunidad —esa red silenciosa que une pasillos, grupos de estudio, oficinas y aulas— volverá a demostrar su fuerza.</p>
      <p>cada signo trae su propio modo de transitar la esperanza: algunos avanzan, otros sostienen, otros cuidan, otros abren caminos. pero todos, sin excepción, encuentran sentido cuando se enlazan con los demás.</p>
      <p>que este psicohoróscopo no sea solo una guía: que sea un recordatorio de que la unidad nos hace más fuertes. y que lo que una persona no puede, lo puede el tejido entero.</p>
      <p>caminemos juntos este 2026: con humor, con lucidez, con fuerza, y con la certeza de que cada gesto —aunque mínimo— sostiene la trama común.</p>
    `;

    mensajeFinalDiv.innerHTML = mensajeComunidad.replace(
      /<p>(.*?)<\/p>/gs,
      (_, contenido) => `<p>${capitalizarTexto(contenido)}</p>`
    );

    mensajeFinalDiv.style.display = 'block';
    estadoDiv.textContent = '¡listo! aquí tenés tu psicohoróscopo de la esperanza 2026';

    resultadoDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, 600);
}
document.addEventListener('DOMContentLoaded', () => {
  document
    .getElementById('selector-form')
    .addEventListener('submit', verPrediccion);

  document.getElementById('mensaje-final').style.display = 'none';
});








