<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5

      #Actividad                
        <Actividad :cuestionario="cuestionario"/>

</template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Patronaje industrial de prendas de vestir',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> verificar la apropiación de los fundamentos técnicos relacionados con la interpretación de modelos, el patronaje de línea interior y deportiva, el <em>software</em> de patronaje y las operaciones de preparación y ensamble de muestras físicas. ',
      barajarPreguntas: true,
      titulo_aprobado: '¡Excelente! Ha superado la actividad',
      titulo_reprobado: 'No ha superado la actividad',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el propósito principal del patronaje industrial de prendas de vestir frente a las exigencias actuales del sector moda?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Interpretar diseños, bocetos y fichas técnicas para desarrollar patrones funcionales acordes con producción y prototipado.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Definir campañas comerciales, vitrinas y catálogos sin intervenir planos, moldes, proporciones ni procesos productivos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Seleccionar únicamente colores, estampados y tendencias para orientar la apariencia visual de cada colección.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Registrar ventas, inventarios y costos administrativos sin analizar estructura corporal ni especificaciones técnicas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Se evidencia comprensión del patronaje industrial como proceso técnico que transforma diseños en patrones viables para producción y prototipado.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión de los conceptos técnicos abordados.',
        },
        {
          id: 2,
          texto:
            '¿Qué aspectos deben analizarse antes de realizar una interpretación, plano, trazo o patrón industrial?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Marca, empaque, precio, canal de venta, concepto publicitario, fotografía comercial y temporada de lanzamiento.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Tipo de prenda, básico, plano, desahogos, cierres, ajustes, complementos, señalización, despiece y prototipado.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Color de tela, nombre comercial, tendencia, vitrina, promoción digital, etiqueta visual y estilo fotográfico.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Cantidad de seguidores, intención de compra, redes sociales, descuentos, exhibición y rotación comercial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Se reconoce el análisis previo como base para organizar técnicamente la interpretación y el desarrollo del patrón industrial.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión de los conceptos técnicos abordados.',
        },
        {
          id: 3,
          texto:
            '¿Qué caracteriza el uso del análisis de proporciones en la interpretación de modelos de prendas de vestir?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Permite sustituir los básicos y trabajar solo desde fotografías sin medidas ni referencias técnicas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Permite asignar nombres comerciales sin evaluar silueta, talla, línea de producción ni sistema de medida.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Permite obtener medidas de referencia al comparar imágenes, fichas o muestras con básicos y moldes base.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Permite eliminar la necesidad de desahogos, cierres, ajustes, complementos y verificación de prototipo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Se evidencia dominio del análisis de proporciones como recurso para traducir referentes visuales en medidas aplicables al patronaje.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión de los conceptos técnicos abordados.',
        },
        {
          id: 4,
          texto:
            '¿Por qué la línea de aplome o línea base de construcción es importante al trabajar patrones desde básicos?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Porque define el precio final de venta y la estrategia promocional de la prenda en el mercado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Porque reemplaza la señalización del molde y evita indicar hilo de tela, piquetes y piezas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Porque elimina el uso de cuadros de tallas y permite trazar únicamente por observación visual.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Porque permite alinear los básicos y controlar proporciones, recorridos y referencias del diseño.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Se demuestra comprensión de la línea base como referencia de aplome para organizar el trazo y controlar proporciones.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión de los conceptos técnicos abordados.',
        },
        {
          id: 5,
          texto:
            '¿Qué función cumple la manga sastre dentro del desarrollo de prendas estructuradas?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Cubrir el brazo respetando su inclinación anatómica mediante pinzas, cortes y hojas que favorecen forma y postura.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Eliminar la forma del brazo para generar una manga completamente recta, sin relación con la anatomía corporal.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Sustituir los recorridos de sisa por medidas comerciales sin evaluar movilidad, estructura ni ajuste del cuerpo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Reducir todos los complementos internos para trabajar únicamente con una manga plana sin despiece técnico.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Se evidencia comprensión de la manga sastre como pieza que incorpora la inclinación anatómica del brazo en prendas estructuradas.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión de los conceptos técnicos abordados.',
        },
        {
          id: 6,
          texto:
            '¿Qué nombres reciben comúnmente las dos hojas que conforman el desarrollo técnico de una manga sastre?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Delantero y posterior, porque corresponden a las dos vistas generales del cuerpo durante la toma de medidas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Hoja ancha o cimera y hoja angosta o bajera, porque organizan los cortes funcionales de la manga.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Contorno y largo, porque definen únicamente la medida horizontal y vertical de la manga terminada.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Escote y sisa, porque reemplazan el análisis de recorridos durante el trazo de mangas formales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Se reconoce la terminología técnica de cimera y bajera como componentes característicos del despiece de manga sastre.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión de los conceptos técnicos abordados.',
        },
        {
          id: 7,
          texto:
            '¿Qué enfoque principal orienta el patronaje de la chaqueta sastre masculina?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El desarrollo de estampados decorativos y bordados visibles sobre el delantero de la prenda terminada.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La eliminación de ajustes en espalda para conservar una prenda sin estructura ni horma corporal.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El ajuste y la horma, especialmente hacia la parte posterior y el ancho de espalda masculino.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'La reducción del plano a una sola pieza sin sistemas de cierre, bolsillos, forros ni solapas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Se evidencia apropiación del enfoque de ajuste y horma que orienta el patronaje de la chaqueta sastre masculina.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión de los conceptos técnicos abordados.',
        },
        {
          id: 8,
          texto:
            '¿Por qué la chaqueta tipo <em>bomber</em> puede desarrollarse desde una base sastre y no desde una base normal?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Porque se considera una prenda exclusivamente formal y no admite características casuales o deportivas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Porque no requiere flexibilidad, movimiento ni análisis de comodidad en el cuerpo del usuario.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Porque su patronaje elimina completamente sistemas de cierre, pretinas, mangas y ajustes de diseño.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Porque requiere ajuste a cintura y control de forma, manteniendo flexibilidad y funcionalidad en la prenda.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Se demuestra comprensión de la base sastre como punto de partida para controlar ajuste, forma y funcionalidad en la chaqueta bomber.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión de los conceptos técnicos abordados.',
        },
        {
          id: 9,
          texto:
            '¿Qué diferencia general presenta la sastrería femenina frente a la sastrería masculina según el componente?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La sastrería femenina suele trabajarse desde el básico superior industrial y no desde una base sastre específica.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'La sastrería femenina se desarrolla sin básicos, sin pinzas y sin análisis de ajuste sobre el cuerpo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La sastrería masculina utiliza únicamente básicos infantiles para mejorar el aplome del delantero.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La sastrería masculina elimina estructura, postura y horma para conservar prendas sin ajustes posteriores.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Se reconoce que la chaqueta sastre femenina se desarrolla desde el básico superior industrial, aplicando ajustes e interpretaciones.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión de los conceptos técnicos abordados.',
        },
        {
          id: 10,
          texto:
            '¿Qué piezas internas deben contemplarse en el desarrollo de una chaqueta sastre femenina completamente forrada?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Solo piezas decorativas externas como botones visibles, estampados, ribetes de contraste y acabados comerciales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Refuerzos, entretelas, falsos, forros y piezas internas que aportan estructura, acabado y calidad industrial.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Únicamente piezas de empaque, etiquetas de precio, marquillas promocionales y elementos de exhibición.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Solo moldes exteriores sin considerar terminación interna, clima, material, maquinaria ni requerimientos de empresa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Se evidencia comprensión de la importancia de refuerzos, entretelas, falsos y forros en el despiece de una chaqueta sastre.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión de los conceptos técnicos abordados.',
        },
        {
          id: 11,
          texto:
            '¿Qué aspecto facilita la construcción de un abrigo asimétrico en el proceso de patronaje?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Trabajar el delantero cerrado para evitar diferencias de largo, cruce, cuello, botones y bolsillos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Eliminar toda referencia visual para construir la prenda únicamente desde medidas estandarizadas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Utilizar plano abierto en delantero para identificar la asimetría, el cruce, los largos y los detalles.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Trazar ambos lados idénticos para conservar simetría, aunque el diseño presente diferencias visibles.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Se demuestra dominio del plano abierto como estrategia para identificar y trazar la asimetría del abrigo.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión de los conceptos técnicos abordados.',
        },
        {
          id: 12,
          texto:
            '¿Qué debe considerarse en el patronaje de mangas kimona y ranglán frente a la unión brazo-tronco?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Que conservan siempre el corte tradicional de sisa y no modifican el eje anatómico de rotación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Que se trabajan únicamente en prendas inferiores y no requieren análisis de movimiento del brazo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Que eliminan el análisis de desahogos porque se ajustan al cuerpo sin necesidad de amplitud.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Que eliminan o desplazan el corte de unión, por lo cual requieren amplitudes que permitan movimiento.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Se reconoce que las mangas kimona y ranglán modifican la unión brazo-tronco y exigen amplitudes funcionales.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión de los conceptos técnicos abordados.',
        },
        {
          id: 13,
          texto:
            '¿Qué criterio técnico debe guiar el análisis e interpretación de capas dentro del patronaje industrial?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El vuelo requerido, la relación con faldas semirotondas o rotondas y la aplicación de pinzas cuando corresponda.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'La reducción de toda amplitud para que la capa conserve una estructura rígida y sin movimiento corporal.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La selección de nombres comerciales sin tener en cuenta caída, volumen, material ni construcción del patrón.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El uso exclusivo de pretinas y aletillas, porque las capas se construyen como pantalones formales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Se evidencia comprensión del vuelo y las construcciones rotondas como criterios para interpretar capas en patronaje.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión de los conceptos técnicos abordados.',
        },
        {
          id: 14,
          texto:
            '¿Qué caracteriza al pantalón sudadera dentro del análisis de patronaje y funcionalidad?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Pertenece a la línea formal y exige estructuras rígidas, tiro reducido y cierre con solapa sastre.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Pertenece a la línea deportiva, suele presentar holguras en tiro y usa encauchados o cordones.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Pertenece únicamente a sastrería masculina y se construye siempre con pretina recta entretelada.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Pertenece a ropa interior femenina y se desarrolla exclusivamente con descuento de copa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Se reconoce el pantalón sudadera como prenda deportiva que requiere holgura, ajuste flexible y sistemas funcionales.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión de los conceptos técnicos abordados.',
        },
        {
          id: 15,
          texto:
            '¿Qué condición general se asocia al patronaje de línea interior y deportiva en relación con los materiales?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Se trabaja principalmente con tejidos rígidos sin elongación, porque el ajuste se logra solo mediante pinzas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Se desarrolla únicamente en tejido plano pesado, sin considerar elasticidad, recuperación ni comportamiento corporal.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Se enfoca en prendas elaboradas mayoritariamente en tejido de punto, aunque algunos diseños usan tejido plano.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Se aplica solo a prendas exteriores de sastrería, abrigos, capas y chaquetas completamente forradas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Se demuestra comprensión de la relación entre ropa interior, deportiva, tejido de punto y requerimientos de elasticidad.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión de los conceptos técnicos abordados.',
        },
        {
          id: 16,
          texto:
            '¿Por qué se aplican descuentos de elongación en patrones de ropa interior elaborados con tejido elástico?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Para aumentar excesivamente el patrón y evitar que la tela se adapte al cuerpo durante el uso.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Para sustituir la talla anatómica por una medida aleatoria tomada desde una fotografía comercial.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Para eliminar la necesidad de corte, despiece, señalización y control de piezas simétricas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Para ajustar las medidas del patrón al porcentaje de estiramiento del material y lograr ajuste funcional.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Se evidencia apropiación del descuento de elongación como cálculo necesario para adaptar el patrón a tejidos elásticos.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión de los conceptos técnicos abordados.',
        },
        {
          id: 17,
          texto:
            '¿Cuál es el punto de partida para desarrollar interpretaciones de panti como <em>culotte</em>, <em>hipster</em>, bóxer o tanga?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El panti básico, porque funciona como base inicial para modificar siluetas, alturas y coberturas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'El brasier balconet, porque determina directamente la altura de tiro de todas las prendas inferiores.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La chaqueta sastre, porque aporta estructura, forro y solapa a las prendas de línea interior.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El pantalón sudadera, porque define copa, cotilla, tirantes y recorrido de aro en ropa interior.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Se reconoce el panti básico como base de interpretación para diferentes siluetas de ropa interior inferior.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión de los conceptos técnicos abordados.',
        },
        {
          id: 18,
          texto:
            '¿Qué afirmación describe correctamente la función estructural del brasier en patronaje de ropa interior?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Las tirantas son el único elemento que sostiene el busto, sin importar base, copa, cotilla o contorno.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La estructura o base bien desarrollada sostiene el busto, mientras tirantes y demás piezas complementan la función.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'El brasier se traza sin considerar formas de busto, volumen, copa, contorno ni medidas anatómicas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El brasier depende únicamente del color del encaje y no del análisis técnico de copa y base.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Se evidencia comprensión del brasier como estructura técnica cuya base sostiene el busto y organiza la prenda.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión de los conceptos técnicos abordados.',
        },
        {
          id: 19,
          texto:
            '¿Qué permite el uso del <em>software</em> Audaces dentro del componente de patronaje industrial?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Reemplazar por completo el conocimiento manual sin necesidad de básicos, medidas, fórmulas ni interpretación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Trabajar únicamente publicidad digital, catálogos comerciales y edición fotográfica de prendas terminadas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Aplicar digitalmente la metodología de patronaje manual mediante herramientas de interfaz, elementos y patrones.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Eliminar la diferencia entre patrón y prenda terminada, suprimiendo la verificación de piezas y escalado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Se demuestra comprensión del <em>software</em> Audaces como herramienta para aplicar digitalmente procesos de patronaje desarrollados manualmente.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión de los conceptos técnicos abordados.',
        },
        {
          id: 20,
          texto:
            '¿Cómo se organiza una ruta u orden operacional para elaborar una muestra física en tejido plano?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Solo por orden estético, iniciando con empaque, fotografía, exhibición, promoción y venta de la prenda.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Solo por disponibilidad de operarios, sin considerar piezas preparadas, ensamble, terminados ni ficha técnica.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Solo por tipo de tela, ignorando maquinaria, operaciones, tiempos, aditamentos y control de calidad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Por operaciones de preparación, ensamble y terminación, según pieza, máquina, método y especificación técnica.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Se reconoce la ruta operacional como secuencia técnica de preparación, ensamble y terminación para obtener una prenda terminada.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión de los conceptos técnicos abordados.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y se evidencia apropiación de los fundamentos técnicos del patronaje industrial de prendas de vestir, la interpretación de modelos, el uso de herramientas digitales y la organización de operaciones de ensamble.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Se recomienda revisar nuevamente el componente formativo e intentar otra vez la actividad didáctica.',
    },
  }),
}
</script>
