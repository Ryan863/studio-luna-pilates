export interface Testimonial {
  name: string;
  role?: string;
  text: string;
  timeAgo: string;
  isHighlight?: boolean;
}

export interface Hotspot {
  id: string;
  title: string;
  tag: string;
  description: string;
  top: string; // percentage string
  left: string; // percentage string
}

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category: string;
  title: string;
  description: string;
}

export const LUNA_INFO = {
  name: "Studio Luna Pilates",
  founder: "Profª Luciana Mayer",
  founderNick: "Lu Mayer",
  credentials: "Fisioterapeuta (Crefito) & Educadora Física (CREF)",
  phone: "556792815397",
  phoneFormatted: "(67) 9281-5397",
  address: "Rua Hermelita de Oliveira Gomes, 1148",
  neighborhood: "Jardim Autonomista",
  city: "Campo Grande",
  state: "MS",
  zip: "79021-270",
  fullAddress: "Rua Hermelita de Oliveira Gomes, 1148 - Jardim Autonomista, Campo Grande - MS, 79021-270",
  googleMapsUrl: "https://www.google.com/maps/place/Studio+Luna+Pilates/@-20.4476263,-54.5901161,71m/data=!3m1!1e3!4m6!3m5!1s0x9486e88d74c15555:0x493b138d6204c019!8m2!3d-20.4475928!4d-54.5900882!16s%2Fg%2F11c601bbf9",
  whatsappHeroUrl: "https://wa.me/556792815397?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20aula%20experimental%20no%20Studio%20Luna%20Pilates.",
  whatsappAvaliacaoUrl: "https://wa.me/556792815397?text=Ol%C3%A1%20Luciana%2C%20gostaria%20de%20saber%20os%20hor%C3%A1rios%20dispon%C3%ADveis%20e%20agendar%20minha%20avalia%C3%A7%C3%A3o%20postural.",
  rating: "5.0",
  reviewCount: "26+ avaliações reais",
  yearsExperience: "+10 anos",
};

export const HOTSPOTS: Hotspot[] = [
  {
    id: "posture",
    title: "Alinhamento Postural & Coluna",
    tag: "Reabilitação Fisioterapêutica",
    description: "Descompressão das vértebras e reeducação postural para alívio de tensões cervicais e dores lombares.",
    top: "34%",
    left: "24%",
  },
  {
    id: "core",
    title: "Powerhouse & Core Profundo",
    tag: "Fortalecimento Inteligente",
    description: "Ativação do abdômen profundo, transverso e assoalho pélvico para máxima estabilidade corporal sem sobrecarga articular.",
    top: "52%",
    left: "50%",
  },
  {
    id: "breath",
    title: "Respiração & Desaceleração",
    tag: "Controle do Estresse",
    description: "Respiração tridimensional costal que oxigena o sangue, controla a ansiedade e relaxa as fáscias musculares.",
    top: "40%",
    left: "76%",
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "reformer-wide",
    src: "/assets/luna/studio-reformer.jpg",
    alt: "Reformer e ambiente climatizado com luz natural",
    category: "Equipamentos de Precisão",
    title: "Reformer & Iluminação Natural",
    description: "Aparelhos modernos regulados individualmente com molas calibradas e ampla janela com vista para o jardim.",
  },
  {
    id: "cadillac-room",
    src: "/assets/luna/studio-cadillac.jpg",
    alt: "Cadillac Trapézio, Barrel e Step Chair",
    category: "Reabilitação & Força",
    title: "Cadillac, Step Chair & Barrel",
    description: "Estrutura completa em madeira nobre e aço inox para reabilitação clínica e desafios funcionais avançados.",
  },
  {
    id: "reformer-detail",
    src: "/assets/luna/reformer-detail.jpg",
    alt: "Detalhes das molas e acabamento acolchoado do Reformer",
    category: "Higiene & Conforto",
    title: "Ergonomia & Higiene Rigorosa",
    description: "Estofamento anatômico de alta densidade, higienização impecável antes de cada turma e materiais nobres.",
  },
  {
    id: "facade",
    src: "/assets/luna/facade.jpg",
    alt: "Fachada aconchegante do Studio Luna Pilates no Jardim Autonomista",
    category: "Localização Nobre",
    title: "Fachada Aconchegante no Jardim Autonomista",
    description: "Espaço acolhedor, arborizado, com fácil estacionamento em rua tranquila e de fácil acesso em Campo Grande.",
  },
  {
    id: "aerial",
    src: "/assets/luna/aerial-pilates.jpg",
    alt: "Espaldar e tecidos para pilates aéreo e suspensão",
    category: "Modalidades Especiais",
    title: "Pilates em Suspensão & Espaldar",
    description: "Tecidos aéreos e espaldar para ganho de flexibilidade, mobilidade e descompressão da coluna gravitacional.",
  },
  {
    id: "community",
    src: "/assets/luna/community-students.jpg",
    alt: "Luciana Mayer e alunas celebrando 10 anos de saúde",
    category: "Comunidade & Afeto",
    title: "Mais de 10 Anos de Vidas Transformadas",
    description: "Alunas que treinam juntas há muitos anos, criando laços de amizade, carinho e vitalidade diária.",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Avaliação em Destaque",
    role: "Aluno Verificado no Google Maps",
    timeAgo: "Avaliação 5 Estrelas",
    isHighlight: true,
    text: "Além da profissional ser fisioterapeuta, também é educadora física. Espaço que investe na qualidade dos equipamentos e sabe enxergar o que o corpo precisa para sua reabilitação. Na minha opinião, o melhor Studio de Pilates de Campo Grande é o LunaPilates. Muito bem localizado também.",
  },
  {
    name: "Kalissa",
    role: "7 avaliações no Google",
    timeAgo: "Aluna Fiel",
    text: "A Lu é maravilhosa!!! Profissional competente, atenciosa, simpática, e realmente faz questão de te ajudar com o seu objetivo. Sem dúvidas o pilates mudou minha vida para melhor… as dores sumiram e minha postura ficou incrível. Recomendo demais o Studio Luna Pilates =)",
  },
  {
    name: "Ana Karina Garcia Javarez Araújo",
    role: "Aluna há mais de 2 anos",
    timeAgo: "Aluna Recorrente",
    text: "Professora Luciana é muito atenciosa e profissional, atendendo um número reduzido de alunos a cada horário, quase personal! Ambiente aconchegante, com equipamentos excelentes! Local de fácil estacionamento e outros benefícios fazem com que o pilates seja maravilhoso, tanto que sou aluna há mais de dois anos.",
  },
  {
    name: "Ana Maria Lima Mendonça",
    role: "2 avaliações no Google",
    timeAgo: "Aluna de Longa Data",
    text: "Muito aconchegante o espaço, professora competente e carinhosa. Faço pilates com ela já a alguns longos anos, me faz muito bem!!! Indico para quem quer ter uma vida saudável o Pilates é uma das estratégias físicas que não pode faltar!!!! Vá em frente !!!!!",
  },
  {
    name: "Lais Ap. Duek de Araújo",
    role: "Aluna Verificada",
    timeAgo: "Avaliação 5 Estrelas",
    text: "Excelente estrutura, espaço agradável e uma professora extremamente profissional e cuidadosa que proporciona segurança, conforto e bem estar aos alunos. Recomendo muito! ❤",
  },
  {
    name: "Magali Villalva",
    role: "Aluna Verificada",
    timeAgo: "Avaliação 5 Estrelas",
    text: "Luna Pilates: excelentes o espaço e o atendimento. A Luciana com seu carinho e competência técnica fazem toda a diferença. Super indico.",
  },
  {
    name: "Angelica Julia",
    role: "Local Guide · 45 avaliações",
    timeAgo: "Guia Local Google",
    text: "Excelente espaço, com modalidades e equipamentos atualizados, ótimas condições, com qualificação perfeita da profissional que nos recebe com muito carinho.",
  },
  {
    name: "Vanea Bechuate",
    role: "Aluna há 3 anos",
    timeAgo: "Aluna Fidelizada",
    text: "Comecei o pilates por motivo de saúde. Gostei tanto que estou lá há três anos e não pretendo sair. Professora maravilhosa e ambiente maravilhoso.",
  },
  {
    name: "Ana Lucia Mura",
    role: "Local Guide · Google",
    timeAgo: "Guia Local Google",
    text: "A Lú é muito querida, competente, gosto muito dos treinos, Pilates é uma atividade física bem completa, traz bem estar e saúde.",
  },
  {
    name: "Cátia Pimenta V.",
    role: "Aluna Verificada",
    timeAgo: "Avaliação 5 Estrelas",
    text: "Studio bem equipado, ambiente acolhedor, a Luciana Meyer é ótima profissional, atenciosa, sempre se atualizando! Super recomendo!",
  },
  {
    name: "Vanessa Pais",
    role: "Nova Aluna",
    timeAgo: "Avaliação 5 Estrelas",
    text: "Foi muito bom, professora atenciosa, lugar bem aconchegante, já virei aluna 🥰👏👏",
  },
  {
    name: "Adevanir Silva",
    role: "Aluno de Longa Data",
    timeAgo: "Muitos anos de prática",
    text: "Eu gosto muito das aulas da Luna Pilates. Faz muitos anos que vou. Parabéns!",
  },
  {
    name: "Fernanda Nígia",
    role: "Aluna Verificada",
    timeAgo: "Avaliação 5 Estrelas",
    text: "O atendimento é personalizado para cada um em suas necessidades individuais. Simplesmente tudo aquilo que buscamos quando cuidamos do corpo e da saúde.",
  },
  {
    name: "Neusa Somera",
    role: "Aluna Verificada",
    timeAgo: "Avaliação 5 Estrelas",
    text: "Maravilhoso studio: preservação da saúde, aparelhos excelentes, professora com ótima formação, acompanhamento individualizado.",
  },
  {
    name: "Eleide Felix",
    role: "Local Guide · Google",
    timeAgo: "Guia Local Google",
    text: "Excelente experiência. Maior elasticidade, força e resistência muscular.",
  },
  {
    name: "Maysa Gutierrez Vilela",
    role: "Aluna Verificada",
    timeAgo: "Avaliação 5 Estrelas",
    text: "Excelente estúdio. A professora Luciana é muito atenciosa.",
  },
  {
    name: "Stéfani Luíza",
    role: "Aluna Verificada",
    timeAgo: "Avaliação 5 Estrelas",
    text: "Studio de Pilates PERFEITO! Atendimento excelente e o ambiente e infraestrutura são o diferencial!",
  },
  {
    name: "Liliane de Fatima Oliveira",
    role: "Aluna Verificada",
    timeAgo: "Avaliação 5 Estrelas",
    text: "Excelente profissional, dedicada, comprometida. Espaço ideal, aparelhos excelentes para bom desempenho dos pacientes.",
  },
  {
    name: "Ana Carina do Prado",
    role: "Aluna Verificada",
    timeAgo: "Avaliação 5 Estrelas",
    text: "ADORO FAZER PILATES! A Lu é super atenciosa e querida.",
  },
  {
    name: "Agnes Solenia de Moura",
    role: "Aluna Verificada",
    timeAgo: "Avaliação 5 Estrelas",
    text: "Professora com conhecimento muito bom, lugar agradável, ótimos aparelhos.",
  },
  {
    name: "Rogério Mayer",
    role: "Aluno Verificado",
    timeAgo: "Avaliação 5 Estrelas",
    text: "Top. Excelente profissional e equipamentos. Resultado em pouco tempo.",
  },
  {
    name: "Carol Merigio",
    role: "Local Guide · Google",
    timeAgo: "Guia Local Google",
    text: "Ótimo, lugar maravilhoso e professora excelente!!",
  },
  {
    name: "Ariamne Vilhalba Puléo",
    role: "Aluna Verificada",
    timeAgo: "Avaliação 5 Estrelas",
    text: "Aulas maravilhosas com uma profissional incrível! Admiração pelo trabalho!!",
  },
  {
    name: "Maria das Graças Pereira",
    role: "Aluna Verificada",
    timeAgo: "Avaliação 5 Estrelas",
    text: "Um lugar muito agradável. Profissional capacitada.",
  },
  {
    name: "Thiago Albino",
    role: "Aluno Verificado",
    timeAgo: "Avaliação 5 Estrelas",
    text: "Espaço excelente e ótimo atendimento, indico.",
  },
  {
    name: "Sonia Maruki",
    role: "Aluna Verificada",
    timeAgo: "Avaliação 5 Estrelas",
    text: "Super preocupados com nossas necessidades, amei 🥰",
  },
];

export const SCHEDULE_DAYS = [
  { day: "Segunda-feira", hours: "06:00 às 11:00  •  16:00 às 20:00", open: true },
  { day: "Terça-feira", hours: "06:00 às 11:00  •  16:00 às 20:00", open: true },
  { day: "Quarta-feira", hours: "06:00 às 11:00  •  16:00 às 20:00", open: true },
  { day: "Quinta-feira", hours: "06:00 às 11:00  •  16:00 às 20:00", open: true },
  { day: "Sexta-feira", hours: "06:00 às 11:00  •  16:00 às 20:00", open: true },
  { day: "Sábado", hours: "Fechado para recarga e descanso", open: false },
  { day: "Domingo", hours: "Fechado", open: false },
];

export const FAQS = [
  {
    question: "Nunca fiz pilates na vida. Consigo acompanhar as aulas?",
    answer: "Com certeza! Nossas turmas são extremamente reduzidas (estilo quase personal) e cada exercício é ajustado à sua condição física e mobilidade individual. A professora Luciana avalia seu ponto de partida para que você evolua com total segurança e sem desconfortos.",
  },
  {
    question: "Tenho hérnia de disco ou dores crônicas na coluna. É seguro?",
    answer: "Não apenas seguro, mas altamente indicado. Por ter graduação em Fisioterapia além de Educação Física, Luciana Mayer compreende a biomecânica exata de cada patologia. O Pilates de precisão descomprime a coluna, fortalece o abdômen e estabiliza a lombar, promovendo alívio duradouro da dor.",
  },
  {
    question: "Qual o diferencial de uma instrutora com dupla formação?",
    answer: "A união da Fisioterapia com a Educação Física oferece o melhor dos dois mundos: o olhar terapêutico minucioso para reabilitação e alívio de lesões, combinado à metodologia de condicionamento físico, tônus muscular e ganho de força real sem clichês de academias cheias.",
  },
  {
    question: "Quantos alunos treinam por horário?",
    answer: "Trabalhamos com número estritamente reduzido de alunos por período para garantir que cada movimento receba orientação próxima, correção de postura e calibração correta das cargas e molas nos aparelhos.",
  },
  {
    question: "Como funciona a aula experimental?",
    answer: "Na aula experimental, você conhece as instalações do Studio no Jardim Autonomista, conversa sobre seu histórico e eventuais dores com a Luciana, e vivencia a prática nos aparelhos (Reformer, Cadillac, Chair). Para agendar, basta nos chamar no WhatsApp.",
  },
];
