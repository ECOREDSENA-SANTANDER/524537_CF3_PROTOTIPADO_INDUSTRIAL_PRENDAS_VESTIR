export default {
  global: {
    Name: 'Patronaje industrial de prendas de vestir',
    Description:
      'En la actualidad, el sector confección, diseño y moda está haciendo la transición a nivel país en la preparación y capacitación de mano de obra calificada y tecnología versátil que aporte al estándar competitivo internacional, con la que busca dar una respuesta rápida y eficaz a las exigencias del mercado; en este aspecto el patronista juega un papel fundamental, pues debe estar preparado para interpretar los bocetos, sketch y diseños asignados por el diseñador, cumpliendo a cabalidad con los procesos de producción o prototipado necesarios.',
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
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CF5_524537_DU.pdf',
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
  complementario: [
    {
      tema: 'Instructivo del <em> software </em> Audaces',
      referencia:
        'Manual audaces. (s/f). Scribd. Recuperado el 22 de junio de 2024.',
      tipo: 'Instructivo',
      link: 'https://www.scribd.com/document/367907998/Manual-Audaces ',
    },
    {
      tema: 'Confección de base superior de ropa interior.',
      referencia:
        'Fernández, N., 9 de julio 2020, Base superior de ropa interior.',
      tipo: 'Video',
      link: 'https://youtu.be/rWq-wgF680k',
    },
    {
      tema: 'Uso de prensatelas especiales',
      referencia: 'MSM CONFECCIONES, 07 de mayo, uso prensatelas especiales ',
      tipo: 'Video',
      link: 'https://youtu.be/rF-2wRyxFm0',
    },
    {
      tema: 'Prehormado de bolsillo.',
      referencia:
        'Macias Betancur, Juan Camilo, 2019, prehormar bolsillo en V X 1',
      tipo: 'Video',
      link: 'https://youtu.be/1De5em7-9kE',
    },
    {
      tema: 'Prehormado de bolsillo.',
      referencia:
        'Macias Betancur, Juan Camilo, 2019, prehormar bolsillo con plantilla X 1',
      tipo: 'Video',
      link: 'https://youtu.be/6oamTzVyc6A',
    },
    {
      tema: 'Prehormado de bolsillo.',
      referencia:
        'Colfólderes, 6 de marzo del 2017, máquina prehormadora de bolsillo para camisa y pantalón',
      tipo: 'Video',
      link: 'https://youtu.be/e_7gMYHY8TI',
    },
    {
      tema: 'Prehormado de bolsillo. ',
      referencia: 'MSM CONFECCIONES, 25 de abril 2020, cuello de camisa',
      tipo: 'Video',
      link: 'https://youtu.be/07rqOHM1BAA',
    },
    {
      tema: 'Confección cuello troquelado.',
      referencia: 'MSM CONFECCIONES, 13 de mayo de 2013, cuello troquelado',
      tipo: 'Video',
      link: 'https://youtu.be/qrDYO2tDJ_k',
    },
    {
      tema: 'Tipos de pecheras.',
      referencia: 'MSM CONFECCIONES, 20 de junio 2020, tipos de pecheras',
      tipo: 'Video',
      link: 'https://youtu.be/v2tY3caLubY',
    },
    {
      tema: 'Preparación de confección pechera y espalda.',
      referencia:
        'MSM CONFECCIONES, 10 de mayo 2020, preparación espalda y pechera',
      tipo: 'Video',
      link: 'https://youtu.be/v80MRBE32LY',
    },
    {
      tema: 'Confección de bolsillo de camisa.',
      referencia: 'MSM CONFECCIONES, 26 de abril 2020, bolsillo de camisa',
      tipo: 'Video',
      link: 'https://youtu.be/Nu7OYw6XBj8',
    },
    {
      tema: 'Confección puño de camisa.',
      referencia: 'MSM CONFECCIONES, 26 de abril 2020, puño de camisa',
      tipo: 'Video',
      link: 'https://youtu.be/J2c02nTStGM',
    },
    {
      tema: 'Confección portañuela.',
      referencia: 'MSM CONFECCIONES, 26 de abril 2020, portañuela camisa 1',
      tipo: 'Video',
      link: 'https://youtu.be/Nu7OYw6XBj8',
    },
    {
      tema: 'Confección portañuela.',
      referencia: 'MSM CONFECCIONES, 25 de abril 2020, portañuela camisa 2',
      tipo: 'Video',
      link: 'https://youtu.be/ovzT9l3yUOo',
    },
    {
      tema: 'Confección portañuela.',
      referencia: 'MSM CONFECCIONES, 26 de abril 2020, portañuela camisa 3',
      tipo: 'Video',
      link: 'https://youtu.be/2VL8Kkq1H-U',
    },
    {
      tema: 'Preparación de camisa de dama. ',
      referencia:
        'MSM CONFECCIONES, 8 de junio 2020, preparación de camisa dama',
      tipo: 'Video',
      link: 'https://youtu.be/APYyyfTUrzY',
    },
    {
      tema: 'Ensamble de camisa para dama.',
      referencia:
        'MSM CONFECCIONES, 8 de junio 2020, ensamble camisa para dama',
      tipo: 'Video',
      link: 'https://youtu.be/ik-8HFR6nnM',
    },
    {
      tema: 'Confección de abertura de falda.',
      referencia:
        'MSM CONFECCIONES, 5 de mayo 2020, confección abertura de falda',
      tipo: 'Video',
      link: 'https://youtu.be/agv2NdkQsBo',
    },
    {
      tema: 'Confección de abertura de falda.',
      referencia:
        'MSM CONFECCIONES, 6 de mayo 2020, confección abertura de falda',
      tipo: 'Video',
      link: 'https://youtu.be/9nkc0LnLmv4',
    },
    {
      tema: 'Ensamble de cremallera invisible.',
      referencia: 'MSM CONFECCIONES, 9 de mayo 2020, cremallera invisible',
      tipo: 'Video',
      link: 'https://youtu.be/02TQRK7XxrE',
    },
    {
      tema: 'Ensamble de cierre básico.',
      referencia:
        'Arte&Moda, 23 de agosto 2019, Cómo pegar cierre básico en una falda en tres pasos',
      tipo: 'Video',
      link: 'https://youtu.be/ZaS-1F7iKR8',
    },
    {
      tema: 'Confección de falta con abertura.',
      referencia:
        'MSM CONFECCIONES, 6 de junio 2020, confección de falda con abertura',
      tipo: 'Video',
      link: 'https://youtu.be/K7VtD_zqlBU',
    },
    {
      tema: 'Ensamble de cremallera en pantalón tipo <em>jean</em>',
      referencia: 'Tutorial creado por Nocturno Design Blog.',
      tipo: 'Tutorial-Blog',
      link:
        'https://nocturnodesignblog.com/2019/02/08/como-coser-la-cremallera-para-jean/',
    },
    {
      tema: 'Ensamble de cierre en pantalón.',
      referencia:
        'Jose Cerín García, 25 de octubre 2015, Cómo pegar cierre de pantalón',
      tipo: 'Video',
      link: 'https://youtu.be/gh7JebPO8Ac',
    },
    {
      tema: 'Ensamble de cierre en pantalón.',
      referencia:
        'Bertha Gutierrez Limón, 14 de enero 2019, Cómo poner cierre para pantalón de caballero',
      tipo: 'Video',
      link: 'https://youtu.be/76HmBvopo4M',
    },
    {
      tema: 'Tipos de bolsillos. ',
      referencia: 'MSM CONFECCIONES, 19 de junio 2020, tipos de bolsillos',
      tipo: 'Video',
      link: 'https://youtu.be/tE5hyZ7Ai_Q',
    },
    {
      tema: 'Confección de bolsillo relojero.',
      referencia:
        'Ideas de Emprendedores, 26 de abril de 2018, confección de bolsillo secreto (relojero) para pantalón jean',
      tipo: 'Video',
      link: 'https://youtu.be/5WeZa7YKmyo',
    },
    {
      tema: 'Confección de ribete sencillo.',
      referencia: 'MSM CONFECCIONES, 26 de abril 2020, ribete sencillo  ',
      tipo: 'Video',
      link: 'https://youtu.be/vpuPoBVGva8',
    },
    {
      tema: 'Confección de ribete doble.',
      referencia: 'MSM CONFECCIONES, 26 de abril 2020, ribete doble',
      tipo: 'Video',
      link: 'https://youtu.be/VM5jvCGuoEc',
    },
    {
      tema: 'Confección de pantalón para dama.',
      referencia:
        'MSM CONFECCIONES, 10 de junio 2020, confección de pantalón para dama',
      tipo: 'Video',
      link: 'https://youtu.be/dzUrDfv7_lI',
    },
  ],
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
        'Duarte, N. (1983). Conocimientos básicos de corte. Unidad instruccional No. 3. Servicio Nacional de Aprendizaje SENA',
    },
    {
      referencia:
        'Gutiérrez, L., Moncayo, A., Tanaka, K., Kimura, F., Moreno, D. (2011). Manual de patronaje básico e interpretación de diseños. Servicio Nacional de Aprendizaje SENA.',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/q6j6k0/sena_aleph000025496',
    },
    {
      referencia:
        'Sociedad Americana de Ensayos y Materiales (ASTM). (2003). Textiles. Editorial Staff. [Book]. Sistema de Bibliotecas SENA.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
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
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora multimedia',
          centro: 'Regional Santander - Centro Agroturístico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Laura Paola Gelvez Manosalva',
          cargo: 'Validadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Erika Fernanda Mejía Pinzón',
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
