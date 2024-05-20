import { FormEvent, useState } from 'react'
import { Link } from 'react-router-dom'
import { GoArrowRight } from 'react-icons/go'

import { separateData } from '../../utils/separate'
import { fadeIn } from '../../utils/variants'

import Input from '../../components/Input'
import Button from '../../components/Button'

import { Container, Wrapper, Legend, Result, Letters, Numbers } from './styles'

const ExerciseTwo: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('')
  const [letters, setLetters] = useState<string[]>([])
  const [numbers, setNumbers] = useState<number[]>([])
  const [error, setError] = useState<string>('')
  const [active, setActive] = useState<boolean>(false)

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  const handleSeparateData = (event: FormEvent) => {
    event.preventDefault()
    // Limpa os dados anteriores
    setLetters([])
    setNumbers([])
    setError('')
    if (!inputValue) {
      setError('Por favor, insira os dados!')
      return
    }

    const { notNumbers, numbers: separateNumbers } = separateData(inputValue)
    setLetters(notNumbers)
    setNumbers(separateNumbers)
    setError('')
    setActive(true)
  }

  return (
    <Container>
      <Wrapper>
        <Legend>
          <h2>
            Exercício 2:
            <br />
          </h2>
          <span>Consigo separar letras e números hein, quer testar?</span>
        </Legend>
        <form
          onSubmit={handleSeparateData}
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Input placeholder="Insira os dados separados por vírgula" value={inputValue} onChange={handleInputChange} />
          <Button type="submit">Confirmar</Button>
          {error && <p style={{ color: 'red', marginTop: '1rem' }}>{error}</p>}
          {active && (
            <Link
              className="link"
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '5px',
                color: 'var(--orange-color)',
                textDecoration: 'none',
                position: 'absolute',
                right: '-50%',
                top: '10%',
                cursor: 'pointer',
              }}
              to="/"
            >
              <span>Ir para Home</span>
              <GoArrowRight size={25} />
            </Link>
          )}
        </form>

        <Result>
          <Letters
            variants={fadeIn('left', 0.4)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
          >
            <h3>Letras:</h3>
            <ul>
              {letters.map((letter, index) => (
                <li key={index}>{letter}</li>
              ))}
            </ul>
          </Letters>

          <Numbers
            variants={fadeIn('right', 0.4)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
          >
            <h3>Números:</h3>
            <ul>
              {numbers.map((number, index) => (
                <li key={index}>{number}</li>
              ))}
            </ul>
          </Numbers>
        </Result>
      </Wrapper>
    </Container>
  )
}

export default ExerciseTwo
