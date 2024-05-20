import { styled } from 'styled-components'
import { motion } from 'framer-motion'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-x: auto;

  width: 100%;
  height: 100vh;

  color: #fff;
`
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

  gap: 2rem;

  form {
    position: relative;
  }
`

export const Legend = styled.div`
  h2 {
    color: var(--orange-color);
  }

  span {
    color: var(--light-blue-color);
  }

  width: 30vw;
`

export const Result = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 0.5rem;

  width: 30vw;
  max-height: 50%;
`

export const Letters = styled(motion.div)`
  div {
    ul {
      display: flex;
      flex-direction: row;
      gap: 0.5rem;
      flex-wrap: wrap;
    }
  }
`
export const Numbers = styled(motion.div)`
  div {
    ul {
      display: flex;
      flex-direction: row;
      gap: 0.5rem;
      flex-wrap: wrap;
    }
  }
`
