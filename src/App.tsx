import { useEffect } from 'react'
import { Header } from './components/Header'
import './index.css'

const PLAY_URL = 'https://play.google.com/store/apps/details?id=com.carameloclicker.app&hl=pt_BR'

/* ── Pixel sparkle stars ─────────────────────────────────── */

const STARS = [
  { x: 10, y: 12, s: 3, d: 0.0, t: 2.0 }, { x: 25, y: 7,  s: 2, d: 0.5, t: 1.8 },
  { x: 45, y: 20, s: 4, d: 1.0, t: 2.5 }, { x: 70, y: 11, s: 2, d: 0.3, t: 1.6 },
  { x: 85, y: 24, s: 3, d: 0.8, t: 2.2 }, { x: 15, y: 38, s: 2, d: 1.5, t: 1.9 },
  { x: 55, y: 33, s: 4, d: 0.2, t: 2.1 }, { x: 90, y: 50, s: 3, d: 0.7, t: 1.7 },
  { x: 30, y: 58, s: 2, d: 1.2, t: 2.3 }, { x: 75, y: 65, s: 3, d: 0.4, t: 2.0 },
  { x:  5, y: 68, s: 2, d: 0.9, t: 1.5 }, { x: 50, y: 73, s: 3, d: 1.6, t: 2.4 },
  { x: 95, y: 78, s: 2, d: 0.1, t: 1.8 }, { x: 35, y: 43, s: 4, d: 1.3, t: 2.1 },
  { x: 65, y: 53, s: 2, d: 0.6, t: 1.6 }, { x: 20, y: 80, s: 3, d: 1.8, t: 2.2 },
  { x: 80, y: 36, s: 2, d: 0.4, t: 1.9 }, { x: 42, y: 60, s: 3, d: 1.1, t: 2.0 },
  { x: 58, y: 16, s: 2, d: 0.8, t: 1.7 }, { x: 88, y: 70, s: 4, d: 0.3, t: 2.5 },
]

function StarField() {
  return (
    <div className="star-field" aria-hidden="true">
      {STARS.map((star, i) => (
        <div
          key={i}
          className="star"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.s}px`,
            height: `${star.s}px`,
            animationDelay: `${star.d}s`,
            animationDuration: `${star.t}s`,
          }}
        />
      ))}
    </div>
  )
}

/* ── Google Play icon SVG ────────────────────────────────── */

function PlayIcon() {
  return (
    <svg
      className="btn-store__icon"
      viewBox="0 0 512 512"
      fill="none"
      aria-hidden="true"
    >
      <path d="M325.3 234.3L104.6 13l280.8 161.2z" fill="#EA4335" />
      <path d="M47.9 0C35.7.6 26 9.6 26 22.1v467.8c0 12.5 9.7 21.5 21.9 22.1L328.6 256z" fill="#4285F4" />
      <path d="M447.4 211.9l-75.8-43.7-84.3 76.9 84.3 76.9 75.8-43.7c21.5-12.4 21.5-54 0-66.4z" fill="#FBBC04" />
      <path d="M47.9 512c12.2.6 21.9-8.4 21.9-21.9L328.6 256z" fill="#34A853" />
    </svg>
  )
}

function PlayStoreBtn({ large }: { large?: boolean }) {
  return (
    <a
      href={PLAY_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-store${large ? ' btn-store--lg' : ''}`}
      aria-label="Baixar Cachorro Caramelo Runner gratuitamente no Google Play"
    >
      <PlayIcon />
      <span>
        <small>Disponível no</small>
        Google Play
      </span>
    </a>
  )
}

/* ── HERO ────────────────────────────────────────────────── */

function Hero() {
  return (
    <section id="hero" className="hero" aria-label="Tela principal">
      <div className="hero__radial" aria-hidden="true" />
      <StarField />

      <div className="hero__content">
        <div className="hero__text">
          <p className="hero__eyebrow">🎮 Jogo gratuito para Android</p>

          <h1 className="hero__title">
            Cachorro<br />
            <span className="hero__title-accent">Caramelo</span><br />
            Runner
          </h1>

          <p className="hero__subtitle">
            O jogo de corrida mais fofo do Brasil! Corra com o Caramelo,
            desvie de obstáculos, colete moedas e personalize seu
            cachorrinho pixel art.
          </p>

          <div className="hero__actions">
            <PlayStoreBtn />
            <a href="#features" className="btn-ghost">Saiba Mais ↓</a>
          </div>
        </div>

        <div className="hero__img-wrap">
          <div className="hero__glow" aria-hidden="true" />
          <img
            src="/images/banner.png"
            alt="Cachorro Caramelo Runner — banner oficial do jogo pixel art para Android"
            className="hero__dog animate-float"
            width="460"
            height="300"
            loading="eager"
            fetchPriority="high"
          />
        </div>
      </div>

      <div className="hero__grass" aria-hidden="true" />
    </section>
  )
}

/* ── FEATURES ────────────────────────────────────────────── */

const FEATURES = [
  {
    icon: '👕',
    title: 'Personalize\no Caramelo',
    desc: 'Desbloqueie fantasias exclusivas — incluindo a camisa da Seleção Brasileira número 10. Vista o Caramelo do seu jeito!',
  },
  {
    icon: '🏃',
    title: 'Corra e\nDesvie',
    desc: 'Reflexos rápidos são a chave! Desvie de obstáculos e chegue o mais longe possível nessa corrida infinita.',
  },
  {
    icon: '🎨',
    title: 'Pixel Art\nFofíssimo',
    desc: 'Gráficos pixel art charmosos e detalhados que vão conquistar seu coração do primeiro ao último frame.',
  },
  {
    icon: '🆓',
    title: '100%\nGratuito',
    desc: 'Baixe grátis no Google Play e comece a jogar agora mesmo! Diversão sem limites para Android.',
  },
]

function Features() {
  return (
    <section id="features" className="features">
      <div className="section-wrap">
        <h2 className="section-title reveal">Por que jogar?</h2>
        <p className="section-sub reveal">Diversão garantida para todas as idades</p>
        <div className="features__grid">
          {FEATURES.map((f, i) => (
            <article key={f.title} className="feature-card reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
              <span className="feature-card__icon">{f.icon}</span>
              <h3 className="feature-card__title">{f.title}</h3>
              <p className="feature-card__desc">{f.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── CHARACTERS ──────────────────────────────────────────── */

const CHARACTERS = [
  {
    emoji: '🐕',
    name: 'Caramelo',
    label: 'O Original',
    desc: 'O clássico! O Caramelo do jeito que todo mundo ama — fofinho, marronzinho e pronto para correr.',
  },
  {
    emoji: '🇧🇷',
    name: 'Brasil',
    label: 'Seleção Canarinho',
    desc: 'Vestindo a camisa da Seleção Brasileira, número 10. Corra com o orgulho do Brasil!',
  },
  {
    emoji: '🧥',
    name: 'Moletom',
    label: 'Casual Style',
    desc: 'Com um look casual e muito estilo. O Caramelo na moda para qualquer aventura.',
  },
  {
    emoji: '✨',
    name: 'E muito mais!',
    label: 'Surpresas te esperam',
    desc: 'Tem várias outras fantasias esperando por você dentro do jogo. Baixe e descubra todas!',
  },
]

function Characters() {
  return (
    <section id="characters" className="characters">
      <div className="section-wrap">
        <div className="characters__inner">
          <div className="characters__img-wrap reveal">
            <img
              src="/images/dog-brasil.png"
              alt="Cachorro Caramelo vestindo a camisa do Brasil número 10 — fantasia desbloqueável no jogo"
              className="characters__img"
              width="300"
              height="300"
              loading="lazy"
            />
            <span className="characters__badge">⭐ Fantasia Brasil</span>
          </div>

          <div className="characters__content">
            <h2 className="section-title reveal">Personagens<br />& Fantasias</h2>

            <p className="characters__desc reveal">
              O Caramelo tem estilo! Desbloqueie fantasias exclusivas e mostre
              sua personalidade enquanto corre pelo cenário pixel art. Cada
              look novo faz o jogo ainda mais especial.
            </p>

            <div className="characters__list">
              {CHARACTERS.map((c, i) => (
                <div
                  key={c.name}
                  className={`char-item reveal${i === CHARACTERS.length - 1 ? ' char-item--more' : ''}`}
                  style={{ transitionDelay: `${i * 0.12}s` }}
                >
                  <span className="char-item__emoji">{c.emoji}</span>
                  <div>
                    <p>
                      <strong className="char-item__name">{c.name}</strong>
                      <span className="char-item__label"> — {c.label}</span>
                    </p>
                    <p className="char-item__desc">{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── HOW TO PLAY ─────────────────────────────────────────── */

const STEPS = [
  {
    num: '01',
    icon: '📲',
    title: 'Baixe\nGrátis',
    desc: 'Encontre "Cachorro Caramelo Runner" no Google Play e instale em segundos no seu Android.',
  },
  {
    num: '02',
    icon: '👆',
    title: 'Toque para\nPular',
    desc: 'Toque na tela para fazer o Caramelo pular e desviar de obstáculos. Simples e viciante!',
  },
  {
    num: '03',
    icon: '⭐',
    title: 'Colete &\nCustomize',
    desc: 'Colete moedas durante a corrida e desbloqueie fantasias incríveis para o seu Caramelo.',
  },
]

function HowToPlay() {
  return (
    <section id="how-to-play" className="how-to-play">
      <div className="section-wrap">
        <h2 className="section-title reveal">Como Jogar</h2>
        <p className="section-sub reveal">Simples, rápido e muito viciante!</p>
        <div className="steps">
          {STEPS.map((step, i) => (
            <div key={step.num} className="step reveal" style={{ transitionDelay: `${i * 0.15}s` }}>
              <span className="step__num">{step.num}</span>
              <span className="step__icon">{step.icon}</span>
              <h3 className="step__title">{step.title}</h3>
              <p className="step__desc">{step.desc}</p>
              {i < STEPS.length - 1 && (
                <div className="step__arrow" aria-hidden="true">›</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── DOWNLOAD CTA ────────────────────────────────────────── */

function Download() {
  return (
    <section id="download" className="download" aria-label="Baixar o jogo">
      <div className="download__radial" aria-hidden="true" />
      <StarField />
      <div className="section-wrap download__inner">
        <h2 className="download__title">
          Comece a Correr<br />
          <span className="download__title-accent">Agora Mesmo!</span>
        </h2>
        <p className="download__sub">
          Gratuito · Android · Pixel Art · Diversão infinita para todas as idades
        </p>
        <PlayStoreBtn large />
        <p className="download__meta">
          Android 5.0 ou superior · Sem root · Sem assinatura obrigatória
        </p>
        <div className="download__badges">
          <span className="download__badge-item">🆓 Gratuito</span>
          <span className="download__badge-item">🎮 Pixel Art</span>
          <span className="download__badge-item">🐕 Fofo demais</span>
          <span className="download__badge-item">🇧🇷 Brasileiro</span>
        </div>
      </div>
    </section>
  )
}

/* ── FOOTER ──────────────────────────────────────────────── */

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <span className="footer__logo">🐕 Cachorro Caramelo Runner</span>
          <p className="footer__tagline">
            O jogo de corrida pixel art mais fofo do Brasil!<br />
            Corra, desvie, colete e customize o Caramelo.
          </p>
        </div>

        <div className="footer__links">
          <h3 className="footer__heading">Links</h3>
          <ul>
            <li>
              <a href={PLAY_URL} target="_blank" rel="noopener noreferrer">
                Google Play
              </a>
            </li>
            <li><a href="#features">Por que jogar?</a></li>
            <li><a href="#characters">Personagens</a></li>
            <li><a href="#how-to-play">Como Jogar</a></li>
          </ul>
        </div>

        <div className="footer__social">
          <h3 className="footer__heading">Criador</h3>
          <p>Desenvolvido com muito carinho por:</p>
          <a
            href="https://www.instagram.com/luizlbss"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__social-link"
            aria-label="Instagram do criador @luizlbss"
          >
            📸 @luizlbss
          </a>
        </div>
      </div>

      <div className="footer__bottom">
        <p>
          © {new Date().getFullYear()} Cachorro Caramelo Runner — Todos os direitos reservados
          <br />
          <small>
            Caramelo Dog Runner · Android Game · Pixel Art · Jogo de corrida gratuito
          </small>
        </p>
      </div>
    </footer>
  )
}

/* ── ROOT APP ────────────────────────────────────────────── */

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible')
            observer.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12 },
    )
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Characters />
        <HowToPlay />
        <Download />
      </main>
      <Footer />
    </>
  )
}
