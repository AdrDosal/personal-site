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
    summary: `Smile builds machine learning APIs to compare user submitted photos to ID documents. Our APIs are
    used by hundreds of thousands of people every day to access financial services. As VP of Engineering,
    I provide technical leadership on high-impact projects, influence and coach a distributed team of engineers,
    and facilitate alignment and clarity across teams on goals, outcomes, and timelines. I was promoted
    from Director of Engineering to VP of Engineering in April 2022, and then to VP of Engineering and Head
    of AI in November 2022. I lead a 20+ person engineering org. I directly manage ~8 engineers and spend
    >50% of my time writing code.`,
    highlights: [
      'Redesigned engineering processes for bug tracking, meetings, and standups. Improved culture for code reviews, blameless post-mortems, and retrospectives.',
      'Re-architected engineering hiring and onboarding processes. Recruited several strong engineers.',
      'Reorged engineering teams to focus on product delivery. Created a new team to focus on ML infrastructure.',
      'Lead re-design of internal APIs for inference. Built new computer vision pipelines for industry leading certifications (NIST/iBeta liveness).',
      'Pitched, designed, developed, deployed, and maintain a fraud detection product based on 1-N facial recognition using embeddings and vector search.',
    ],
  },
  {
    name: 'Bahía Sofware',
    position: 'Senior Software Engineer',
    url: 'http://skepticalinvestments.biz',
    startDate: '2021-09',
    endDate: '2022-07',
    summary: `Skeptical Investments is a micro-vc fund focused on Angel, Seed, and Series-A
    YC companies.`,
    highlights: [
      'Created the InstaSafe. Fast, automated investment docs for YC companies.',
      'Advise several startups in the fund.',
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
      'Built production, online, end-to-end optimized machine learning pipelines for time-series prediction.',
      'Designed micro-service architecture around: data collection, data integrity, feature engineering, research, strategy, backtesting, deployment, and reporting.',
      "Set and communicated team priorities that supported the broader organization's goals. Aligned strategy, processes, and decision-making across teams.",
      "Set clear expectations with individuals based on their level and role and aligned them to the broader organization's goals. Met regularly with individuals to discuss performance and development, and provided feedback and coaching.",
      'Developed the long-term technical vision and roadmap within, and often beyond, the scope of my teams. Evolved the roadmap to meet anticipated future requirements and infrastructure needs.',
    ],
  },
  {
    name: 'Capgemini',
    position: 'Becario Cientifico de Datos',
    url: 'https://www.capgemini.com',
    startDate: '2018-10',
    endDate: '2019-02',
    summary: `Capgemini es una empresa global de consultoria, servicios de tecnología y transformación digital.
    Una vez finalizada mi formación en el master de Ciencia de Datos, entré como becario Cientifico de Datos.
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
