import { NavLink } from 'react-router-dom'

import styled from 'styled-components'

const SidebarContainer = styled.div`
  padding-top: 20px;
  position: fixed;
  top: 20%;
  left: 40px;
`

const MenuItem = styled(NavLink)`
  display: flex;
  flex-direction: column;
  padding: 10px;
  color: white;
  text-decoration: none;
  border-left: 3px solid #555;

  &.active {
    border-left: 3px solid var(--orange-color);
  }

  &:hover {
    background-color: #555;
  }
`

const Sidebar: React.FC = () => {
  return (
    <SidebarContainer>
      <MenuItem to="/" end>
        Home
      </MenuItem>
      <MenuItem to="/exercise-one">Exercício 1</MenuItem>
      <MenuItem to="/exercise-two">Exercício 2</MenuItem>
    </SidebarContainer>
  )
}

export default Sidebar
