import { Container } from './styles'

import LogoMgr from '../../assets/logo-mgr-fundo-branco.svg'
import IconGithub from '../../assets/icons/github-icon.svg'

export default function Header() {
  return (
    <Container>
      <img src={LogoMgr} alt="Logo MGR" />
      <img
        style={{
          width: '50px',
          height: '50px',
        }}
        src={IconGithub}
        alt=""
      />
    </Container>
  )
}
