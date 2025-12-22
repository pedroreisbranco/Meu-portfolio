import config from '~/config.json';

export const navLinks = [
  {
    label: 'Projetos',
    pathname: '/#project-1',
  },
  {
    label: 'Sobre mim',
    pathname: '/#details',
  },
  {
    label: 'Contato',
    pathname: 
      'https://wa.me/5551992415089?text=Olá%20Pedro,%20vim%20pelo%20seu%20portfólio',
    external: true
  },
];

export const socialLinks = [
  {
    label: 'Github',
    url: `https://github.com/${config.github}`,
    icon: 'github',
  },
];
