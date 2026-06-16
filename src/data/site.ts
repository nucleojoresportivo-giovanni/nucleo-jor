export interface GroupTeam {
  name: string;
  logo: string;
}

export interface WorldCupGroup {
  id: string;
  label: string;
  teams: GroupTeam[];
}

export const worldCupGroups: WorldCupGroup[] = [
  {
    id: 'A',
    label: 'Grupo A',
    teams: [
      { name: 'México', logo: 'mexico.png' },
      { name: 'África do Sul', logo: 'africa.png' },
      { name: 'Coreia do Sul', logo: 'coreia-do-sul.png' },
      { name: 'República Tcheca', logo: 'tcheca.png' },
    ],
  },
  {
    id: 'B',
    label: 'Grupo B',
    teams: [
      { name: 'Canadá', logo: 'canada.png' },
      { name: 'Bósnia', logo: 'bosnia.png' },
      { name: 'Catar', logo: 'catar.png' },
      { name: 'Suíça', logo: 'suica.png' },
    ],
  },
  {
    id: 'C',
    label: 'Grupo C',
    teams: [
      { name: 'Brasil', logo: 'brasil.png' },
      { name: 'Marrocos', logo: 'marrocos.png' },
      { name: 'Haiti', logo: 'haiti.png' },
      { name: 'Escócia', logo: 'escocia.png' },
    ],
  },
  {
    id: 'D',
    label: 'Grupo D',
    teams: [
      { name: 'Estados Unidos', logo: 'usa.png' },
      { name: 'Paraguai', logo: 'paraguai.png' },
      { name: 'Austrália', logo: 'australia.png' },
      { name: 'Turquia', logo: 'turquia.png' },
    ],
  },
  {
    id: 'E',
    label: 'Grupo E',
    teams: [
      { name: 'Alemanha', logo: 'alemanha.png' },
      { name: 'Curaçao', logo: 'curacao.png' },
      { name: 'Costa do Marfim', logo: 'costa-do-marfim.png' },
      { name: 'Equador', logo: 'equador.png' },
    ],
  },
  {
    id: 'F',
    label: 'Grupo F',
    teams: [
      { name: 'Holanda', logo: 'holanda.png' },
      { name: 'Japão', logo: 'japao.png' },
      { name: 'Suécia', logo: 'suecia.png' },
      { name: 'Tunísia', logo: 'tunisia.png' },
    ],
  },
  {
    id: 'G',
    label: 'Grupo G',
    teams: [
      { name: 'Bélgica', logo: 'belgica.png' },
      { name: 'Egito', logo: 'egito.png' },
      { name: 'Irã', logo: 'iran.png' },
      { name: 'Nova Zelândia', logo: 'nz.png' },
    ],
  },
  {
    id: 'H',
    label: 'Grupo H',
    teams: [
      { name: 'Espanha', logo: 'espanha.png' },
      { name: 'Cabo Verde', logo: 'cabo-verde.png' },
      { name: 'Arábia Saudita', logo: 'arabia.png' },
      { name: 'Uruguai', logo: 'uruguai.png' },
    ],
  },
  {
    id: 'I',
    label: 'Grupo I',
    teams: [
      { name: 'França', logo: 'franca.png' },
      { name: 'Senegal', logo: 'senegal.png' },
      { name: 'Iraque', logo: 'iraque.png' },
      { name: 'Noruega', logo: 'noruega.png' },
    ],
  },
  {
    id: 'J',
    label: 'Grupo J',
    teams: [
      { name: 'Argentina', logo: 'argentina.png' },
      { name: 'Argélia', logo: 'argelia.png' },
      { name: 'Áustria', logo: 'austria.png' },
      { name: 'Jordânia', logo: 'jordania.png' },
    ],
  },
  {
    id: 'K',
    label: 'Grupo K',
    teams: [
      { name: 'Portugal', logo: 'portugal.png' },
      { name: 'RD Congo', logo: 'congo.png' },
      { name: 'Uzbequistão', logo: 'uzbequistao.png' },
      { name: 'Colômbia', logo: 'colombia.png' },
    ],
  },
  {
    id: 'L',
    label: 'Grupo L',
    teams: [
      { name: 'Inglaterra', logo: 'inglaterra.png' },
      { name: 'Croácia', logo: 'croacia.png' },
      { name: 'Gana', logo: 'gana.png' },
      { name: 'Panamá', logo: 'panama.png' },
    ],
  },
];

export const categoryColors: Record<string, string> = {
  'Copa Feminina 2027': 'bg-ixporte-red text-ixporte-black',
  Futebol: 'bg-ixporte-crimson text-white',
  Esportes: 'bg-ixporte-purple text-white',
  Especial: 'bg-ixporte-purple-deep text-white',
};

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/reportagens', label: 'Reportagens' },
  { href: '/copa-2026/selecoes', label: 'Seleções Copa 2026' },
  { href: '/copa-2026/retrospecto', label: 'Retrospecto' },
  { href: '/copa-feminina-2027', label: 'Copa Feminina 2027' },
  { href: '/especiais', label: 'Especiais' },
  { href: '/radio-ufsc', label: 'Rádio Ponto UFSC' },
  { href: '/sobre', label: 'Sobre' },
  { href: '/contato', label: 'Contato' },
];
