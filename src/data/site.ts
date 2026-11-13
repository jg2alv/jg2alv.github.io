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
  shortName: string;
  readonly monogram: string;
  role: string;
  institution: string;
  description: string;
  email: string;
  readonly copyrightYear: number;
  socialLinks: SocialLink[];
}

export const site: SiteData = {
  name: 'João Gabriel Guimarães Alves Vaz',
  shortName: 'João Vaz',
  monogram: 'JG',
  role: 'B.Sc.',
  institution: 'Universidade Federal de Minas Gerais',
  description:
    'João Gabriel Guimarães Alves Vaz — Computer Science bachelor student at DCC/UFMG, Belo Horizonte. Academic and personal projects in software, systems, and data.',
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
      href: 'https://www.linkedin.com/in/jgvaz/',
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
