import { NavLink } from 'react-router-dom'
import { fadeIn } from '../../utils/variants'

import ImageBox from '../../assets/astronauta-profile.jpg'

import { Container, Wrapper, Box, Image } from './styles'

export default function HomePage() {
  return (
    <Container>
      <Wrapper>
        <Box
          variants={fadeIn('down', 0.4)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.7 }}
        >
          <h1>
            DESAFIO PRÁTICO <br /> <span>MODALGR</span>
          </h1>
          <p>
            Olá seja bem vindo ao meu projeto de teste para a ModalGR, fique a vontade para navegar e testar os
            exercícios propostos..🚀
          </p>
          <NavLink className="btn-navlink" to="/exercise-one">
            +Testar Exercícios
          </NavLink>
        </Box>
        <Image
          variants={fadeIn('up', 0.4)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.7 }}
          src={ImageBox}
          alt=""
        />
      </Wrapper>
    </Container>
  )
}
