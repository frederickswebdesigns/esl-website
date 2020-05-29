import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

const StyledBurger = styled(motion.button)`
  position: absolute;
  top: 25%;
  right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1000;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) => (open ? "#fff" : "#000333")};
    border-radius: 10px;
    ${"" /* transition: all 0.3s linear; */}
    position: relative;
    transform-origin: 1px;

    :first-child {
      ${"" /* transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")}; */}
    }

    :nth-child(2) {
      ${"" /* opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")}; */}
    }

    :nth-child(3) {
      ${"" /* transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")}; */}
    }
  }
  @media only screen and (min-width: 769px) {
    display: none;
  }
`

const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <motion.div
        animate={{
          rotate: open ? 45 : 0,
        }}
      />
      <motion.div
        animate={{
          x: open ? 20 : 0,
          opacity: open ? 0 : 1,
        }}
      />
      <motion.div
        animate={{
          rotate: open ? -45 : 0,
        }}
      />
    </StyledBurger>
  )
}

export default Burger
