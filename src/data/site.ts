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
      { name: 'Estados Unidos', logo: 'usa.png' },
      { name: 'Paraguai', logo: 'paraguai.png' },
      { name: 'Argélia', logo: 'argelia.png' },
      { name: 'Marrocos', logo: 'marrocos.png' },
    ],
  },
  {
    id: 'B',
    label: 'Grupo B',
    teams: [
      { name: 'Espanha', logo: 'espanha.png' },
      { name: 'Brasil', logo: 'brasil.png' },
      { name: 'Japão', logo: 'japao.png' },
      { name: 'Coreia do Sul', logo: 'coreia-do-sul.png' },
    ],
  },
  {
    id: 'C',
    label: 'Grupo C',
    teams: [
      { name: 'Argentina', logo: 'argentina.png' },
      { name: 'Austrália', logo: 'australia.png' },
      { name: 'França', logo: 'franca.png' },
      { name: 'Senegal', logo: 'senegal.png' },
    ],
  },
  {
    id: 'D',
    label: 'Grupo D',
    teams: [
      { name: 'Inglaterra', logo: 'inglaterra.png' },
      { name: 'México', logo: 'mexico.png' },
      { name: 'Holanda', logo: 'holanda.png' },
      { name: 'Uruguai', logo: 'uruguai.png' },
    ],
  },
  {
    id: 'E',
    label: 'Grupo E',
    teams: [
      { name: 'Alemanha', logo: 'alemanha.png' },
      { name: 'Portugal', logo: 'portugal.png' },
      { name: 'Bélgica', logo: 'belgica.png' },
      { name: 'Croácia', logo: 'croacia.png' },
    ],
  },
  {
    id: 'F',
    label: 'Grupo F',
    teams: [
      { name: 'Itália', logo: 'italia.png' },
      { name: 'Colômbia', logo: 'colombia.png' },
      { name: 'Suíça', logo: 'suica.png' },
      { name: 'África', logo: 'africa.png' },
    ],
  },
  {
    id: 'G',
    label: 'Grupo G',
    teams: [
      { name: 'Canadá', logo: 'canada.png' },
      { name: 'Nigéria', logo: 'nigeria.png' },
      { name: 'Suécia', logo: 'suecia.png' },
      { name: 'Noruega', logo: 'noruega.png' },
    ],
  },
  {
    id: 'H',
    label: 'Grupo H',
    teams: [
      { name: 'Turquia', logo: 'turquia.png' },
      { name: 'Equador', logo: 'equador.png' },
      { name: 'Gana', logo: 'gana.png' },
      { name: 'Irã', logo: 'iran.png' },
    ],
  },
  {
    id: 'I',
    label: 'Grupo I',
    teams: [
      { name: 'Escócia', logo: 'escocia.png' },
      { name: 'Tunísia', logo: 'tunisia.png' },
      { name: 'Áustria', logo: 'austria.png' },
      { name: 'Tchéquia', logo: 'tcheca.png' },
    ],
  },
  {
    id: 'J',
    label: 'Grupo J',
    teams: [
      { name: 'Catar', logo: 'catar.png' },
      { name: 'Arábia Saudita', logo: 'arabia.png' },
      { name: 'Bósnia', logo: 'bosnia.png' },
      { name: 'Iraque', logo: 'iraque.png' },
    ],
  },
  {
    id: 'K',
    label: 'Grupo K',
    teams: [
      { name: 'Panamá', logo: 'panama.png' },
      { name: 'Haiti', logo: 'haiti.png' },
      { name: 'Curaçao', logo: 'curacao.png' },
      { name: 'Cabo Verde', logo: 'cabo-verde.png' },
    ],
  },
  {
    id: 'L',
    label: 'Grupo L',
    teams: [
      { name: 'Egito', logo: 'egito.png' },
      { name: 'Jordânia', logo: 'jordania.png' },
      { name: 'Uzbequistão', logo: 'uzbequistao.png' },
      { name: 'Nova Zelândia', logo: 'nz.png' },
    ],
  },
];

export const categoryColors: Record<string, string> = {
  'Copa Feminina 2027': 'bg-nucleo-gold text-nucleo-black',
  Futebol: 'bg-emerald-700 text-white',
  Esportes: 'bg-blue-700 text-white',
  Especial: 'bg-purple-700 text-white',
};

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/reportagens', label: 'Reportagens' },
  { href: '/copa-feminina-2027', label: 'Copa Feminina 2027' },
  { href: '/especiais', label: 'Especiais' },
  { href: '/radio-ufsc', label: 'Rádio UFSC' },
  { href: '/sobre', label: 'Sobre' },
  { href: '/contato', label: 'Contato' },
];
