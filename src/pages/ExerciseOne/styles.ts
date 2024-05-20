import { motion } from 'framer-motion'
import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100vh;
`
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  height: 100%;
`

export const Legend = styled.div`
  width: 30vw;

  h2 {
    color: #ff8a00;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  span {
    color: #1ba8e2;
  }
`

export const Card = styled(motion.div)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  padding: 1rem;

  border-radius: 30px;
  box-shadow: 0 1px 5px 2px rgba(255, 255, 255, 1);

  color: #fff;

  position: fixed;

  width: 285px;
  height: 480px;
  background: linear-gradient(135deg, #0f1a4b 0%, #1a274e 50%, #000428 100%);

  h2 {
    color: #fff;
  }

  .element-top {
    width: 50px;
    height: 10px;
    position: absolute;
    top: 20px;
    background-color: #1e1e1e;
    border-radius: 10px;
    border: 2px solid #fff;
    box-shadow: 0 1px 5px 2px rgba(255, 255, 255, 1);
  }
`

export const CircleWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
  overflow: hidden;
  border-radius: 30px;
`

export const Circle = styled.div`
  position: absolute;
  width: 320px;
  height: 320px;
  top: -4.2em;
  right: -10em;
  border-radius: 50%;
  z-index: -5;
  background: radial-gradient(circle, #e6e6e6 0%, #000000 100%);
  box-shadow: 0 1px 5px 2px rgba(255, 255, 255, 1);
`
