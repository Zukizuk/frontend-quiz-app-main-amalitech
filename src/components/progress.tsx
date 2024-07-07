import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

export default function Progress({ value }: { value: number }) {
  return (
    <Root
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={10}
      aria-valuemax={100}
      as={motion.div}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
    >
      <Indicator value={value}></Indicator>
    </Root>
  );
}

const Root = styled.div`
  display: grid;
  align-items: center;
  padding-inline: 0.25rem;
  background-color: ${({ theme }) => `rgb(${theme.itemBG})`};
  height: 1rem;
  border-radius: 999px;
`;

interface IndicatorProps {
  value: number;
}

const Indicator = styled.div<IndicatorProps>`
  background-color: rgb(var(--purple));
  height: 50%;
  border-radius: 999px;
  width: ${(props) => `${props.value || 0}%`};
  transition: all 0.3s ease-in-out;
`;
