import { motion } from 'framer-motion'
import { styled } from 'styled-components'

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
    color: #ff8a00;
  }

  span {
    color: #1ba8e2;
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
