export default {
  global: {
    Name: 'Patronaje industrial de prendas de vestir',
    Description:
      'En la actualidad, el sector confección, diseño y moda está haciendo la transición a nivel país en la preparación y capacitación de mano de obra calificada y tecnología versátil que aporte al estándar competitivo internacional, con la que busca dar una respuesta rápida y eficaz a las exigencias del mercado; en este aspecto el patronista juega un papel fundamental, pues debe estar preparado para interpretar los bocetos, <em>sketch</em> y diseños asignados por el diseñador, cumpliendo a cabalidad con los procesos de producción o prototipado necesarios.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Patronaje interpretación de modelos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Manga sastre',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Trazo de chaqueta sastre masculina',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Interpretación de chaqueta <em>bomber</em>',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Chaqueta sastre femenina',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Chaqueta cuello alto (traslados de pinza) ',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Abrigo asimétrico ',
            hash: 't_1_6',
          },
          {
            numero: '1.7',
            titulo:
              'Generalidades de pantalón sastre masculino - interpretación',
            hash: 't_1_7',
          },
          {
            numero: '1.8',
            titulo: 'Interpretación de pantalón sastre femenino ',
            hash: 't_1_8',
          },
          {
            numero: '1.9',
            titulo: 'Generalidades de manga, kimona y <em>ranglan</em> ',
            hash: 't_1_9',
          },
          {
            numero: '1.10',
            titulo: 'Análisis e interpretación de capas ',
            hash: 't_1_10',
          },
          {
            numero: '1.11',
            titulo: 'Análisis e interpretación de pantalón sudadera',
            hash: 't_1_11',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo:
          'Patronaje línea interior y deportiva (<em>Software</em> de patronaje)',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Trazo de panti básico ',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Trazo de panti <em>culotte</em>',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: '<em>Hipster</em> con encaje ',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Bóxer con encaje ',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Panti faja - cintura alta ',
            hash: 't_2_5',
          },
          {
            numero: '2.6',
            titulo: 'Tanga descaderada ',
            hash: 't_2_6',
          },
          {
            numero: '2.7',
            titulo: 'Interpretación de tanga encaje  ',
            hash: 't_2_7',
          },
          {
            numero: '2.8',
            titulo: '<em>Brasier balconet</em> con cotilla',
            hash: 't_2_8',
          },
          {
            numero: '2.9',
            titulo: '<em>Bralette</em>',
            hash: 't_2_9',
          },
          {
            numero: '2.10',
            titulo: 'Interfaz audaces',
            hash: 't_2_10',
          },
          {
            numero: '2.11',
            titulo: 'Panti clásico ',
            hash: 't_2_11',
          },
          {
            numero: '2.12',
            titulo: 'Interpretación de pantis',
            hash: 't_2_12',
          },
          {
            numero: '2.13',
            titulo: 'Interpretación <em>hipsters</em>',
            hash: 't_2_13',
          },
          {
            numero: '2.14',
            titulo: '<em>Boxer</em> masculino',
            hash: 't_2_14',
          },
          {
            numero: '2.15',
            titulo: 'Pantaloncillo masculino',
            hash: 't_2_15',
          },
          {
            numero: '2.16',
            titulo: 'Base superior de ropa interior',
            hash: 't_2_16',
          },
          {
            numero: '2.17',
            titulo: '<em>Brasier</em> altura de copa ',
            hash: 't_2_17',
          },
          {
            numero: '2.18',
            titulo: 'Copa corte vertical y horizontal ',
            hash: 't_2_18',
          },
          {
            numero: '2.19',
            titulo: 'Escalado <em>brasier</em> corte horizontal',
            hash: 't_2_19',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo:
          'Operaciones de preparación para elaboración de muestra - Tejido plano',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Ruta u orden operacional para camisa',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Ensamble de blusa femenina',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Ensamble de falda',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Ensamble de pantalón masculino',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Ensamble de pantalón femenino',
            hash: 't_3_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CF3_524537_DU.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Abertura',
      significado:
        'Separación de las partes de algo, dejando al descubierto el interior, hendidura, agujero.',
    },
    {
      termino: 'Acabado',
      significado:
        'Los diferentes sistemas industriales para perfeccionar un producto. El acabado en los tejidos comprende el blanqueado, teñido, encogido, estirado, estampado, satinado.',
    },
    {
      termino: 'Asimétrico',
      significado:
        'Que no guarda simetría o que carece de ella: figura asimétrica.',
    },
    {
      termino: 'Canesú',
      significado:
        'Pieza superior de la camisa o traje a la que se une el cuello, las mangas y el resto de la prenda.',
    },
    {
      termino: 'Cruce',
      significado:
        'Pieza superior de la camisa o traje a la que se une el cuello, las mangas y el resto de la prenda.',
    },
    {
      termino: 'Dobladillo',
      significado: 'Pliegue o remate que se hace a la ropa en los bordes.',
    },
    {
      termino: 'Eje de simetría',
      significado: 'Lo que divide una figura en dos partes iguales.',
    },
    {
      termino: 'Encarar',
      significado: 'Poner las telas derecho con derecho.',
    },
    {
      termino: 'Ensamble',
      significado:
        'Unir las piezas de una prenda según la secuencia operacional.',
    },
    {
      termino: 'Ficha técnica',
      significado:
        'Documento controlado que contiene la información necesaria y pertinente sobre un producto. Se utiliza para determinar parámetros de diseño y estandarizar los lotes de producción.',
    },
    {
      termino: 'Flojo',
      significado: 'Lo que sobra de la tela para embeber.',
    },
    {
      termino: 'Fruncir',
      significado: 'Pliegue en arrugas pequeñas y paralelas.',
    },
    {
      termino: 'Fusionar',
      significado: ' Unir por medio de calor.',
    },
    {
      termino: 'Operación de confección',
      significado:
        ' Actividad o trabajo que permite agregarle valor y/o transformar un producto.',
    },
    {
      termino: 'Pespunte',
      significado:
        'Costura que se efectúa mediante puntadas unidas, volviendo la aguja hacia atrás después.',
    },
    {
      termino: 'Secuencia operacional',
      significado:
        'Conjunto de operaciones que en una forma ordenada conllevan a la elaboración de un producto (prenda de vestir). ',
    },
  ],
  referencias: [
    {
      referencia:
        'Duarte, N. (1983). Conocimientos básicos de corte. Unidad instruccional No. 3. Servicio Nacional de Aprendizaje SENA.',
    },
    {
      referencia:
        'Gutiérrez, L., Moncayo, A., Tanaka, K., Kimura, F., Moreno, D. (2011). Manual de patronaje básico e interpretación de diseños. Servicio Nacional de Aprendizaje. ',
    },
    {
      referencia:
        'Sociedad Americana de Ensayos y Materiales (ASTM). (2003). Textiles. Editorial Staff. [Book]. Sistema de Bibliotecas SENA. ',
    },
    {
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (s. f.). Canal de YouTube.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional 06. Ecosistema de Recursos Educativos Digitales (RED)',
          /*cargo:
            'Profesional G06. Responsable Ecosistema de Recursos Educativos Digitales (RED)',*/
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Lizeth Maritza Rodríguez Beltrán',
          cargo: 'Experta temática',
          centro:
            'Centro de Manufactura en Textil y Cuero - Regional Distrito Capital',
        },
        {
          nombre: 'Natalia Andrea Bueno Pizarro',
          cargo: 'Diseñadora instruccional y evaluadora instruccional',
          centro:
            'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
        },
        {
          nombre: 'Julia Isabel Roberto',
          cargo: 'Diseñadora instruccional y evaluadora instruccional',
          centro:
            'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
        },
        {
          nombre: 'Carolina Jiménez Suescún',
          cargo: 'Evaluador instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yazmin Rocio Figueroa Pacheco',
          cargo: 'Diseñadora de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Andrea Paola Botello De la Rosa',
          cargo: 'Desarrolladora <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'María Alejandra Vera Briceño',
          cargo: 'Animadora y productora multimedia',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Yineth Ibette González Quintero',
          cargo: 'Validadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Laura Paola Gelvez Manosalva',
          cargo: 'Evaluadora para contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
