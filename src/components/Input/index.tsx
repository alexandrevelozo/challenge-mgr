import styled from 'styled-components'

const StyleInput = styled.input`
  width: 30vw;
  padding: 10px 20px;
  font-size: 18px;
  color: #1e1e1e;
  border: none;
  border-radius: 10px;
  margin-bottom: 20px;

  @media (max-width: 1040px) {
    width: 80vw;
  }
`

interface InputProps {
  placeholder?: string
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}
const Input: React.FC<InputProps> = ({ placeholder, value, onChange }) => {
  return <StyleInput type="text" placeholder={placeholder} value={value} onChange={onChange} />
}

export default Input
