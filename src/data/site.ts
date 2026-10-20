export type SocialIcon = 'github' | 'linkedin' | 'lattes' | 'orcid' | 'contact';

export interface SocialLink {
  id: 'github' | 'linkedin' | 'lattes' | 'orcid' | 'contact';
  label: string;
  href: string;
  icon: SocialIcon;
  external: boolean;
}

interface SiteData {
  name: string;
  readonly monogram: string;
  role: string;
  institution: string;
  description: string;
  email: string;
  readonly copyrightYear: number;
  socialLinks: SocialLink[];
}

export const site: SiteData = {
  name: 'João Vaz',
  get monogram() {
    return this.name.trim().slice(0, 2).toUpperCase();
  },
  role: 'Computer scientist and researcher',
  institution: 'Universidade Federal de Minas Gerais',
  description:
    'A project-focused portfolio featuring academic and personal work in computer science.',
  email: 'jgvaz@ufmg.br',
  get copyrightYear() {
    return new Date().getFullYear();
  },
  socialLinks: [
    {
      id: 'github',
      label: 'GitHub',
      href: 'https://github.com/jg2alv',
      icon: 'github',
      external: true,
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/',
      icon: 'linkedin',
      external: true,
    },
    {
      id: 'lattes',
      label: 'Lattes',
      href: 'http://lattes.cnpq.br/9679499650286556',
      icon: 'lattes',
      external: true,
    },
    {
      id: 'orcid',
      label: 'ORCID',
      href: 'https://orcid.org/0009-0006-4651-7031',
      icon: 'orcid',
      external: true,
    },
    {
      id: 'contact',
      label: 'Contact',
      get href() {
        return `mailto:${site.email}`;
      },
      icon: 'contact',
      external: true,
    },
  ],
};
