import { motion } from 'framer-motion'
import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  color: #fff;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 3rem;

  width: 100%;
`

export const Box = styled(motion.div)`
  h1 {
    color: var(--orange-color);
    font-size: 3.4rem;
    font-weight: bold;
    line-height: 3.2rem;
    margin-bottom: 1rem;

    span {
      color: var(--light-blue-color);
    }
  }
  p {
    font-size: 1rem;
    max-width: 30rem;
  }

  .btn-navlink {
    display: inline-block;
    padding: 1rem 2rem;
    margin-top: 3rem;
    border-radius: 1rem;
    background-color: var(--light-blue-color);
    color: #fff;
    font-weight: 500;
    text-decoration: none;

    transition: background-color 0.3s;

    &:hover {
      background-color: #0e8ab9;
    }
  }
`

export const Image = styled(motion.img)`
  width: 440px;
  height: 440px;
  border-radius: 50%;
  object-fit: cover;

  box-shadow: 0 0 20px var(--light-blue-color);
`
