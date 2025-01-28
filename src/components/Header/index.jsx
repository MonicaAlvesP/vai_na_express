import StarFast from '../../assets/estrela-voadora.png'

import s from '../../style/header.module.scss'

export const Header = () => {
  return (
    <header className={s.container}>
      <img src={StarFast} alt="Logo Estrela" />
      <h1>VaiNaExpress</h1>
    </header>
  )
}