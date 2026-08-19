# Guilherme Freires — Portfólio Pessoal

Portfólio pessoal desenvolvido do zero para apresentar minha trajetória, habilidades e projetos como desenvolvedor backend em formação.

**🔗 [portfolio-guilherme-dev.vercel.app](https://portfolio-guilherme-dev.vercel.app)**

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38bdf8?logo=tailwindcss)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?logo=framer)

---

## Sobre o projeto

Site de página única (single page) com cinco seções — Home, Sobre, Skills, Projetos e Contato — construído com foco em duas coisas que normalmente não andam juntas: **animação elaborada** e **conteúdo real**, sem cair em decoração vazia.

Alguns destaques técnicos:

- **Fundo animado em Canvas** no hero: rede de nós conectados por proximidade, desenhada com `requestAnimationFrame`, respeitando `prefers-reduced-motion`
- **Sequência de boot estilo terminal** na entrada do hero, sem depender de nenhuma lib externa de terminal
- **Timeline interativa** da jornada de aprendizado, com entrada animada conforme o scroll (`whileInView`)
- Todo o texto, copy e estrutura de conteúdo foram escritos e revisados manualmente — nada de lorem ipsum ou texto genérico de template

## Tecnologias

- [Next.js 16](https://nextjs.org) (App Router) + [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) para animações e transições
- [Lucide React](https://lucide.dev/) para ícones
- Deploy contínuo via [Vercel](https://vercel.com)

## Como rodar localmente

Pré-requisito: Node.js 18.18 ou superior.

```bash
# clonar o repositório
git clone https://github.com/UxieGu1/portfolio.git
cd portfolio

# instalar dependências
npm install

# rodar em modo desenvolvimento
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

## Estrutura do projeto

```
src/
├── app/                  # rotas e layout raiz (App Router)
├── components/
│   ├── effects/          # NodeNetwork (canvas) e TerminalIntro
│   ├── layout/            # Header e Footer
│   ├── sections/          # Hero, About, Skills, Projects, Contact
│   └── ui/                 # componentes reutilizáveis (ProjectCard etc.)
public/
├── images/                # screenshots dos projetos
└── cv.pdf                 # currículo em PDF
```

## Deploy

Publicado na [Vercel](https://vercel.com), com deploy automático a cada push na branch `main`.

## Contato

- **E-mail:** guilhermefreires10@gmail.com
- **LinkedIn:** [linkedin.com/in/guilhermeefreires](https://linkedin.com/in/guilhermeefreires)
- **GitHub:** [github.com/UxieGu1](https://github.com/UxieGu1)
