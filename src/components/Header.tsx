import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'

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

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  /* Lock body scroll while menu is open */
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const close = () => setOpen(false)

  return (
    <>
      <header className={`header${scrolled ? ' header--scrolled' : ''}`}>
        <div className="header__inner">
          <a href="#hero" className="header__logo" aria-label="Ir ao início">
            🐕 CARAMELO RUNNER
          </a>

          {/* Desktop-only nav — hidden on mobile via CSS */}
          <nav className="header__nav-desktop" aria-label="Navegação principal">
            {NAV_LINKS.map(({ label, href }) => (
              <a key={href} href={href} className="header__nav-link">{label}</a>
            ))}
            <a
              href={PLAY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="header__cta"
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
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/*
        Mobile overlay is portalled directly to <body> to escape the header's
        stacking context (position:fixed + backdrop-filter creates a containing
        block that traps children's own fixed positioning).
      */}
      {createPortal(
        <div
          className={`mobile-overlay${open ? ' mobile-overlay--open' : ''}`}
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navegação"
          aria-hidden={!open}
        >
          <nav className="mobile-overlay__nav">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="mobile-overlay__link"
                onClick={close}
              >
                {label}
              </a>
            ))}
            <a
              href={PLAY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-overlay__store"
              onClick={close}
              aria-label="Baixar Cachorro Caramelo Runner no Google Play"
            >
              📲 Baixar no Google Play
            </a>
          </nav>
        </div>,
        document.body,
      )}
    </>
  )
}
