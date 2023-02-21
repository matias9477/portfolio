import next from 'next';

export type Report = {
  id: string;
  name: string;
  items: ExperienceItem[];
};
export type ExperienceItem = {
  image: string;
  title: string;
  company: string;
  techStack: string[];
  from: string;
  to: string;
  summary: string[];
};

export const about = {
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id repellat pariatur incidunt consectetur ab, porro inventore vel quasi dolorem quam reiciendis beatae quidem quos dolores eum accusamus impedit blanditiis sit?',
};

const javascript = 'https://logosdownload.com/logo/javascript-logo-512.png';
const saga =
  'https://user-images.githubusercontent.com/4254571/67069175-f38f7200-f19b-11e9-8a90-cf7dd763f86d.png';
const react =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png';
const dotnet = 'https://www.pulumi.com/logos/tech/dotnet.png';
const nextjs =
  'https://d2nir1j4sou8ez.cloudfront.net/wp-content/uploads/2021/12/nextjs-boilerplate-logo.png';
const graphql =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/1200px-GraphQL_Logo.svg.png';
const sqlserver =
  'https://www.freeiconspng.com/thumbs/sql-server-icon-png/sql-server-icon-png-1.png';
const sass = 'https://avatars.githubusercontent.com/u/317889?s=200&v=4';
const mui = 'https://mui.com/static/logo.png';
const bootstrap =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1200px-Bootstrap_logo.svg.png';

export const experience: Report = {
  id: '1',
  name: 'experience',
  items: [
    {
      image: './img/symmetry.svg',
      title: 'UI Engineer',
      company: 'Symmetry Systems LLC',
      techStack: [react, nextjs, graphql, mui],
      from: 'Jun 2022',
      to: 'Present',
      summary: [
        'UI development with React and Next focused on SSR.',
        'GraphQL server creation with schema definitions, resolvers design and cache utilization.',
        'UI and UX design tasks management, customer success analysis and feedback gathering and application.',
      ],
    },
    {
      image: '/img/periodic.svg',
      title: 'Frontend Engineer',
      company: 'Periodic SL',
      techStack: [nextjs, react, sass, saga],
      from: 'Apr 2022',
      to: 'Jun 2022',
      summary: [
        'UI development for social networking applications using Next.',
        'SEO centered development and improvement.',
        'App styling and media querying for mobile web apps using Sass.',
      ],
    },
    {
      image: './img/netposible.png',
      title: 'Fullstack Junior Engineer',
      company: 'Netpossible Software LLC',
      techStack: [dotnet, javascript, sqlserver, bootstrap],
      from: 'Sep 2020',
      to: 'Mar 2022',
      summary: [
        'Fullstack software development of SaaS products.',
        'Project management, task definition and priorization.      ',
        'Legacy code maintanance, documentation and improvement.',
      ],
    },
  ],
};

export const experienceItemMap = new Map(
  experience.items.map((item) => [item.title, item]),
);

// image,
// title,
// company,
// techStack,
// from,
// to,
// summary,
