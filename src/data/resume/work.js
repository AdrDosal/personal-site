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
    con un rol de Ingeniero de Datos.`,
    highlights: [
      'Creación de ETLs en entornos clouds, principalmente Databricks.',
      'Aprovisionamiento de recursos en el entorno de Azure, desde su creación y mantenimiento, incluyendo permisos y sus redes',
      'Creación de APIs REST para que nuestros clientes puedan obtener la información necesaria.',
      'Desarrollo de la arquitectura en la nube del proyecto, eligiendo los recursos de Azure que mejor se adaptan a las necesidades requeridas.',
      'Crear contenedores de Docker de aplicaciones propias y su despliegue bajo demanda en la nube de Azure.',
    ],
  },
  {
    name: 'Bahía Sofware',
    position: 'Ingeniero de Datos',
    url: 'https://bahiasoftware.es/',
    startDate: '2021-09',
    endDate: '2022-07',
    summary: `Bahía Software es una consultora IT española.
    Durante mi tiempo en la compañía trabajé principalmente como Ingeniero de Datos para clientes en la Administración Pública y
    la empresa privada.`,
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
    summary: `Antes de finalizar mi tiempo en prácticas me incorporé como empleado a tiempo completo en Capgemini como consultor,
    trabajando principalmente en un rol de Ingeniero de Datos y cómo Científico de Datos cuando la situación lo requiriese.
    Durante los años que estuve en Capgemini, he trabajado para diversos clientes en varios sectores.`,
    highlights: [
      'Construcción de ETL, desde la recepción de los datos en diversos orígenes, su transformación hasta su carga en el datawarehouse.',
      'Creación de informes con diferentes herramientas de visualización según las necesidades del cliente.',
      'Participación en la migración de base de datos del cliente, modificando los procesos de carga para adaptarlos a nuevos estándares.',
      'Colaboración en la creación de diferentes modelos de machine learning en diferentes áreas temáticas (computer vision, chatbot, log analytics, forecasting...).',
    ],
  },
  {
    name: 'Capgemini',
    position: 'Becario Científico de Datos',
    url: 'https://www.capgemini.com',
    startDate: '2018-10',
    endDate: '2019-02',
    summary: `Capgemini es una empresa global de consultoría, servicios de tecnología y transformación digital.
    Una vez finalizada mi formación en el master de Ciencia de Datos, entré como becario Científico de Datos.
    Durante la estancia en Capgemini he podido aplicar mis conocimientos teóricos en problemas reales.`,
    highlights: [
      'Creación de un cuadro de mando y mostrase los resultados de un modelo de machine learning sobre detección de anomalías.',
      'Utilización de computer vision para seguir a clientes en tiempo real, predicción de su sexo y edad. Construcción de un cuadro de mando donde se muestre la información relevante.',
      'Modelos predictivos para el número de ventas diarias con el objetivo de minimizar los productos no vendidos perecederos.',
      'Creación de pruebas de concepto y participar en el proceso de presentación a los clientes.',
    ],
  },
];

export default work;
