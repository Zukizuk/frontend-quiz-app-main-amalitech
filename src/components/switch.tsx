import React from "react";
import styled from "styled-components";

interface Props {
  toggleTheme: () => void;
  mode: string;
}

export default function Switch({ toggleTheme, mode }: Props) {
  return (
    <StyledSwitch data-state={mode === "dark"} onClick={toggleTheme}>
      <Thumb data-state={mode === "dark"}></Thumb>
    </StyledSwitch>
  );
}

const StyledSwitch = styled.button`
  display: inline-flex;
  width: 2rem;
  padding: 4px;
  align-items: center;
  background-color: rgb(var(--purple));
  border-radius: 9999px;
  cursor: pointer;
`;

const Thumb = styled.span`
  background-color: white;
  height: 0.75rem;
  width: 0.75rem;
  border-radius: 9999px;
  display: block;
  transform: translateX(0);
  transition: transform 0.2s;
  &[data-state="true"] {
    transform: translateX(0.8rem);
  }
`;
