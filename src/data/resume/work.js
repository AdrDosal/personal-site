/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Hiberus Tecnología',
    position: 'Ingeniero de Datos en Azure',
    url: 'https://www.hiberus.com/',
    startDate: '2022-07',
    summary: `Hiberus es una de las principales consultoras tecnológicas españolas y que trabaja con un gran número de clientes.
    Desde que entré a formar parte de la compañía, he trabajado de forma exclusiva en entornos cloud, especialmente en Azure,
    con un rol de Ingeniero de Datos.
    En Hiberus, he tenido la oportunidad de trabajar en proyectos en la nube y aprovechar al máximo las capacidades y servicios de Azure. Esta experiencia me ha permitido desarrollar habilidades técnicas sólidas y aplicarlas de manera efectiva en el diseño, implementación y gestión de soluciones de datos en la nube para nuestros clientes.`,
    highlights: [
      'Creación y gestión de ETLs en entornos cloud, principalmente utilizando Databricks.',
      'Aprovisionamiento y administración de recursos en el entorno de Azure. Esto incluye la creación y configuración de máquinas virtuales, redes virtuales, grupos de seguridad, almacenamiento y otros servicios necesarios para la infraestructura en la nube.',
      'Diseño y desarrollo de APIs REST para facilitar el acceso a la información necesaria por parte de los clientes.',
      'Definición y configuración de la arquitectura en la nube del proyecto, seleccionando los recursos de Azure que mejor se adapten a las necesidades específicas.',
      'Creación de contenedores Docker para empaquetar aplicaciones propias y su despliegue bajo demanda en la nube de Azure. Esto incluye el desarrollo de Dockerfiles, la configuración de imágenes y la implementación de estrategias de orquestación y despliegue.',
    ],
  },
  {
    name: 'Bahía Sofware',
    position: 'Ingeniero de Datos',
    url: 'https://bahiasoftware.es/',
    startDate: '2021-09',
    endDate: '2022-07',
    summary: 'Bahía Software es una destacada consultora tecnológica española. Durante mi tiempo en esta compañía, mi rol principal fue el de Ingeniero de Datos, brindando servicios a clientes tanto del sector público como privado.',
    highlights: [
      'Creación de ETL, principalmente en entornos/herramientas de Microsoft.',
      'Generación de informes requeridos por los diferentes clientes.',
      'Detección del fraude a través de técnicas de machine learning.',
    ],
  },
  {
    name: 'Capgemini',
    position: 'Consultor IT',
    url: 'https://www.capgemini.com',
    startDate: '2019-02',
    endDate: '2021-09',
    summary: `Al concluir mi periodo de prácticas, fui contratado como consultor a tiempo completo en Capgemini. Durante mi empleo, desempeñé principalmente el rol de Ingeniero de Datos y, cuando fue necesario, también asumí responsabilidades como Científico de Datos.
    Durante mi trayectoria en Capgemini, tuve la oportunidad de trabajar con una amplia variedad de clientes en diversos sectores. Esta experiencia me permitió adquirir un conocimiento profundo de las necesidades y desafíos específicos de cada industria, y desarrollar soluciones adaptadas a sus requerimientos.`,
    highlights: [
      'Desarrollo de procesos de ETL completo que abarca desde la recepción de datos de múltiples fuentes hasta su integración en el datawarehouse, garantizando la calidad y coherencia de los datos.',
      'Elaboración de informes personalizados utilizando diversas herramientas de visualización, adaptadas a las necesidades específicas de cada cliente, para proporcionar una representación visual clara y comprensible de los datos.',
      'Participación activa en la migración de bases de datos del cliente, realizando ajustes en los procesos de carga existentes para cumplir con los nuevos estándares y asegurar una transición fluida y eficiente.',
      'Colaboración en la implementación de modelos de machine learning en áreas temáticas diversas, como computer vision, chatbots, análisis de registros y pronósticos, con el objetivo de generar soluciones avanzadas y predictivas para las necesidades del cliente.',
    ],
  },
  {
    name: 'Capgemini',
    position: 'Becario Científico de Datos',
    url: 'https://www.capgemini.com',
    startDate: '2018-10',
    endDate: '2019-02',
    summary: `Capgemini es una empresa líder a nivel global en consultoría, servicios tecnológicos y transformación digital. Después de completar mi formación en el máster de Ciencia de Datos, tuve la oportunidad de unirme a Capgemini como becario en el área de Ciencia de Datos.
    Durante mi tiempo en Capgemini, he tenido la valiosa experiencia de aplicar mis conocimientos teóricos a problemas reales. Esta oportunidad me ha permitido utilizar las habilidades adquiridas en el máster y enfrentar desafíos concretos en el ámbito de la ciencia de datos.`,
    highlights: [
      'Desarrollo de un cuadro de mando que visualice los resultados de un modelo de aprendizaje automático en detección de anomalías.',
      'Implementación de computer vision para seguir clientes en tiempo real y predecir su género y edad. Construcción de un cuadro de mando que muestre información relevante.',
      'Construcción de modelos predictivos para estimar el número de ventas diarias con el objetivo de minimizar los productos perecederos no vendidos.',
      'Elaboración de pruebas de concepto y participación en el proceso de presentación a los clientes.',
    ],
  },
];

export default work;
