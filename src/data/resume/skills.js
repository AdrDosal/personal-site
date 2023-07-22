const skills = [
  {
    title: 'Javascript',
    competency: 1,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Node.JS',
    competency: 1,
    category: ['Web Development'],
  },
  {
    title: 'React',
    competency: 1,
    category: ['Web Development'],
  },
  {
    title: 'Bash',
    competency: 2,
    category: ['Tools', 'Languages'],
  },
  {
    title: 'MongoDB',
    competency: 3,
    category: ['Databases', 'Web Development'],
  },
  {
    title: 'ElasticSearch',
    competency: 2,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'SQL',
    competency: 5,
    category: ['Languages', 'Web Development', 'Databases'],
  },
  {
    title: 'Data Mining',
    competency: 3,
    category: ['ML Engineering'],
  },
  {
    title: 'Flask',
    competency: 3,
    category: ['Web Development', 'Python'],
  },
  {
    title: 'FastAPI',
    competency: 3,
    category: ['Web Development', 'Python'],
  },
  {
    title: 'Git/Mercurial/Tortoise',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'Kubernetes',
    competency: 1,
    category: ['Tools', 'Data Engineering'],
  },
  {
    title: 'Google Cloud Compute',
    competency: 2,
    category: ['Tools', 'Web Development'],
  },
  {
    title: 'AWS',
    competency: 2,
    category: ['Tools', 'Web Development'],
  },
  {
    title: 'Azure',
    competency: 4,
    category: ['Tools', 'Web Development'],
  },
  {
    title: 'Docker',
    competency: 3,
    category: ['Tools', 'Data Engineering'],
  },
  {
    title: 'Numpy',
    competency: 4,
    category: ['Data Science', 'Data Engineering', 'Python', 'ML Engineering'],
  },
  {
    title: 'Databricks',
    competency: 4,
    category: ['Data Science', 'Data Engineering', 'Python', 'Tools', 'ML Engineering'],
  },
  {
    title: 'Tensorflow + Keras',
    competency: 3,
    category: ['ML Engineering', 'Python'],
  },
  {
    title: 'PyTorch',
    competency: 2,
    category: ['ML Engineering', 'Python'],
  },
  {
    title: 'Jupyter',
    competency: 4,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'HTML + SASS/SCSS/CSS',
    competency: 2,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Python',
    competency: 5,
    category: ['Languages', 'Python', 'ML Engineering'],
  },
  {
    title: 'C++',
    competency: 1,
    category: ['Languages'],
  },
  {
    title: 'R',
    competency: 4,
    category: ['Languages'],
  },
  {
    title: 'Data Visualization',
    competency: 4,
    category: ['Data Science'],
  },
  {
    title: 'Neo4j',
    competency: 2,
    category: ['Databases'],
  },
  {
    title: 'Pandas',
    competency: 5,
    category: ['Data Engineering', 'ML Engineering', 'Python'],
  },
  {
    title: 'Matplotlib',
    competency: 3,
    category: ['Data Engineering', 'ML Engineering', 'Python'],
  },
  {
    title: 'Scikit-Learn',
    competency: 4,
    category: ['Data Engineering', 'ML Engineering', 'Python'],
  },
  {
    title: 'Spark',
    competency: 4,
    category: ['Data Engineering', 'ML Engineering', 'Python'],
  },
  {
    title: 'PowerCenter',
    competency: 3,
    category: ['Data Engineering'],
  },
  {
    title: 'SSIS',
    competency: 3,
    category: ['Data Engineering'],
  },
  {
    title: 'SSAS',
    competency: 3,
    category: ['Data Engineering'],
  },
  {
    title: 'SSRS',
    competency: 3,
    category: ['Business Intelligence'],
  },
  {
    title: 'Power BI',
    competency: 2,
    category: ['Business Intelligence'],
  },
  {
    title: 'OBIEE',
    competency: 3,
    category: ['Data Engineering', 'Business Intelligence'],
  },
  {
    title: 'AzureSQL',
    competency: 4,
    category: ['Data Engineering', 'Databases'],
  },
  {
    title: 'Databricks Datawarehouse',
    competency: 3,
    category: ['Data Engineering', 'Databases'],
  },
  {
    title: 'Oracle SQL',
    competency: 4,
    category: ['Data Engineering', 'Databases'],
  },
  {
    title: 'SQL Server',
    competency: 4,
    category: ['Data Engineering', 'Databases'],
  },
  {
    title: 'Netezza',
    competency: 2,
    category: ['Data Engineering', 'Databases'],
  },
  {
    title: 'PostgreSQL',
    competency: 3,
    category: ['Data Engineering', 'Databases'],
  },
  {
    title: 'Azure Container Registry',
    competency: 2,
    category: ['Data Engineering', 'Tools', 'Web Development'],
  },
  {
    title: 'Azure Container Instances',
    competency: 3,
    category: ['Data Engineering', 'Tools', 'Web Development'],
  },
  {
    title: 'Azure Blob Storage',
    competency: 4,
    category: ['Data Engineering', 'Tools'],
  },
  {
    title: 'Azure Cognitive Services',
    competency: 2,
    category: ['Data Engineering', 'Data Science', 'ML Engineering', 'Tools'],
  },
  {
    title: 'Pylint',
    competency: 4,
    category: ['Data Engineering', 'Python'],
  },
  {
    title: 'dbt',
    competency: 3,
    category: ['Data Engineering'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be === to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [
  ...new Set(skills.flatMap(({ category }) => category)),
].sort().map((category, index) => ({
  name: category,
  color: colors[index],
}));

export { categories, skills };
