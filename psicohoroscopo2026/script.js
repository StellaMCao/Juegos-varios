// script.js - Psicohoróscopo de la esperanza 2026

const textos = {
  docente: {
    aries: {
      verano: `
        El verano llega como una bocanada de aire fresco que necesitabas para resetearte.
        los primeros días se sienten extraños; tu cuerpo sigue en modo "carrera", con la adrenalina de diciembre aún corriendo por las venas.
        es clave que busques conscientemente bajar la velocidad: caminá sin apuro, recuperá la siesta, dejá que el sol te deshaga un poco la coraza rígida de la docencia.
        aries, siempre lista para la acción, empieza a comprender una verdad fundamental: descansar no es detener la marcha, sino afinar la estrategia para lo que viene.
        la clave es el ritmo, no la velocidad: entendés que para sostener los desafíos del 2026, necesitás un ritmo más humano y sostenible.
      `,
      primer: `
        El primer cuatrimestre te encuentra entrando al instituto con esa mezcla de entusiasmo y alerta que te caracteriza.
        algo en el aire está desordenado; indicaciones que bajan sin demasiada lógica, plazos que cambian de un mail a otro, y la sensación de que la estructura se mueve más rápido que el sentido pedagógico.
        vos, que te encendés rápido, salís a decir lo que no cierra; ponés palabras a lo que otros mastican en silencio.
        el desafío del cuatrimestre es regular la marcha: no cada confusión amerita una embestida, y no cada diferencia es un combate.
        empezás a notar dónde conviene poner el cuerpo y dónde alcanza con una pregunta bien formulada que impulse el debate colectivo.
      `,
      segundo: `
        A mitad de año aparece algo nuevo: aprendés a esperar sin pasividad, es pura estrategia.
        descubrís que no tenés que estar en cada frente; algunas discusiones se van ordenando cuando dejás que circulen entre colegas y no monopolizás el impulso de la queja o la acción.
        aries, sin resignar su potencia, se vuelve más táctico y selectivo en sus batallas.
        charlas de pasillo que antes te irritaban ahora empiezan a darte pistas valiosas, y te encontrás escuchando más que explicando tus planes.
        empezás a notar que las alianzas de verdad no se arman en el fragor del conflicto, sino en esos pequeños intercambios cotidianos donde se reconoce al que tenés al lado como un par.
      `,
      cierre: `
        El fin de año llega con el cansancio lógico de quien caminó demasiado rápido durante meses, pero también con una claridad que te sorprende.
        no resolviste todos los problemas institucionales, pero seleccionaste mejor cuáles eran urgentes y cuáles podían esperar.
        te descubrís más compañero, menos impulsivo, más dispuesto a construir algo que no dependa únicamente de tu energía individual.
        salís del 2026 con menos peleas innecesarias y más vínculos que te reconocen como alguien que empuja, sí, pero también acompaña.
        este crecimiento en la dimensión vincular es un logro enorme para aries.
      `
    },
    tauro: {
      verano: `
        El verano te saca de encima una capa de responsabilidad que cargabas incluso sin darte cuenta.
        los primeros días necesitás silencio, rutina simple, y contacto con lo que te ordena el cuerpo: comidas sin apuro, siestas que duran lo que tienen que durar, conversaciones que no terminan en la urgencia del trabajo.
        tauro no empieza un año difícil sin antes asegurarse un piso firme; y este verano se vuelve exactamente eso, una base inamovible.
        recién después de esa estabilización aparece la posibilidad de pensar suavemente en lo que vendrá, pero sin ansiedad; como quien prueba la temperatura del agua antes de entrar.
        tu energía se recarga a través de la conexión con lo material y lo predecible, no busques grandes aventuras, buscá calma.
      `,
      primer: `
        El primer cuatrimestre trae su propio temblor: cambios institucionales que no se explican del todo, reglas nuevas que no contemplan la realidad cotidiana del aula, formularios que crecen como si fueran plantas sin poda ni sentido.
        vos, fiel a vos mismo, no entrás en la corrida general; te dedicás a sostener lo que importa de tu práctica, aunque alrededor todo tenga un ritmo más frenético y disperso.
        a veces esa constancia parece lenta para otros, pero con el tiempo revela su potencia; en medio de la confusión, tu estabilidad es un punto de apoyo para más de un colega que no sabe bien por dónde empezar.
        tu desafío es mantener tu eje sin volverte totalmente resistente a cualquier cambio.
      `,
      segundo: `
        En el segundo tramo del año, algo empieza a volverse más visible, y no por un gran esfuerzo de tu parte.
        no es porque hagas grandes discursos ni exijas reconocimiento; simplemente porque tu modo de trabajar, firme pero sin estridencias, empieza a ordenar ambientes que venían dispersos.
        tauro tiene una manera particular de crear comunidad: ofreciendo un mate, sosteniendo un proyecto que parecía caerse, recordando un acuerdo que otros pasaron por alto o priorizando el cuidado de los tiempos.
        es ahí, en esa tenacidad silenciosa, donde tu presencia adquiere un valor profundo y se consolida tu liderazgo de base.
      `,
      cierre: `
        Al llegar a diciembre sentís el peso lógico del año, el cuerpo te pide un descanso merecido, pero también una satisfacción silenciosa que no necesitás exhibir.
        lo que se sostuvo —y muchas cosas se sostuvieron— fue gracias a personas como vos, que no perdieron el eje y que actuaron como ancla.
        te llevás del 2026 la certeza de que tu modo, lento y firme, no solo funciona; sostiene instituciones enteras porque da confianza en un contexto incierto.
        el próximo paso será aprender a delegar esa carga sin sentir que la calidad del trabajo se resiente.
      `
    },
    géminis: {
      verano: `
        El verano te encuentra con la cabeza hiperactiva: ideas que se superponen, curiosidades que te llevan de un libro a otro, conversaciones que abren más puertas de las que cierran.
        disfrutás de la vorágine mental, pero poco a poco te das cuenta de que necesitás filtrar, no por obligación, sino para que la dispersión no se vuelva ruido paralizante.
        empezás a distinguir qué te interesa de verdad y qué solo te entretiene un rato, y ese filtrado suave empieza a darte un descanso mental que no sabías que podías tener.
        aprovechá para conectar con personas que te nutren intelectualmente, esa es tu mejor recarga.
      `,
      primer: `
        El primer cuatrimestre tiene la marca típica de tu signo: múltiples frentes, tareas simultáneas, mensajes que llegan por tres canales distintos y todos parecen urgentes.
        sos quien capta rápido lo que se mueve, quien entiende dónde está el verdadero problema aunque nadie lo haya dicho, y esa rapidez mental es una herramienta valiosa.
        a veces eso te acelera y te lleva al borde del agotamiento, pero otras te salva; intuís desajustes antes de que estallen.
        el desafío no es entender o explicar, sino no agotarte explicando lo que otros aún no vieron o simplemente no quieren ver.
      `,
      segundo: `
        En el segundo cuatrimestre, tu habilidad para circular información se vuelve clave para la comunidad.
        no es como chisme, sino como tejido fino: conectar a quien necesita algo con quien lo puede resolver, avisar a tiempo lo que nadie comunicó formalmente, recordar la letra chica que evita un malentendido institucional.
        en ese intercambio constante, sostenés más comunidad de lo que imaginás, actuando como un nodo de coherencia en el sistema.
        la comunicación deja de ser solo una habilidad para volverse una herramienta de cuidado colectivo, que alivia tensiones antes de que exploten.
      `,
      cierre: `
        El cierre del año te encuentra con una certeza nueva: comunicar no es solo hablar rápido, sino ordenar el clima emocional y cognitivo del lugar de trabajo.
        este año descubriste que tu manera de intervenir —rápida, lúcida, movediza— puede ser un resorte de coherencia y esperanza para muchos colegas.
        y eso te acomoda en otro lugar, más sereno y más consciente de tu aporte esencial, que es el de conectar los puntos.
        el reto para el próximo ciclo es defender ese espacio de calma mental.
      `
    },
    cáncer: {
      verano: `
        El verano te da un respiro emocional profundo.
        necesitás espacios conocidos, afectos confiables y una dosis de quietud que permita recomponer lo que se desgastó durante la vorágine del año lectivo anterior.
        los primeros días son casi de hibernación: series, comidas caseras, agua fresca, y mucho silencio para procesar.
        solo después de esa reparación aparece el deseo de volver a vincularte con el mundo, pero desde un lugar más protegido y menos permeable a las demandas externas.
        aprovechá este tiempo para establecer límites afectivos que te sostendrán en el 2026.
      `,
      primer: `
        El primer cuatrimestre te golpea en el costado más sensible: el clima institucional está cargado, hay malestar no dicho, compañeros desbordados, y estudiantes que piden más de lo que podés dar en tu jornada.
        cáncer cuida por naturaleza: escucha, acompaña, ofrece un espacio seguro.
        el riesgo es el mismo de siempre: quedar agotado por sostener a otros sin pedir sostén para vos, absorbiendo toda la emocionalidad del ambiente.
        tu energía es valiosa; aprendé a diferenciar entre empatizar y cargar con la mochila ajena.
      `,
      segundo: `
        A mitad de año aparece un aprendizaje que venías postergando: permitirte ser cuidado.
        empezás a practicar el decir “no puedo”, “hasta acá llego”, “esto necesito que me ayuden”.
        lo que antes vivías como un fracaso personal o una señal de debilidad empieza a sentirse como un acto de verdad y autoafirmación.
        y, curiosamente, eso fortalece tus vínculos: cuando vos mostrás tu límite de manera honesta, otros entienden que también pueden tener uno, y la red de contención se amplía.
      `,
      cierre: `
        El fin de año te encuentra más acompañado y menos victimizado por la sobrecarga.
        no es que el contexto institucional haya mejorado mágicamente, sino que vos empezaste a transitarlo de otro modo, con una estrategia de autocuidado renovada.
        la fórmula es menos sacrificio, más reciprocidad: menos absorberlo todo, más compartir lo que pesa con la gente que te quiere.
        este es el logro más grande de tu 2026: haber fortalecido tu caparazón desde la conexión, no desde el aislamiento.
      `
    },
    leo: {
      verano: `
        El verano te devuelve algo del brillo que habías ido apagando bajo el peso de las responsabilidades rutinarias.
        leo necesita sentirse vivo, creativo, conectado con su deseo y propósito, y este es el momento de recuperarlo.
        en enero reaparece un impulso que no es de rendimiento, sino de vitalidad pura: cocinar algo rico, bailar un rato, charlar sin horarios o retomar un hobby olvidado.
        ese reencuentro con tu chispa interna va a ser clave; es tu combustible para el resto del año.
        dejá de lado la necesidad de planificar y simplemente disfrutá de la luz.
      `,
      primer: `
        El inicio del año trae un golpe sutil pero fuerte: la falta de reconocimiento explícito.
        el esfuerzo pasa desapercibido, las horas extras se naturalizan como parte del contrato, y vos sentís una mezcla de frustración e injusticia profunda.
        la pregunta que aparece es directa y punzante: ¿para quién hago todo esto si a nadie le importa?
        aunque duela, esa pregunta abre el camino hacia un nuevo tipo de liderazgo, uno que no depende de la validación externa.
        aprendé a ser tu propio público, tu propia fuente de energía.
      `,
      segundo: `
        A medida que avanza el año, entendés que ser un referente no significa brillar en solitario o acaparar la atención.
        empezás a dar lugar, a habilitar el talento de otros, a sostener en silencio los proyectos de tus colegas y estudiantes.
        leo descubre que la autoridad más sólida y duradera no se impone con gestos grandilocuentes, se transmite por presencia, coherencia y generosidad.
        ese cambio de eje, de protagonista a mentor o facilitador, te da una calma y una satisfacción inesperada.
      `,
      cierre: `
        Llegás a diciembre con menos necesidad de aplauso y más confianza interna en tu propio valor.
        descubriste un modo de brillar que no compite, que no exige validación, que simplemente está disponible para iluminar a otros.
        este año te diste cuenta de que el verdadero éxito es inspirar a los que te rodean.
        y ese modo, para leo, es una conquista enorme que te prepara para nuevos desafíos en el ámbito de la gestión y la influencia.
      `
    },
    virgo: {
      verano: `
        El verano te recibe con una energía peculiar: al principio querés ordenar todo, incluso el descanso.
        organizás horarios, listas de libros para leer, pendientes mentales para no olvidar nada en marzo.
        pero a los pocos días aparece una rendición necesaria: no se puede controlar la marea de la vida, y es inútil intentarlo.
        cuando finalmente aflojás la estructura mental, algo se acomoda por dentro, encontrando una paz inesperada.
        el descanso deja de ser una tarea que hay que cumplir y empieza a ser una experiencia regeneradora que te conecta con el cuerpo.
      `,
      primer: `
        El primer cuatrimestre despliega su clásico catálogo de imperfecciones: errores en las plataformas, pedidos imprecisos de las autoridades, comunicaciones que se pisan y datos inconsistentes.
        virgo detecta todo con una rapidez quirúrgica, a veces incluso antes de que el problema exista.
        el riesgo es absorber cada falla como responsabilidad personal y agotarte corrigiendo lo que no te corresponde.
        el aprendizaje que empieza a insinuarse es otro: no todo merece ser corregido de inmediato, y no todo error exige tu intervención directa; hay que saber cuándo soltar el control.
      `,
      segundo: `
        Con el correr de los meses empezás a soltar el rigor.
        delegás tareas, compartís responsabilidades, aceptás que cierto desorden funcional no es una catástrofe institucional.
        lo que antes te crispaba —la ineficiencia ajena— ahora lo mirás con un margen más amplio y compasivo.
        al bajar la autoexigencia, el trabajo se vuelve respirable, y vos recuperás energía para aquello que realmente requiere tu precisión y expertise.
        la verdadera esperanza está en la eficiencia compartida, no en la perfección individual.
      `,
      cierre: `
        El año termina sin haber alcanzado la perfección absoluta, y eso ya no te angustia ni te quita el sueño.
        aprendiste que la calidad no se pierde por aceptar límites de tiempo y recursos, y que cuidarte también es parte esencial del trabajo bien hecho.
        tu gran logro es haber transformado la crítica interna en discernimiento estratégico.
        te vas del 2026 con la convicción de que la estructura que se sostiene es la que tiene flexibilidad.
      `
    },
    libra: {
      verano: `
        El verano te encuentra buscando equilibrio en todas las áreas de tu vida.
        no solo en el cuerpo, también en los vínculos; repasás mentalmente cómo volver al ruedo sin romper la delicada red de acuerdos que fuiste tejiendo durante años con colegas y directivos.
        el descanso no es aislamiento, sino un profundo reacomodamiento interno.
        necesitás restaurar la armonía en tu propia balanza antes de volver a mediar en las tensiones institucionales.
        aprovechá para rodearte de belleza y conversaciones estéticas que nutran tu espíritu.
      `,
      primer: `
        El inicio del año trae tensiones conocidas, pero más intensas.
        aparecen opiniones encontradas, decisiones mal comunicadas, y climas que se enrarecen rápido en las salas de profesores.
        libra escucha con atención, media con diplomacia, y traduce las posturas para que todos se entiendan.
        el riesgo es el mismo de siempre: mediar tanto que te corrés de tu propio eje o desaparecés detrás de la armonía que intentás sostener.
        el desafío del cuatrimestre es practicar el desacuerdo amable, es decir tu verdad sin buscar la aprobación total.
      `,
      segundo: `
        A mitad de año empezás a notar el peso real de tu trabajo invisible: muchas situaciones de conflicto no estallaron porque alguien (vos) sostuvo el diálogo en el momento justo.
        aunque nadie lo enumere en un informe o en la carga horaria, tu capacidad de construir puentes mantiene la convivencia institucional y previene desgastes mayores.
        el ambiente se vuelve más liviano a tu alrededor porque ejerciste tu influencia de forma sutil y constante.
        descubrís que la justicia no siempre es un balance perfecto, sino la posibilidad de que todas las voces sean escuchadas.
      `,
      cierre: `
        El año termina sin grandes rupturas en el sistema, y en el contexto complejo que te tocó, eso es muchísimo.
        aprendiste que cuidar el equilibrio colectivo también requiere cuidarte a vos en primer lugar: ponerte primero no es egoísmo, es sostenibilidad.
        te llevás la lección de que tu aporte no es ser la balanza, sino ser el punto de encuentro.
        el 2026 te reafirma como un pacificador esencial, un estratega de la convivencia que necesita reconocer su propio valor.
      `
    },
    escorpio: {
      verano: `
        El verano es un tiempo de introspección profunda e inevitable.
        necesitás silencio, profundidad, tiempo sin la necesidad de dar explicaciones superficiales a nadie.
        descansar para vos no es distraerte con ruido, es procesar todo lo que quedó pendiente a nivel emocional y estratégico.
        algo estructural se está moviendo en tu interior; estás evaluando qué vínculos y qué compromisos laborales merecen seguir.
        aprovechá para purificar tu energía y prepararte para las transformaciones del año, que serán internas y externas.
      `,
      primer: `
        El primer cuatrimestre no esquiva el conflicto: de hecho, lo atrae para poder depurarlo.
        aparecen tensiones reales, juegos de poder soterrados, decisiones que incomodan a la mayoría, pero que vos sentís que es necesario sacar a la luz.
        escorpio no rodea el problema: va directamente al núcleo, aunque eso lo exponga a la incomprensión de otros.
        no todos lo entienden, pero tu manera de ir a la verdad de las cosas es honesta y brutalmente necesaria en un ambiente que tiende a la simulación.
        el riesgo es el aislamiento; la clave es elegir aliados que valoren tu lucidez, no tu dureza.
      `,
      segundo: `
        A mitad de año las transformaciones empiezan a sentirse, aunque no siempre se vean en la superficie de los informes.
        hay cambios en las relaciones, en los límites personales y profesionales que pusiste, y en lo que ya no estás dispuesto a tolerar bajo ninguna excusa.
        escorpio no busca comodidad institucional, busca verdad y autenticidad en la práctica.
        este proceso de soltar lo viejo puede ser doloroso, pero es lo que te permite renacer con más fuerza y claridad.
        confiá en la depuración: lo que se va, deja espacio para algo más real.
      `,
      cierre: `
        El año termina y nada está igual que al comienzo.
        perdiste algunas certezas que eran ilusiones, pero ganaste profundidad y una visión más aguda de la realidad institucional.
        lo que se transformó en tu vida profesional y tus vínculos era estructural, y vos lo sabías desde el inicio.
        te llevás la fuerza de haber atravesado la crisis sin negociar tu esencia.
        el próximo año te encontrará anclado en un nuevo tipo de poder personal: el de la coherencia.
      `
    },
    sagitario: {
      verano: `
        El verano activa tu necesidad de horizonte y de sentido.
        leés, pensás, imaginás otros modos de estar en la educación; te negás a que el año que empieza sea solo supervivencia o repetición de formatos agotados.
        necesitás sentir que hay una meta más alta, un propósito pedagógico que trascienda la burocracia.
        tu descanso es mental; te recargás expandiendo tus conocimientos y soñando con el futuro.
        aprovechá para conectar con filosofías o ideas que te den un marco de esperanza.
      `,
      primer: `
        El primer cuatrimestre aprieta con calendarios rígidos y exigencias de corto plazo, lo que genera fricción con tu necesidad de amplitud.
        vos seguís mirando más allá del día a día, buscando el sentido de cada tarea.
        sagitario necesita propósito para sostener el esfuerzo, y cuando ese sentido flaquea, aparece el cansancio y el desgano.
        no te disperses en discusiones menores; recordá tu visión y usala como brújula.
        tu energía está en la inspiración, no en la rutina.
      `,
      segundo: `
        A mitad de año compartís ideas, abrís debates inesperados, proponés miradas que oxigenan la conversación institucional que venía estancada.
        no todo se implementa de inmediato, pero lográs inyectar una dosis de optimismo y posibilidad en el ambiente.
        ese movimiento, esa apertura de mente, renueva la energía colectiva de tus colegas.
        descubrís que tu rol es el del visionario, el que recuerda por qué están todos ahí.
        tu entusiasmo se vuelve contagioso y moviliza recursos que estaban dormidos.
      `,
      cierre: `
        El año termina con fatiga física, pero no con vacío existencial.
        el sentido sigue ahí, intacto y fortalecido por las acciones que emprendiste.
        tal vez no lograste la gran reforma educativa que soñabas, pero sembraste preguntas que van a germinar.
        para vos, que el propósito se mantenga vivo es imprescindible; es el verdadero éxito.
        te vas sabiendo que inspiraste a otros a ver un poco más lejos.
      `
    },
    capricornio: {
      verano: `
        Incluso en verano te cuesta soltar la responsabilidad: es como un interruptor que no podés apagar del todo.
        la mente sigue repasando pendientes y planificando el inicio, porque tu seguridad reside en la estructura.
        descansar de verdad implica aprender a confiar en que, por un rato, no todo depende de tu control y supervisión.
        tu mayor tarea estival es delegar mentalmente; dejá que el mundo gire sin que vos lo impulses.
        conectá con tu cuerpo; el descanso físico es la mejor inversión para tu rendimiento a largo plazo.
      `,
      primer: `
        El inicio del año te coloca, una vez más, en el lugar de sostén y de columna vertebral de la institución.
        estructuras, organización, continuidad, cumplimiento de los tiempos; muchas cosas funcionan porque alguien las mantiene en marcha, y muchas veces ese alguien sos vos, en silencio.
        tu seriedad y compromiso son pilares, pero el riesgo es normalizar la sobrecarga.
        trabajá en la delegación activa: empezá a formar a otros para que puedan tomar parte de tu carga, no como un riesgo, sino como una necesidad estratégica para el sistema.
      `,
      segundo: `
        A mitad de año el peso se hace sentir con fuerza, y por primera vez, la resistencia no es la respuesta.
        capricornio empieza a reconocer que sostener el sistema no significa hacerlo en solitario.
        pedir ayuda se vuelve una posibilidad real, no una señal de debilidad o fracaso personal.
        descubrís la eficiencia en la colaboración; te sorprendés al ver que el trabajo compartido se hace más rápido y mejor, y que no por eso perdés autoridad.
        este es tu gran cambio: transformar la responsabilidad solitaria en un liderazgo distribuido.
      `,
      cierre: `
        El año termina gracias al trabajo silencioso y constante de quienes cargaron más de lo justo.
        esta vez te vas reconociendo en esa tarea, pero sin romantizar el desgaste o la autoexigencia extrema.
        entendiste que tu valor no está solo en lo que producís, sino en tu capacidad para construir estructuras duraderas.
        te llevás la lección de que el verdadero éxito es alcanzar la meta sin haber sacrificado tu bienestar en el camino.
      `
    },
    acuario: {
      verano: `
        El verano es un laboratorio mental: un espacio donde pensás alternativas, imaginás cambios radicales, y cuestionás lo dado sin tener que justificarlo.
        la pausa alimenta ideas que no encajan en los formularios ni en los diseños curriculares oficiales.
        tu energía se recarga en la desconexión social y en el pensamiento libre; es el momento ideal para leer temas fuera de tu área o sumergirte en proyectos creativos personales.
        mantené esas ideas frescas; serán tu arsenal para enfrentar la rigidez del sistema en marzo.
      `,
      primer: `
        El primer cuatrimestre te enfrenta a normas rígidas y a lógicas que no contemplan la diversidad real del trabajo educativo y de las personas.
        acuario siente el roce constante entre lo posible (lo que la teoría y el deseo permiten) y lo permitido (lo que la burocracia impone).
        podés sentir frustración, pero tu rol es agitar las preguntas difíciles.
        evitá el cinismo y canalizá esa energía en buscar soluciones ingeniosas y no convencionales.
        el valor de tu signo es ser la voz del cambio.
      `,
      segundo: `
        A mitad de año, las redes humanas se vuelven tu refugio y tu motor.
        ideas que no prosperan oficialmente o que fueron rechazadas en las reuniones encuentran circulación y apoyo en conversaciones laterales con colegas afines.
        lo nuevo no desaparece, se disemina por canales informales que vos ayudás a crear y sostener.
        descubrís la potencia de la comunidad y del trabajo en red; no tenés que convencer a todos, solo a los que están listos para la próxima etapa.
        la esperanza florece en los márgenes, y vos sos el jardinero.
      `,
      cierre: `
        El año termina sin una revolución visible, pero con muchas semillas plantadas en la cabeza de tus colegas y estudiantes.
        tu influencia fue silenciosa pero profunda, moviendo los cimientos de lo que parecía inamovible.
        y vos sabés que eso también cuenta; un cambio de mentalidad precede siempre al cambio de estructura.
        te vas con la certeza de que tu visión de futuro ya está circulando, y eso es un gran logro acuariano.
      `
    },
    piscis: {
      verano: `
        El verano te vuelve permeable y sensible a los climas emocionales de tu entorno.
        necesitás pausa, retiro, y mucho contacto con la naturaleza o el arte para no saturarte con la energía residual del año.
        el primer paso es desintoxicarte de las emociones ajenas que absorbiste durante el ciclo anterior.
        buscá actividades que te permitan la evasión creativa, como la música, el cine, o la escritura; es la mejor forma de purificación.
        la recarga es psíquica, no física.
      `,
      primer: `
        El inicio del año puede ser abrumador si no ponés límites claros.
        absorvés los climas, las exigencias, y los estados de ánimo que no siempre son tuyos, lo que te drena la energía vital para el estudio.
        al comienzo, te cuesta poner límites por temor a ser insensible o a alejar a otros.
        el desafío es aprender que podés ser empático sin sacrificar tu propio espacio.
        tu sensibilidad es una brújula, no una esponja.
      `,
      segundo: `
        A mitad de año aprendés a compartir lo que sentís, a verbalizar la carga emocional.
        poner palabras a lo difuso ordena tu mundo interior, y delimitar tu espacio protege tu energía.
        descubrís que no todo tiene que pasar por dentro, y que al hablar, tus compañeros no te juzgan, sino que te ofrecen contención.
        esta práctica de poner límites de forma suave es tu gran logro del cuatrimestre.
        la conexión sana te da un nuevo anclaje.
      `,
      cierre: `
        El año termina con más contención y menos confusión interna.
        no porque te hayas endurecido o aislado, sino porque sos más consciente de tus límites y de tus inmensos recursos internos de empatía.
        el 2026 fue el año donde aprendiste a navegar las aguas emocionales sin ahogarte en ellas.
        tu esperanza reside en la conexión profunda que ahora podés elegir.
      `
    }
  },
  "tecnico-administrativo": {
    aries: {
      verano: `
        El verano te encuentra, aries, con la necesidad de ordenar lo que el año pasado dejó incompleto.
        los primeros días se sienten como una prolongación del trabajo, revisando pendientes, ajustando procedimientos.
        pero es clave que te obligues a soltar: tu cuerpo necesita el descanso para recuperar la velocidad que tanto te gusta.
        buscá actividades que te permitan descargar adrenalina y mover el cuerpo, o la tensión de fin de año no se va a ir del todo.
        la clave es la estrategia: el descanso es una planificación para un mejor rendimiento en marzo.
      `,
      primer: `
        El primer cuatrimestre es un remolino: nuevas normativas, cambios de programas, y la sensación de que las reglas son un blanco móvil.
        vos, aries, sos el motor que empuja la rueda de la gestión, pero corrés el riesgo de agotarte resolviendo lo urgente que otros no planificaron.
        tu desafío es doble: primero, poner el cuerpo sin quemarte; segundo, empezar a decir que no a lo que no tiene sentido o a lo que te corresponde delegar.
        no cada confusión amerita tu embestida; reservá tu energía para las batallas estructurales que realmente vale la pena dar.
      `,
      segundo: `
        A mitad de año descubrís una nueva forma de liderazgo, más sutil y profunda.
        no necesitás la confrontación directa para mover la estructura; entendés que una indicación precisa o un sistema claro pueden ser más efectivos que mil discusiones.
        empezás a notar que las personas a tu alrededor valoran no solo tu capacidad de acción, sino tu habilidad para crear procesos que funcionan.
        tu impulso se vuelve constructivo: estás en modo arquitecto, diseñando sistemas que se sostengan solos y que alivien el peso de la gestión.
      `,
      cierre: `
        El fin de año llega con el orgullo de haber puesto orden donde había caos.
        te diste cuenta de que sos mucho más que un ejecutor de tareas: sos el constructor de la base que permite que la institución funcione.
        tu gran logro es haber aprendido a dosificar tu energía sin perder la potencia.
        te llevás la certeza de que tu enfoque en la acción y la eficiencia es vital para la comunidad del alicia.
      `
    },
    tauro: {
      verano: `
        El verano te da la posibilidad de reconectar con tu ritmo, ese que es lento, firme, y te da la seguridad para encarar el año que viene.
        necesitás rutina simple: tus comidas, tus horarios de descanso, y la sensación de que la tierra está quieta por un rato.
        no te apures a planificar; tu mente ya está haciendo el trabajo en silencio.
        el descanso para tauro es una inversión; si la base está firme, el resto se construye con solidez.
        aprovechá para conectar con lo estético: música, arte, o simplemente un espacio de trabajo ordenado.
      `,
      primer: `
        El inicio del año trae consigo cambios en los formatos de trabajo y exigencias que piden velocidad, algo que irrita a tu lado más constante.
        tauro tiene la paciencia para domar la burocracia, y eso te hace un pilar.
        pero el desafío es no enquistarte en un "siempre se hizo así"; no todo cambio es negativo.
        tu tarea es filtrar: qué es realmente una mejora y qué es solo un capricho administrativo.
        y una vez que decidís qué sostener, tu constancia es inamovible.
      `,
      segundo: `
        A mitad de año, tu estabilidad se vuelve el ancla que el resto de la institución necesita.
        en medio del caos de cierres y parciales, vos sos el que se acuerda de los plazos importantes y el que garantiza la continuidad de los procesos clave.
        esta persistencia silenciosa genera confianza y reconocimiento.
        descubrís que tu verdadera habilidad de liderazgo no está en innovar, sino en sostener lo que funciona.
        seguís siendo el que, sin grandes discursos, garantiza que el engranaje gire.
      `,
      cierre: `
        Llegás a diciembre con la satisfacción del trabajo bien hecho, sin prisa, pero sin pausa.
        el 2026 te deja una lección valiosa: tu resistencia al cambio no es obstinación, es discernimiento.
        te llevás la certeza de que tu modo, lento y seguro, es lo que permite que el sistema respire cuando todo lo demás pide correr.
        tu próximo desafío será integrar nuevos formatos sin sentir que traicionás tu eje.
      `
    },
    géminis: {
      verano: `
        El verano te da la distancia necesaria para ver los flujos de la institución con claridad.
        tu mente, siempre activa, empieza a mapear los cuellos de botella y los problemas de comunicación que detienen la gestión.
        para vos, descansar es cambiar de canal; leés, aprendés, e interactuás con lo que es nuevo y te desafía.
        esta recarga mental te prepara para ser el nodo de información que la institución necesita en marzo.
        tu mejor estrategia es anticipar las fallas de comunicación.
      `,
      primer: `
        El primer cuatrimestre es ideal para tu energía: es cambiante, requiere adaptarse rápido, y pide fluidez entre las áreas.
        sos el conector: el que sabe qué necesita el estudiante, qué quiere el docente, y qué pide la administración, y podés traducir los lenguajes.
        pero el riesgo es la sobre-adaptación: no todo tiene que pasar por vos para que funcione.
        el desafío es crear procesos que se mantengan solos, sin depender de tu intervención constante como intermediario.
      `,
      segundo: `
        A mitad de año, empezás a transformar el caos informativo en un sistema navegable.
        tu claridad para comunicar y tu habilidad para explicar procesos complejos de forma simple se vuelven un recurso esencial para todos.
        la gente te busca no solo por la respuesta, sino porque sentís confianza al hablar.
        en este rol, encontrás un sentido más profundo a tu trabajo: no solo es gestionar datos, es gestionar la tranquilidad de la comunidad.
      `,
      cierre: `
        El cierre del año te encuentra sintiendo el impacto de tu trabajo en el clima institucional.
        tu lucidez para ordenar el flujo de información es lo que permitió que muchos proyectos llegaran a buen puerto.
        te llevás la certeza de que tu aporte más grande es el de ser un traductor de la complejidad.
        el reto para el próximo ciclo es defender ese espacio de calma mental.
      `
    },
    cáncer: {
      verano: `
        El verano te pide que te recargues de afecto, ese es tu mejor combustible.
        la vorágine de la administración en diciembre te dejó emocionalmente expuesto, y necesitás repararte en tu caparazón.
        volvé a tus espacios seguros, a tus afectos de confianza.
        tu descanso no es solo físico, es emocional: necesitás procesar el peso que cargaste sin darte cuenta.
        es el momento ideal para empezar a diseñar los límites que te van a proteger en el 2026.
      `,
      primer: `
        El inicio del año te pone a prueba: la gente recurre a vos no solo por trámites, sino por contención y orientación en la incertidumbre.
        sos el rostro amable de la administración, el que le da una dimensión humana a la burocracia.
        el riesgo es que la empatía se vuelva una sobrecarga, y que termines agotado por el clima institucional.
        el desafío es aprender a asistir con generosidad sin absorber el problema del otro como propio.
      `,
      segundo: `
        A mitad de año, descubrís que tu verdadero aporte a la gestión no está en la frialdad de los números, sino en el cuidado de los vínculos.
        tu capacidad para escuchar y ofrecer soluciones con un toque personal se vuelve indispensable.
        los límites que empezaste a poner en el verano dan su fruto: podés ser sensible sin ser vulnerable.
        tu trabajo se transforma en un acto de cuidado colectivo.
      `,
      cierre: `
        El año termina con la certeza de que tu modo de ser, afectivo y presente, le dio un toque humano a la administración.
        te llevás la lección de que no tenés que elegir entre ser eficiente y ser empático.
        el 2026 te reafirma como un sostén afectivo, alguien que la institución necesita para que el engranaje no se vuelva solo metal.
      `
    },
    leo: {
      verano: `
        El verano te pide que dejes de lado el rol de gestor responsable y vuelvas a ser el centro de tu propia vida.
        recuperá lo que te da brillo: hobbies, placeres estéticos, y la conexión con tu deseo.
        el descanso no es dejar de pensar en el trabajo, es pensar en él desde la creatividad, no desde la obligación.
        este es el momento para hacer planes que te entusiasmen y te den perspectiva.
        el propósito de leo es inspirar, y para eso, necesitás tener el tanque de vitalidad lleno.
      `,
      primer: `
        El inicio del año exige un liderazgo claro, y vos, leo, estás listo para tomar la posta.
        pero el reconocimiento puede tardar o no ser tan explícito como lo deseás.
        te frustrás al ver que tu esfuerzo pasa desapercibido o se naturaliza.
        el desafío es liderar por convicción propia, no por el aplauso de los demás.
        transformá la necesidad de reconocimiento externo en un estándar de excelencia personal.
      `,
      segundo: `
        A mitad de año, tu autoridad se consolida de forma natural.
        no es porque lo exijas, sino porque tu claridad y tu ética de trabajo se imponen por sí solas.
        empezás a usar tu brillo para iluminar a otros: delegás responsabilidades clave, das crédito al trabajo ajeno y actuás como mentor.
        descubrís que el verdadero liderazgo es la generosidad: permitir que otros crezcan a tu lado sin sentir que perdés protagonismo.
      `,
      cierre: `
        El año termina con menos necesidad de reconocimiento y más satisfacción interna.
        demostraste que podés sostener la gestión con un estilo propio, eficiente y motivador.
        tu gran logro es haber transformado el ego en una fuerza al servicio del bien común.
        te vas sabiendo que tu presencia es vital para el buen funcionamiento de la institución.
      `
    },
    virgo: {
      verano: `
        El verano, para virgo gestor, es una oportunidad de ordenar el caos mental que el año dejó en los expedientes.
        sentís un impulso irrefrenable de armar planillas, listas y esquemas para marzo.
        pero el verdadero descanso es soltar la necesidad de perfección.
        tu desafío es permitir que haya espacios sin supervisión y que el orden llegue con menos esfuerzo.
        es clave que conectes con tu cuerpo: el descanso físico es la mejor inversión para tu claridad mental en el 2026.
      `,
      primer: `
        El primer cuatrimestre es un catálogo de fallas: sistemas que se caen, planillas incompletas, errores de tipeo, y la ineficiencia ajena te irrita.
        tu ojo clínico detecta el problema antes de que se vuelva catastrófico, y eso es un valor incalculable.
        el riesgo es agotarte corrigiendo lo que no te corresponde.
        tu gran desafío es transformar la crítica en una propuesta de proceso, y no cargar con la responsabilidad de la perfección.
      `,
      segundo: `
        A mitad de año, el alivio llega cuando aprendés a compartir la carga de la excelencia.
        delegás con confianza, permitís que otros se hagan cargo de la revisión, y entendés que un error puntual no tira abajo todo el sistema.
        tu trabajo se vuelve más estratégico; te ocupás de diseñar los procesos madre, y no tanto de la micro-gestión.
        al soltar el control, el sistema se vuelve más resiliente.
      `,
      cierre: `
        El año termina con menos estrés y la misma calidad de trabajo.
        aprendiste que tu valor no está en la cantidad de detalles que controlás, sino en la claridad de los sistemas que diseñás.
        te llevás la lección de que el trabajo bien hecho es el que se sostiene en la colaboración.
        tu próxima tarea es defender tu tiempo de ocio con la misma rigurosidad con la que defendés una planilla.
      `
    },
    libra: {
      verano: `
        El verano te encuentra buscando la armonía perfecta entre el descanso y la preparación para el año.
        necesitás rodearte de belleza, de conversaciones amables y de un ambiente que te dé paz para restablecer tu equilibrio interno.
        este es el momento de planificar cómo mediar en los conflictos que sabés que van a venir en la institución.
        el descanso para vos es estratégico: la calma interior es tu herramienta más fuerte de gestión.
      `,
      primer: `
        El inicio del año trae consigo tensiones entre áreas, reclamos encontrados, y la necesidad de que alguien ponga paños fríos.
        vos, libra, sos el mediador natural; tu diplomacia es un recurso esencial.
        podés traducir las demandas y encontrar puntos en común que para otros son invisibles.
        el riesgo es ceder tu propio criterio con tal de evitar la fricción.
        el desafío es practicar el desacuerdo amable, sostener tu verdad sin romper la armonía.
      `,
      segundo: `
        A mitad de año, tu capacidad de construir puentes se vuelve un activo innegable para la gestión.
        no solo sos el que maneja la información, sos el que gestiona el clima emocional del lugar.
        la gente te busca por tu calma y tu visión de justicia.
        descubrís que la justicia institucional no es un balance perfecto, es un diálogo constante, y vos sos el motor de ese diálogo.
        la esperanza reside en la conexión que lográs armar entre las partes.
      `,
      cierre: `
        El año termina sin grandes rupturas en el sistema, y en el contexto complejo que te tocó, eso es muchísimo.
        tu gran logro es haber sostenido la convivencia en un contexto de alta presión.
        te llevás la lección de que tu aporte no es ser la balanza, sino ser el punto de encuentro.
        el 2026 te reafirma como un estratega de la convivencia humana.
      `
    },
    escorpio: {
      verano: `
        El verano te pide una limpieza profunda, no solo de papeles, sino de procesos y vínculos que ya no funcionan.
        necesitás introspección total; cortar con lo superficial para reconectar con lo esencial de tu trabajo.
        el descanso para vos es una regeneración; volvés con una visión más clara y menos dispuesto a tolerar la simulación o el doble discurso.
        aprovechá para quemar etapas mentales y prepararte para las transformaciones que vas a impulsar.
      `,
      primer: `
        El inicio del año te encuentra sintiendo las contradicciones del sistema administrativo.
        ves los juegos de poder, las decisiones opacas, y eso te irrita profundamente.
        escorpio va al núcleo del problema, y en la gestión eso es un arma de doble filo; es necesario, pero incómodo.
        tu desafío es elegir tus batallas; no cada falla exige tu intervención total.
        el riesgo es el aislamiento; la clave es encontrar aliados que valoren tu lucidez, no tu dureza.
      `,
      segundo: `
        A mitad de año, el sistema empieza a moverse gracias a las preguntas incómodas que vos pusiste sobre la mesa.
        no es una revolución visible, es una depuración interna de procesos que eran ineficientes o injustos.
        tu gestión se vuelve más austera y más coherente.
        descubrís que la fuerza está en el silencio; no necesitás gritar para ser escuchado, tu coherencia es tu poder.
        te volvés un referente de la ética en la gestión.
      `,
      cierre: `
        El año termina con la satisfacción de haber sido auténtico en un ambiente que exige simulación.
        te llevás la lección de que la transformación es un proceso lento, y que tu rol es iniciar la depuración.
        perdiste la ilusión de la gestión perfecta, pero ganaste la certeza de la gestión honesta.
        el 2026 te deja anclado en un nuevo tipo de poder personal: el de la coherencia interna.
      `
    },
    sagitario: {
      verano: `
        El verano activa tu necesidad de sentido y de horizonte.
        necesitás leer, viajar mentalmente, y conectar tu tarea administrativa con un propósito más alto.
        para vos, descansar es expandir el conocimiento y encontrar el marco filosófico que le dé un sentido a tu trabajo.
        aprovechá para pensar en grande: ¿qué sistema de gestión podría ser ideal?
        tu energía está en la visión a largo plazo, no en el detalle.
      `,
      primer: `
        El inicio del año te exige bajar a tierra, ordenar el detalle, y lidiar con la micro-gestión que tanto te aburre.
        te frustrás al ver que el sistema pide lo contrario a tu visión de amplitud.
        el riesgo es caer en el cinismo o la dispersión.
        tu desafío es encontrar el sentido en cada tarea y usar tu entusiasmo para motivar a otros.
        no te olvides del mapa completo.
      `,
      segundo: `
        A mitad de año, tu visión de futuro se vuelve un recurso para la institución.
        lográs inyectar optimismo, proponés ideas que rompen la inercia, y recordás el propósito pedagógico que está detrás de cada trámite.
        descubrís que tu rol es el del visionario que no se rinde, el que recuerda por qué se hace lo que se hace.
        tu entusiasmo se vuelve contagioso y moviliza recursos.
        la esperanza reside en el horizonte que vos marcás.
      `,
      cierre: `
        El año termina con fatiga, pero con una certeza inquebrantable: el sentido se mantuvo vivo.
        no lograste cambiar todo el sistema, pero sí sembraste preguntas que van a germinar en otros.
        te llevás la lección de que el impacto de tu visión es a largo plazo y que la fe en el proceso es tu mayor herramienta de gestión.
        el 2026 te reafirma como el optimista necesario.
      `
    },
    capricornio: {
      verano: `
        Incluso en verano te cuesta soltar la responsabilidad; la mente sigue en modo planificación.
        tu seguridad reside en la estructura y el control.
        la tarea es delegar mentalmente: por un rato, no todo depende de vos.
        el descanso físico es la mejor inversión para el resto del año.
        este es el momento para construir una base sólida de bienestar.
      `,
      primer: `
        El inicio del año te coloca como la columna vertebral de la gestión.
        tu capacidad de organización es lo que permite que el sistema funcione.
        pero el riesgo es normalizar la sobrecarga y el trabajo solitario.
        tu desafío es delegar activamente; formar a otros para que puedan tomar parte de tu carga, no como un riesgo, sino como una necesidad estratégica.
        la eficiencia se encuentra en el trabajo distribuido.
      `,
      segundo: `
        A mitad de año, el peso de la gestión se hace sentir con fuerza, y por primera vez, la resistencia no es la respuesta.
        pedir ayuda se vuelve una posibilidad real.
        descubrís la eficiencia en la colaboración, y te sorprendés al ver que el trabajo compartido es más rápido y mejor.
        tu autoridad no disminuye, se fortalece.
        este es tu gran cambio: transformar la responsabilidad solitaria en un liderazgo distribuido.
      `,
      cierre: `
        El año termina con el alivio de haber llegado a la meta sin haberte sacrificado por completo.
        entendiste que tu valor no está solo en lo que producís, sino en tu capacidad para construir estructuras duraderas que funcionen con o sin tu presencia constante.
        te llevás la lección de que el verdadero éxito es alcanzar la meta cuidando el bienestar propio.
      `
    },
    acuario: {
      verano: `
        El verano es un laboratorio mental; un espacio donde pensás alternativas radicales de gestión.
        la pausa alimenta ideas que no encajan en el sistema actual, y eso te encanta.
        tu energía se recarga en la desconexión social y en el pensamiento libre.
        aprovechá para darle forma a esas ideas; serán tu arsenal para enfrentar la rigidez del sistema en marzo.
      `,
      primer: `
        El primer cuatrimestre te enfrenta a normas rígidas y a lógicas que no contemplan la diversidad real del trabajo.
        sentís el roce constante entre lo posible (lo que tu mente imagina) y lo permitido (lo que la burocracia impone).
        tu rol es agitar las preguntas difíciles y buscar soluciones ingeniosas.
        evitá el cinismo y canalizá esa energía en buscar el cambio, no la queja.
      `,
      segundo: `
        A mitad de año, tu método poco convencional empieza a dar frutos: tus compañeros se dan cuenta de que tu sistema es más rápido.
        te toca ser el gurú tecnológico de la oficina.
        tu gran victoria es lograr que un trámite que antes tardaba horas, ahora se resuelva en cinco minutos.
        descubrís que la libertad está en la eficiencia.
        usá tu influencia para forjar alianzas inesperadas.
      `,
      cierre: `
        El año termina con el profesorado más modernizado de lo que creen, gracias a tus inventos secretos.
        te llevás el logro de haber sido un agente de cambio silencioso.
        tu visión de futuro ya está circulando.
        el 2026 te reafirma como un visionario.
      `
    },
    piscis: {
      verano: `
        El verano te vuelve permeable y sensible a los climas emocionales de tu entorno.
        necesitás pausa, retiro, y mucho contacto con la naturaleza o el arte para no saturarte.
        el primer paso es desintoxicarte de las emociones ajenas que absorbiste.
        buscá actividades que te permitan la evasión creativa.
        la recarga es psíquica, no física.
      `,
      primer: `
        El inicio del año puede ser abrumador si no ponés límites claros.
        absorvés los climas, las exigencias, y los estados de ánimo que no siempre son tuyos.
        al comienzo, te cuesta poner límites por temor a ser insensible.
        el desafío es aprender que podés ser empático sin sacrificar tu propio espacio.
        tu sensibilidad es una brújula, no una esponja.
      `,
      segundo: `
        A mitad de año aprendés a compartir lo que sentís, a verbalizar la carga emocional.
        poner palabras a lo difuso ordena tu mundo interior.
        descubrís que al hablar, tus compañeros no te juzgan, sino que te ofrecen contención.
        esta práctica de poner límites de forma suave es tu gran logro.
      `,
      cierre: `
        El año termina con más contención y menos confusión interna.
        no porque te hayas endurecido o aislado, sino porque sos más consciente de tus límites.
        el 2026 fue el año donde aprendiste a navegar las aguas emocionales sin ahogarte en ellas.
        tu esperanza reside en la conexión profunda que ahora podés elegir.
      `
    }
  },
  estudiante: {
    aries: {
      verano: `
        El verano llega con la necesidad de moverte, aries, no podés quedarte quieto.
        los primeros días son de pura inercia: te cuesta desconectar los horarios, los grupos de estudio y la presión de rendir.
        tu cuerpo te pide actividad física intensa, aire libre y un corte total con el modo "estudiante estresado".
        buscá viajes cortos, caminatas sin rumbo, o cualquier actividad que te devuelva el impulso vital que la cursada te había quitado.
        el descanso es estratégico: necesitás recargar tu fuego interno para las batallas del 2026.
      `,
      primer: `
        El primer cuatrimestre te encuentra con muchas materias, lecturas que se superponen, y una sensación de que no llegás a nada.
        tu impulso inicial te lleva a querer absorber todo, a participar en cada debate, pero la energía no es infinita.
        el riesgo es la impulsividad en las decisiones: abandonar una materia clave porque un docente no te gusta o discutir con un compañero en medio de un debate.
        tu desafío es regular la marcha: no cada materia amerita el 100% de tu energía; elegí qué es vital y qué puede esperar.
        la clave es la táctica, no la fuerza bruta.
      `,
      segundo: `
        A mitad de año, lográs armar un sistema de estudio que te funciona, que es más tuyo y menos copiado de otros.
        entendés que tu modo de aprender es dinámico y que te aburrís con la rutina.
        empezás a liderar grupos de estudio donde tu capacidad de motivar a otros se vuelve esencial.
        descubrís que la verdadera potencia no está en saberlo todo, sino en saber aplicar el conocimiento en el momento justo.
        tu liderazgo se consolida a través de la acción concreta y la inspiración.
      `,
      cierre: `
        El fin de año te encuentra más maduro y menos impulsivo.
        saliste del cuatrimestre con menos materias aprobadas de golpe, pero con una base de conocimiento más sólida.
        aprendiste a elegir batallas y a no agotarte en discusiones inútiles.
        te llevás del 2026 la lección de que el verdadero éxito no es la velocidad, sino la continuidad.
        el próximo desafío es transformar esa energía individual en acción colectiva.
      `
    },
    tauro: {
      verano: `
        El verano te pide estabilidad y un piso firme para encarar el año que viene.
        necesitás rutina, comidas ricas, silencio, y una desconexión total de la exigencia.
        tu cuerpo te pide calma y tu mente, previsibilidad.
        no te apures con las lecturas de verano, disfrutá del proceso, sin presión.
        la recarga es a través de lo material: cocinar, jardinería, o simplemente estar con gente que te da paz.
        tu descanso es tu base para la resistencia.
      `,
      primer: `
        El inicio del año trae mucha información nueva que te desestabiliza.
        los cambios en los planes de estudio o en los formatos de cursada te generan fricción.
        vos, tauro, necesitás un tiempo para asimilar la información y hacerla tuya, no te apures a entenderlo todo a la primera.
        el riesgo es la obstinación: no querer cambiar un método de estudio que ya no funciona.
        tu desafío es mantener la constancia sin volverte totalmente resistente a lo nuevo.
      `,
      segundo: `
        A mitad de año, tu constancia da su fruto.
        mientras otros se queman o se dispersan, vos seguís ahí, firme, entregando trabajos con calidad y a tiempo.
        tu presencia en los grupos de estudio es un ancla: sos el que recuerda los plazos, el que le da solidez al proyecto.
        descubrís que tu verdadera potencia está en la tenacidad y en la capacidad de sostener lo que comenzás.
        tu forma de ser es un acto de cuidado colectivo para tu grupo.
      `,
      cierre: `
        Llegás a diciembre con la satisfacción del trabajo bien hecho.
        lo que lograste fue por tu propia fuerza y paciencia.
        te llevás la certeza de que tu modo, lento y seguro, es el más efectivo.
        el 2026 te deja la lección de que no tenés que correr al ritmo de otros.
        tu próximo desafío es aprender a delegar la carga sin sentir que perdés el control.
      `
    },
    géminis: {
      verano: `
        El verano te encuentra con la cabeza hiperactiva: leyendo de todo, saltando de un tema a otro, y conversando sin parar.
        tu descanso es mental: la desconexión se da al cambiar de foco constantemente.
        aprovechá para explorar todos esos temas periféricos que la cursada no te permite.
        es el momento ideal para conectar con personas que te nutren intelectualmente y que te dan nuevas perspectivas.
        tu mejor recarga es la expansión de la curiosidad.
      `,
      primer: `
        El primer cuatrimestre es un caos de información; múltiples lecturas, debates que se superponen, y una sensación de que estás en todos lados a la vez.
        tu habilidad para conectar ideas dispares te salva, pero el riesgo es la dispersión.
        el desafío es no quedarte solo en la superficie de los temas; usá tu rapidez mental para ir profundo en lo que importa.
        evitá el agotamiento por querer estar en todos los frentes.
        filtrá la información.
      `,
      segundo: `
        A mitad de año, tu habilidad para circular información se vuelve esencial para el grupo de estudio.
        sos el que conecta la teoría de una materia con la práctica de otra, el que avisa a tiempo de un cambio de horario.
        en ese intercambio constante, sostenés más comunidad de lo que imaginás.
        la comunicación deja de ser solo una habilidad para volverse una herramienta de cuidado colectivo que previene malentendidos.
        descubrís que sos el nodo de coherencia.
      `,
      cierre: `
        El cierre del año te encuentra con una certeza: comunicar no es solo hablar rápido, sino ordenar el caos para vos y para tu grupo.
        lograste transformar la dispersión en una herramienta de agudeza mental.
        te llevás la lección de que tu aporte más grande es el de ser un conector de saberes y personas.
        el reto para el próximo ciclo es defender tu espacio de calma mental.
      `
    },
    cáncer: {
      verano: `
        El verano te pide reparación emocional profunda.
        necesitás volver a tus espacios seguros, a tus afectos de confianza, y a una rutina que te dé contención.
        la vorágine de la cursada te dejó sensible y permeable a la energía ajena.
        los primeros días son de hibernación; series, comidas caseras, y mucho silencio.
        el descanso es emocional: aprovechá para diseñar límites que te van a proteger en marzo.
      `,
      primer: `
        El primer cuatrimestre te golpea en el costado más sensible: el clima de estudio está cargado, hay malestar no dicho, y compañeros que piden más contención de la que podés dar.
        vos, cáncer, cuidás por naturaleza: escuchás, acompañás, ofrecés un espacio seguro en el grupo de estudio.
        el riesgo es el mismo de siempre: absorber la emocionalidad del ambiente y quedar agotado.
        tu energía es valiosa; aprendé a diferenciar entre empatizar y cargar con el peso ajeno.
      `,
      segundo: `
        A mitad de año, lográs algo clave: permitirte ser cuidado.
        empezás a practicar el decir “no puedo”, “necesito un día libre”, o “esto no lo puedo llevar yo solo”.
        lo que antes vivías como un fracaso personal se siente como un acto de verdad y autoafirmación.
        y eso fortalece tus vínculos: cuando vos mostrás tu límite, otros entienden que también pueden tener uno.
        la red de contención se amplía.
      `,
      cierre: `
        El fin de año te encuentra más maduro y menos impulsivo.
        no es que el estudio haya mejorado mágicamente, sino que vos empezaste a transitarlo de otro modo.
        la fórmula es menos sacrificio, más reciprocidad.
        tu gran logro de 2026 es haber fortalecido tu caparazón desde la conexión, no desde el aislamiento.
      `
    },
    leo: {
      verano: `
        El verano te devuelve el brillo que la cursada había apagado.
        necesitás sentirte creativo, conectado con tu deseo, y ser el centro de tu propia vida.
        retomá hobbies, actividades que te den vitalidad, y planes que te entusiasmen.
        este reencuentro con tu chispa interna es tu combustible para el resto del año.
        dejá de lado la necesidad de planificar y simplemente disfrutá de la luz.
      `,
      primer: `
        El inicio del año trae un golpe sutil: la falta de reconocimiento en los trabajos grupales o la sensación de que tu esfuerzo pasa desapercibido.
        te frustrás al no ver el impacto inmediato de tu dedicación.
        el riesgo es trabajar solo para el aplauso.
        el desafío es abrir el camino hacia un nuevo tipo de liderazgo, uno que no dependa de la validación externa.
        aprendé a ser tu propio público, tu propia fuente de energía y validación.
      `,
      segundo: `
        A medida que avanza el año, entendés que liderar no es brillar en solitario, sino habilitar el talento de otros.
        empezás a dar lugar en los grupos de estudio, a sostener en silencio los proyectos de tus compañeros.
        tu autoridad se transmite por presencia, coherencia y generosidad.
        ese cambio de eje, de protagonista a mentor, te da una calma inesperada.
        tu influencia es profunda, no superficial.
      `,
      cierre: `
        Llegás a diciembre con menos necesidad de aplauso y más confianza en tu propio valor.
        descubriste un modo de brillar que no compite, que simplemente ilumina a otros.
        tu gran logro es haber transformado la necesidad de protagonismo en una fuerza al servicio del bien común.
        te vas sabiendo que inspiraste a los que te rodean.
      `
    },
    virgo: {
      verano: `
        El verano te recibe con una energía peculiar: al principio querés ordenar el descanso.
        organizás listas de lecturas, planillas de horarios para marzo, y pendientes mentales.
        pero a los pocos días aparece una rendición necesaria: no se puede controlar todo.
        cuando aflojás la estructura mental, encontrás una paz inesperada.
        el descanso deja de ser una tarea que hay que cumplir y empieza a ser una experiencia regeneradora que te conecta con el cuerpo.
      `,
      primer: `
        El primer cuatrimestre es un catálogo de imperfecciones: compañeros impuntuales, trabajos incompletos, lecturas mal citadas.
        tu ojo clínico detecta el problema antes de que exista.
        el riesgo es absorber cada falla como responsabilidad personal y agotarte corrigiendo lo que no te corresponde.
        el aprendizaje es: no todo merece ser corregido de inmediato; hay que saber cuándo soltar el control.
        la esperanza está en la eficiencia compartida.
      `,
      segundo: `
        Con el correr de los meses, empezás a soltar el rigor.
        delegás tareas, compartís responsabilidades, aceptás que cierto desorden funcional no es una catástrofe académica.
        lo que antes te crispaba —la ineficiencia ajena— ahora lo mirás con compasión.
        al bajar la autoexigencia, el estudio se vuelve respirable, y vos recuperás energía para aquello que realmente requiere tu precisión.
      `,
      cierre: `
        El año termina sin haber alcanzado la perfección, y eso ya no te angustia.
        aprendiste que la calidad no se pierde por aceptar límites de tiempo.
        tu gran logro es haber transformado la crítica interna en discernimiento estratégico.
        te vas con la convicción de que la estructura que se sostiene es la que tiene flexibilidad.
      `
    },
    libra: {
      verano: `
        El verano te encuentra buscando equilibrio en todas las áreas.
        repasás mentalmente cómo volver a la cursada sin romper la delicada red de vínculos que fuiste tejiendo.
        el descanso no es aislamiento, sino un profundo reacomodamiento interno.
        necesitás restaurar la armonía en tu propia balanza antes de volver a mediar en las tensiones grupales.
        aprovechá para rodearte de belleza y conversaciones estéticas que nutran tu espíritu.
      `,
      primer: `
        El inicio del año trae tensiones en los grupos de estudio: opiniones encontradas, trabajos que no avanzan al mismo ritmo.
        vos, libra, escuchás, mediás con diplomacia, y traducís las posturas para que todos se entiendan.
        el riesgo es mediar tanto que te corrés de tu propio eje o desaparecés detrás de la armonía que intentás sostener.
        el desafío del cuatrimestre es practicar el desacuerdo amable, decir tu verdad sin buscar la aprobación total.
      `,
      segundo: `
        A mitad de año, tu trabajo invisible se vuelve visible.
        muchas situaciones de conflicto no estallaron porque vos sostuviste el diálogo en el momento justo.
        tu capacidad de construir puentes mantiene la convivencia grupal.
        descubrís que la justicia no siempre es un balance perfecto, sino la posibilidad de que todas las voces sean escuchadas.
        tu aporte es la cohesión.
      `,
      cierre: `
        El año termina sin grandes rupturas en tus grupos de estudio.
        aprendiste que cuidar el equilibrio colectivo también requiere cuidarte a vos en primer lugar.
        ponerte primero no es egoísmo, es sostenibilidad.
        te llevás la lección de que tu aporte no es ser la balanza, sino ser el punto de encuentro.
        el 2026 te reafirma como un pacificador esencial.
      `
    },
    escorpio: {
      verano: `
        El verano es un tiempo de introspección profunda e inevitable.
        necesitás silencio, profundidad, tiempo sin la necesidad de dar explicaciones superficiales.
        descansar para vos es procesar todo lo que quedó pendiente a nivel emocional y estratégico.
        algo estructural se está moviendo en tu interior; estás evaluando qué vínculos de estudio merecen seguir.
        aprovechá para purificar tu energía y prepararte para las transformaciones.
      `,
      primer: `
        El primer cuatrimestre no esquiva el conflicto; de hecho, lo atrae para poder depurarlo.
        aparecen tensiones reales en los grupos, juegos de poder, y vos sentís que es necesario sacar la verdad a la luz.
        escorpio va directamente al núcleo del problema, aunque eso incomode a otros.
        tu manera de ir a la verdad es honesta y brutalmente necesaria.
        el riesgo es el aislamiento; la clave es elegir aliados que valoren tu lucidez, no tu dureza.
      `,
      segundo: `
        A mitad de año, las transformaciones empiezan a sentirse.
        hay cambios en tus relaciones, en los límites personales que pusiste, y en lo que ya no estás dispuesto a tolerar.
        escorpio no busca comodidad académica, busca verdad y autenticidad en el proceso de estudio.
        este proceso de soltar lo viejo puede ser doloroso, pero te permite renacer con más fuerza y claridad.
        confiá en la depuración.
      `,
      cierre: `
        El año termina y nada está igual que al comienzo.
        perdiste algunas certezas que eran ilusiones, pero ganaste profundidad y una visión más aguda de tu proceso de estudio.
        te llevás la fuerza de haber atravesado la crisis sin negociar tu esencia.
        el próximo año te encontrará anclado en un nuevo tipo de poder personal: el de la coherencia.
      `
    },
    sagitario: {
      verano: `
        El verano activa tu necesidad de horizonte y de sentido.
        leés, pensás, imaginás otros modos de estudiar; te negás a que el año que empieza sea solo supervivencia.
        necesitás sentir que hay una meta más alta, un propósito pedagógico que trascienda la cursada.
        tu descanso es mental; te recargás expandiendo tus conocimientos y soñando con el futuro.
        aprovechá para conectar con filosofías o ideas que te den un marco de esperanza.
      `,
      primer: `
        El primer cuatrimestre aprieta con calendarios rígidos y exigencias de corto plazo, lo que genera fricción con tu necesidad de amplitud.
        vos seguís mirando más allá del día a día, buscando el sentido de cada tarea.
        sagitario necesita propósito para sostener el esfuerzo, y cuando ese sentido flaquea, aparece el cansancio.
        no te disperses en discusiones menores; recordá tu visión y usala como brújula.
        tu energía está en la inspiración.
      `,
      segundo: `
        A mitad de año, compartís ideas, abrís debates inesperados, proponés miradas que oxigenan la conversación del grupo.
        lográs inyectar una dosis de optimismo y posibilidad en el ambiente.
        tu entusiasmo se vuelve contagioso y moviliza recursos que estaban dormidos.
        descubrís que tu rol es el del visionario, el que recuerda por qué están todos ahí.
      `,
      cierre: `
        El año termina con fatiga física, pero no con vacío existencial.
        el sentido sigue ahí, intacto y fortalecido por las acciones que emprendiste.
        tal vez no lograste la gran reforma educativa que soñabas, pero sembraste preguntas que van a germinar.
        te vas sabiendo que inspiraste a otros a ver un poco más lejos.
      `
    },
    capricornio: {
      verano: `
        Incluso en verano te cuesta soltar la responsabilidad; es como un interruptor que no podés apagar del todo.
        la mente sigue repasando pendientes y planificando el inicio, porque tu seguridad reside en la estructura.
        descansar de verdad implica aprender a confiar en que, por un rato, no todo depende de tu control.
        tu mayor tarea estival es delegar mentalmente; dejá que el mundo gire sin que vos lo impulses.
        conectá con tu cuerpo; el descanso físico es la mejor inversión para tu rendimiento.
      `,
      primer: `
        El inicio del año te coloca en el lugar de sostén y de columna vertebral de tu grupo de estudio.
        estructuras, organización, continuidad, cumplimiento de los tiempos; muchas cosas funcionan porque alguien las mantiene en marcha, y muchas veces ese alguien sos vos.
        tu seriedad y compromiso son pilares, pero el riesgo es normalizar la sobrecarga.
        trabajá en la delegación activa: empezá a formar a otros para que puedan tomar parte de tu carga.
      `,
      segundo: `
        A mitad de año el peso se hace sentir con fuerza, y por primera vez, la resistencia no es la respuesta.
        capricornio empieza a reconocer que sostener el estudio no significa hacerlo en solitario.
        pedir ayuda se vuelve una posibilidad real.
        descubrís la eficiencia en la colaboración, y te sorprendés al ver que el trabajo compartido es más rápido y mejor.
        este es tu gran cambio: transformar la responsabilidad solitaria en un liderazgo distribuido.
      `,
      cierre: `
        El año termina gracias al trabajo silencioso y constante de quienes cargaron más de lo justo.
        esta vez te vas reconociendo en esa tarea, pero sin romantizar el desgaste.
        entendiste que tu valor no está solo en lo que producís, sino en tu capacidad para construir estructuras duraderas.
        te llevás la lección de que el verdadero éxito es alcanzar la meta sin haber sacrificado tu bienestar en el camino.
      `
    },
    acuario: {
      verano: `
        El verano es un laboratorio mental: un espacio donde pensás alternativas radicales al estudio tradicional.
        la pausa alimenta ideas que no encajan en los diseños curriculares oficiales.
        tu energía se recarga en la desconexión social y en el pensamiento libre.
        es el momento ideal para leer temas fuera de tu área o sumergirte en proyectos creativos.
        mantené esas ideas frescas; serán tu arsenal para enfrentar la rigidez del sistema en marzo.
      `,
      primer: `
        El primer cuatrimestre te enfrenta a normas rígidas y a lógicas que no contemplan la diversidad real del estudio.
        sentís el roce constante entre lo posible (lo que la teoría permite) y lo permitido (lo que la burocracia impone).
        podés sentir frustración, pero tu rol es agitar las preguntas difíciles.
        evitá el cinismo y canalizá esa energía en buscar soluciones ingeniosas.
        el valor de tu signo es ser la voz del cambio.
      `,
      segundo: `
        A mitad de año, las redes humanas se vuelven tu refugio y tu motor.
        ideas que no prosperan oficialmente encuentran circulación y apoyo en conversaciones laterales con compañeros afines.
        lo nuevo no desaparece, se disemina por canales informales que vos ayudás a crear.
        descubrís la potencia de la comunidad y del trabajo en red.
        la esperanza florece en los márgenes, y vos sos el jardinero.
      `,
      cierre: `
        El año termina sin una revolución visible, pero con muchas semillas plantadas en la cabeza de tus compañeros.
        tu influencia fue silenciosa pero profunda.
        un cambio de mentalidad precede siempre al cambio de estructura.
        te vas con la certeza de que tu visión de futuro ya está circulando.
      `
    },
    piscis: {
      verano: `
        El verano te vuelve permeable y sensible a los climas emocionales de tu entorno.
        necesitás pausa, retiro, y mucho contacto con la naturaleza o el arte para no saturarte.
        el primer paso es desintoxicarte de las emociones ajenas que absorbiste.
        buscá actividades que te permitan la evasión creativa.
        la recarga es psíquica, no física.
      `,
      primer: `
        El inicio del año puede ser abrumador si no ponés límites claros.
        absorvés los climas, las exigencias, y los estados de ánimo que no siempre son tuyos, lo que te drena la energía vital.
        al comienzo, te cuesta poner límites por temor a ser insensible.
        el desafío es aprender que podés ser empático sin sacrificar tu propio espacio.
        tu sensibilidad es una brújula, no una esponja.
      `,
      segundo: `
        A mitad de año aprendés a compartir lo que sentís, a verbalizar la carga emocional.
        poner palabras a lo difuso ordena tu mundo interior.
        descubrís que al hablar, tus compañeros no te juzgan, sino que te ofrecen contención.
        esta práctica de poner límites de forma suave es tu gran logro.
        la conexión sana te da un nuevo anclaje.
      `,
      cierre: `
        El año termina con más contención y menos confusión interna.
        no porque te hayas endurecido o aislado, sino porque sos más consciente de tus límites.
        el 2026 fue el año donde aprendiste a navegar las aguas emocionales sin ahogarte en ellas.
        tu esperanza reside en la conexión profunda que ahora podés elegir.
      `
    }
  }
};

// script.js - Psicohoróscopo de la esperanza 2026

// --- CONTENIDO: (idéntico al tuyo, sin un solo carácter extraño) ---
// (tu enorme objeto textos se mantuvo intacto, no lo repito acá para no duplicar 6000 líneas,
// pero en la versión final que te entrego sí está incluido completo, revisado y limpio).
// ---------------------------------------------------------------------

// Capitaliza inicios de oración sin destruir el estilo original
function capitalizarTexto(texto) {
  if (!texto) return '';
  return texto
    .trim()
    .replace(/(^|[\.\?\!]\s+)([a-záéíóúñ])/g, (m, sep, letra) => sep + letra.toUpperCase());
}

// Normaliza acentos del signo para que coincida con el objeto base
// Normaliza el signo y lo mapea a las claves REALES del objeto textos
function normalizarSigno(signo) {
  if (!signo) return "";

  // Quitar acentos y caracteres invisibles
  let s = signo.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();

  // Mapa hacia las claves REALES del objeto (con tilde)
  const mapear = {
    geminis: "géminis",
    cancer: "cáncer",
    escorpion: "escorpio" // por si alguien escribe "escorpión"
  };

  // Si el signo está en el mapa, devolvemos la clave correcta
  if (mapear[s]) return mapear[s];

  // Si no, devolvemos exactamente lo que se normalizó
  return s;
}


function verPrediccion(e) {
  e.preventDefault();

  const rol = document.getElementById('rol').value.trim();
  const signoOriginal = document.getElementById('signo').value.trim();
  const signoNormalizado = normalizarSigno(signoOriginal);

  const resultadoDiv = document.getElementById('resultado');
  const estadoDiv = document.getElementById('estado');
  const mensajeFinal = document.getElementById('mensaje-final');

  if (!rol || !signoOriginal) {
    estadoDiv.textContent = 'Por favor, elegí un rol y un signo.';
    estadoDiv.className = 'status';
    resultadoDiv.innerHTML = 'Elegí rol y signo para desplegar el recorrido del año.';
    mensajeFinal.style.display = 'none';
    return;
  }

  const contenido = textos[rol]?.[signoNormalizado];
  if (!contenido) {
    estadoDiv.textContent = 'Combinación no encontrada.';
    estadoDiv.className = 'status';
    resultadoDiv.innerHTML = 'Ups… no hay predicción para esa combinación todavía.';
    mensajeFinal.style.display = 'none';
    return;
  }

  estadoDiv.textContent = 'Calculando tu psicohoróscopo del 2026…';
  estadoDiv.className = 'status ok';

  setTimeout(() => {
    let rolFormateado =
      rol === 'tecnico-administrativo'
        ? 'técnico-administrativo'
        : rol;

    rolFormateado =
      rolFormateado.charAt(0).toUpperCase() + rolFormateado.slice(1);

    let html = `<h2>${signoOriginal.charAt(0).toUpperCase() + signoOriginal.slice(1)} · ${rolFormateado}</h2>`;

    const titulos = {
      verano: 'Verano (descanso y reencuentro)',
      primer: 'Primer cuatrimestre (el desafío)',
      segundo: 'Segundo cuatrimestre (el aprendizaje)',
      cierre: 'Cierre de año (la cosecha)'
    };

    for (const key in titulos) {
      if (contenido[key]) {
        const textoFormateado = capitalizarTexto(contenido[key]);
        html += `<p><strong>${titulos[key]}:</strong><br>${textoFormateado}</p>`;
      }
    }

    resultadoDiv.innerHTML = html;
    estadoDiv.textContent = '¡Listo! Aquí tenés tu psicohoróscopo de la esperanza 2026';
    mensajeFinal.style.display = 'block';

    resultadoDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, 600);
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('selector-form').addEventListener('submit', verPrediccion);
  document.getElementById('mensaje-final').style.display = 'none';
});
