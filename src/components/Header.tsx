import { useState, useEffect } from 'react'

const PLAY_URL = 'https://play.google.com/store/apps/details?id=com.carameloclicker.app&hl=pt_BR'

const NAV_LINKS = [
  { label: 'Por que jogar?', href: '#features' },
  { label: 'Personagens', href: '#characters' },
  { label: 'Como Jogar', href: '#how-to-play' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)

  return (
    <header className={`header${scrolled ? ' header--scrolled' : ''}`}>
      <div className="header__inner">
        <a href="#hero" className="header__logo" aria-label="Ir ao início">
          🐕 CARAMELO RUNNER
        </a>

        <nav className={`header__nav${open ? ' open' : ''}`} aria-label="Navegação principal">
          {NAV_LINKS.map(({ label, href }) => (
            <a key={href} href={href} className="header__nav-link" onClick={close}>
              {label}
            </a>
          ))}
          <a
            href={PLAY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="header__cta"
            onClick={close}
            aria-label="Baixar Cachorro Caramelo Runner no Google Play"
          >
            Baixar Grátis
          </a>
        </nav>

        <button
          className={`header__burger${open ? ' open' : ''}`}
          onClick={() => setOpen(v => !v)}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          aria-controls="header-nav"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
