import { useState, ChangeEvent, FormEvent } from 'react'
import { Link } from 'react-router-dom'

import { GoArrowRight } from 'react-icons/go'
import { formatName } from '../../utils/formatter'
import { fadeIn } from '../../utils/variants'

import LogoMgr from '../../assets/logo-mgr-fundo-branco.svg'
import ImageBadge from '../../assets/astronauta-profile.jpg'

import Input from '../../components/Input'
import Button from '../../components/Button'

import { Container, Card, Circle, CircleWrapper, Legend, Wrapper } from './styles'

const ExerciseOne: React.FC = () => {
  const [collaborator, setCollaborator] = useState<string>('')
  const [showCard, setShowCard] = useState<boolean>(false)
  const [nameFormat, setNameFormat] = useState<string>('')
  const [error, setError] = useState<string>('')

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCollaborator(event.target.value)
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()

    // Verifica se o campo está vazio
    if (collaborator.trim() === '') {
      setError('Por favor, insira o nome do colaborador!')
      return
    }

    // Se não estiver vazio, continua com o processamento normal
    const nameBadge = formatName(collaborator)
    setNameFormat(nameBadge)
    setShowCard(true)
    setError('')
  }

  return (
    <Container>
      {!showCard ? (
        <Wrapper>
          <Legend>
            <h2>Exercício 1: </h2>
            <span>
              Crie seu crachá da <strong>ModalGR</strong> agora mesmo para um super evento de tecnologia.
            </span>
          </Legend>
          <form
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onSubmit={handleSubmit}
          >
            <Input
              placeholder="Insira o nome completo do colaborador"
              value={collaborator}
              onChange={handleInputChange}
            />
            <Button type={'submit'}>Confirmar</Button>
            {error && <p style={{ color: 'red', marginTop: '1rem' }}>{error}</p>}
          </form>
        </Wrapper>
      ) : (
        <>
          <Card
            variants={fadeIn('down', 0.4)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
          >
            <CircleWrapper>
              <Circle />
            </CircleWrapper>
            <i className="element-top"></i>
            <div>
              <img
                style={{
                  width: '10rem',
                  height: '11.5rem',
                  objectFit: 'cover',
                  clipPath: 'polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)',
                }}
                src={ImageBadge}
                alt=""
              />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              <h3>{nameFormat}</h3>
              <p>Fullstack Developer</p>
              <img src={LogoMgr} alt="" />
            </div>

            <Link
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '5px',
                color: 'var(--orange-color)',
                textDecoration: 'none',
                position: 'absolute',
                right: '-50%',
                cursor: 'pointer',
              }}
              to="/exercise-two"
            >
              <span>Avançar</span>
              <GoArrowRight size={25} />
            </Link>
          </Card>
        </>
      )}
    </Container>
  )
}

export default ExerciseOne
