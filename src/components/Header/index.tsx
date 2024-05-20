import { Container } from './styles'

import LogoMgr from '../../assets/logo-mgr-fundo-branco.svg'
import IconGithub from '../../assets/icons/github-icon.svg'

export default function Header() {
  return (
    <Container>
      <img
        style={{
          cursor: 'pointer',
        }}
        src={LogoMgr}
        alt="Logo MGR"
      />
      <a href="https://github.com/alexandrevelozo/challenge-mgr" target="blank">
        <img
          style={{
            width: '50px',
            height: '50px',
          }}
          src={IconGithub}
          alt=""
        />
      </a>
    </Container>
  )
}
