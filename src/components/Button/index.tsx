import styled from 'styled-components'

const StyleButton = styled.button`
  background-color: var(--orange-color);
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: #ff6a00;
  }
`

interface ButtonProps {
  type: 'button' | 'submit' | 'reset'
  onClick?: () => void
  children: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({ type, onClick, children }) => {
  return (
    <StyleButton type={type} onClick={onClick}>
      {children}
    </StyleButton>
  )
}

export default Button
